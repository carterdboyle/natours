import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import AppLayout from './components/AppLayout';
import GlobalStyles from './styles/GlobalStyles';
import Overview from './pages/Overview';
import Tour from './pages/Tour';
import Login from './pages/Login';
import Account from './pages/Account';
import { AuthProvider } from '../context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import PageNotFound from './pages/PageNotFound';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="overview" />} />
              <Route path="overview" element={<Overview />} />
              <Route path="tours/:slug" element={<Tour />} />
              <Route path="login" element={<Login />} />
              <Route
                path="/me"
                element={
                  <ProtectedRoute>
                    <Account />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{
            margin: '8px',
          }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: '16px',
              maxWidth: '500px',
              padding: '16px 24px',
              backgroundColor: '#20bf6b',
              color: '#fff',
            },
          }}
        />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
