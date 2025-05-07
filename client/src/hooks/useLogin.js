import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: async ({ email, password }) => {
      const res = await fetch(`${API_URL}users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Login failed');

      return data.data;
    },
    onSuccess: async (user) => {
      queryClient.setQueryData(['user'], user?.user);
      toast.success('Logged in successfully!');
      navigate('/', { replace: true });
    },
    onError: (err) => {
      console.log('ERROR: ', err);
      toast.error('Provided email or password are incorrect');
    },
  });

  return { login, isLoading };
}
