import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { API_URL } from '../config';

const ENDPOINTS = {
  password: 'users/updateMyPassword',
  user: 'users/updateMe',
};

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending: isLoading } = useMutation({
    mutationFn: async ({ data, type }) => {
      const endpoint = ENDPOINTS[type];

      if (!endpoint) throw new Error(`Invalid update type: ${type}`);

      const req = new Request(`${API_URL}${endpoint}`, {
        method: 'PATCH',
        credentials: 'include',
        body: data,
      });

      if (type === 'password') {
        req.headers.set('Content-Type', 'application/json');
      }

      const res = await fetch(req);
      const json = await res.json();

      if (!res.ok) throw new Error(json.message || 'Request failed');

      return json.data;
    },

    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user?.user);
      toast.success('Update successful!');
    },

    onError: (err) => {
      console.error('Update error:', err);
      toast.error(err.message || 'Update failed');
    },
  });

  return { updateUser, isLoading };
}
