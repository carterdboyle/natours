import { useQuery } from '@tanstack/react-query';
import { API_URL } from '../config';

export function useBookings() {
  const {
    isLoading,
    data: tours,
    error,
  } = useQuery({
    queryKey: ['my-tours'],
    queryFn: async () => {
      const res = await fetch(`${API_URL}bookings/my-tours`, {
        credentials: 'include',
      });
      if (!res.ok) throw new Error('Failed to fetch tours');

      const data = await res.json();

      return data.data;
    },
  });

  return { isLoading, tours, error };
}
