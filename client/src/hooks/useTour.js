import { useQuery } from '@tanstack/react-query';
import { API_URL } from '../config';
import { useParams } from 'react-router-dom';

export function useTour() {
  const { slug } = useParams();

  const {
    isLoading,
    data: tour,
    error,
  } = useQuery({
    queryKey: ['tour', `${slug}`],
    queryFn: async () => {
      const res = await fetch(`${API_URL}tours/slug/${slug}`);
      if (!res.ok) throw new Error(data.message);

      const { data } = await res.json();
      return data.data;
    },
  });

  return { isLoading, tour, error };
}
