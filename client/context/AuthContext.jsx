import { useQuery, useQueryClient } from '@tanstack/react-query';
import { createContext, useContext } from 'react';
import { API_URL } from '../src/config';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const queryClient = useQueryClient();

  const {
    data: user = null,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const res = await fetch(`${API_URL}users/me`, {
        credentials: 'include',
      });

      if (!res.ok) throw new Error('Failed to fetch user');

      const { data } = await res.json();
      return data.data;
    },
    staleTime: 5 * 60 * 1000,
  });

  const logout = async () => {
    try {
      await fetch(`${API_URL}users/logout`, {
        method: 'GET',
        credentials: 'include',
      });
      queryClient.setQueryData(['user'], null);
      toast.success('Successfully logged out!');
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const refetchUser = () => queryClient.invalidateQueries(['user']);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        error,
        logout,
        refetchUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
