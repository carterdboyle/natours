import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { API_URL } from '../config';

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading } = useMutation({
    mutationFn: async ({ data, type }) => {
      const url =
        type === 'password' ? 'users/updateMyPassword' : 'users/updateMe';

      const req = new Request(`${API_URL}${url}`, {
        method: 'PATCH',
        credentials: 'include',
        body: data,
      });

      if (type === 'password')
        req.headers.set('content-type', 'application/json');

      const res = await fetch(req);
      const json = await res.json();

      if (!res.ok) throw new Error(json.message || 'Request failed');

      return json.data;
    },
    onSuccess: async (user) => {
      queryClient.setQueryData(['user'], user?.user);
      toast.success('Update successful!');
    },
    onError: (err) => {
      console.log('ERROR: ', err);
      toast.error('Update failed');
    },
  });

  return { updateUser, isLoading };
}
