import { useQuery } from '@tanstack/react-query';

import { API_URL } from '../config';
import Spinner from '../components/Spinner';

export default function Overview() {
  const {
    isLoading,
    data: tours,
    error,
  } = useQuery({
    queryKey: ['tours'],
    queryFn: async () => {
      const res = await fetch(`${API_URL}tours`);
      const { data } = await res.json();
      return data.data;
    },
  });

  if (isLoading) return <Spinner />;
}
