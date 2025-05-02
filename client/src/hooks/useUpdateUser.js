import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { API_URL } from '../config';

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading } = useMutation({
    mutationFn: async ({ formData, type }) => {
      console.log(formData);
      const url =
        type === 'password' ? 'users/updateMyPassword' : 'users/updateMe';
      const res = await fetch(`${API_URL}${url}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        formData,
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Request failed');

      return data.data;
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
