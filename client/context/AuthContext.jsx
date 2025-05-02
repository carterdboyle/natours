import { useQuery, useQueryClient } from '@tanstack/react-query';
import { createContext, useContext } from 'react';
import { API_URL } from '../src/config';

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
      const res = await fetch(`${API_URL}users/me`);

      if (!res.ok) throw new Error('Failed to fetch user');

      const { data } = await res.json();
      return data.data;
    },
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  const logout = async () => {
    await fetch(`${API_URL}users/logout`, {
      method: 'GET',
      credentials: 'include',
    });
    queryClient.setQueryData(['user'], null);
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
