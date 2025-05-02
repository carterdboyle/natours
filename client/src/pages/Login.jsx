import { useState } from 'react';

import SpinnerMini from '../components/SpinnerMini';
import { useLogin } from '../hooks/useLogin';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isLoading, login } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      }
    );
  }

  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
        <form onSubmit={handleSubmit} className="form form--login">
          <div className="form__group">
            <label className="form__label" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              className="form__input"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>
          <div className="form__group ma-bt-md">
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className="form__input"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              required
              minLength={8}
            />
          </div>
          <div className="form__group">
            <button className="btn btn--green">
              {!isLoading ? 'Login' : <SpinnerMini />}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
