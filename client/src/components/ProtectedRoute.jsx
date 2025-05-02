import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useEffect } from 'react';
import Spinner from './Spinner';

import styled from 'styled-components';

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isLoading, user } = useAuth();

  // 3. If there is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!user && !isLoading) navigate('/login');
    },
    [user, isLoading, navigate]
  );

  // 3. While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. If there is a user, render the app
  if (user) return children;
}

export default ProtectedRoute;
