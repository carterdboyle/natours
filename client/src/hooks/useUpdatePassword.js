import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { API_URL } from '../config';

export function useUpdatePassword() {
  const queryClient = useQueryClient();

  const { mutate: updatePassword, isLoading } = useMutation({
    mutationFn: async ({ passwordCurrent, password }) => {
      const res = await fetch(`${API_URL}users/updateMyPassword`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ passwordCurrent, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Request failed');

      return data.data;
    },
    onSuccess: async (user) => {
      queryClient.setQueryData(['user'], user?.user);
      toast.success('Updated password successful!');
    },
    onError: (err) => {
      console.log('ERROR: ', err);
      toast.error('Update failed');
    },
  });

  return { updatePassword, isLoading };
}
