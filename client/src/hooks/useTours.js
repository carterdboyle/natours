import { useQuery } from '@tanstack/react-query';
import { API_URL } from '../config';

export function useTours() {
  const {
    isLoading,
    data: tours,
    error,
  } = useQuery({
    queryKey: ['tours'],
    queryFn: async () => {
      const res = await fetch(`${API_URL}tours`);
      if (!res.ok) throw new Error(data.message);

      const { data } = await res.json();
      return data.data;
    },
  });

  return { isLoading, tours, error };
}
