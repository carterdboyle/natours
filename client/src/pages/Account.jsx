import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useUpdateUser } from '../hooks/useUpdateUser';
import { useAuth } from '../../context/AuthContext';
import Spinner from '../components/Spinner';

function NavItem({ link, text, icon, active }) {
  return (
    <li className={active ? 'side-nav--active' : ''}>
      <NavLink to={link}>
        <svg>
          <use xlinkHref={`/img/icons.svg#icon-${icon}`} />
        </svg>{' '}
        {text}
      </NavLink>
    </li>
  );
}

export default function Account() {
  const { isLoading: isLoadingUser, user } = useAuth();
  const { isLoading: isUpdatingUser, updateUser } = useUpdateUser();

  const [userName, setUserName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);

  const [password, setPassword] = useState('');
  const [passwordCurrent, setPasswordCurrent] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  function handleUserUpdate(e, type) {
    e.preventDefault();

    const data =
      type === 'password'
        ? JSON.stringify({
            password,
            passwordCurrent,
            passwordConfirm,
          })
        : new FormData(e.target);

    updateUser(
      { data, type },
      {
        onSettled: () => {
          setPassword('');
          setPasswordConfirm('');
          setPasswordCurrent('');
        },
      }
    );
  }

  return (
    <main className="main">
      <div className="user-view">
        <nav className="user-view__menu">
          <ul className="side-nav">
            <NavItem link="#" text="Settings" icon="settings" active={true} />
            <NavItem link="/my-tours" text="My bookings" icon="briefcase" />
            <NavItem link="#" text="My reviews" icon="star" />
            <NavItem link="#" text="Billing" icon="credit-card" />
          </ul>
          {user.role === 'admin' && (
            <div className="admin-nav">
              <h5 className="admin-nav__heading">Admin</h5>
              <ul className="side-nav">
                <NavItem link="#" text="Manage tours" icon="map" />
                <NavItem link="#" text="Manage users" icon="users" />
                <NavItem link="#" text="Manage reviews" icon="star" />
                <NavItem link="#" text="Manage bookins" icon="briefcase" />
              </ul>
            </div>
          )}
        </nav>
        <div className="user-view__content">
          {isUpdatingUser || isLoadingUser ? (
            <Spinner />
          ) : (
            <>
              <div className="user-view__form-container">
                <h2 className="heading-secondary ma-bt-md">
                  Your account settings
                </h2>
                <form
                  onSubmit={(e) => handleUserUpdate(e, 'user')}
                  className="form form-user-data"
                >
                  <div className="form__group">
                    <label className="form__label" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      className="form__input"
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                      name="name"
                    />
                  </div>
                  <div className="form__group ma-bt-md">
                    <label className="form__label" htmlFor="email">
                      Email address
                    </label>
                    <input
                      className="email form__input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      name="email"
                    />
                  </div>
                  <div className="form__group form__photo-upload">
                    <img
                      className="form__user-photo"
                      src={
                        user.photo.startsWith('http')
                          ? `${user.photo}`
                          : `/img/users/${user.photo}`
                      }
                      alt="User photo"
                    />
                    <input
                      className="form__upload"
                      type="file"
                      accept="image/*"
                      id="photo"
                      name="photo"
                    />
                    <label htmlFor="photo">Choose new photo</label>
                  </div>
                  <div className="form__group right">
                    <button className="btn btn--small btn--green">
                      Save settings
                    </button>
                  </div>
                </form>
              </div>

              <div className="line">&nbsp;</div>
              <div className="user-view__form-container">
                <h2 className="heading-secondary ma-bt-md">Password change</h2>
                <form
                  className="form form-user-password"
                  onSubmit={(e) => handleUserUpdate(e, 'password')}
                >
                  <div className="form__group">
                    <label className="form__label" htmlFor="password-current">
                      Current password
                    </label>
                    <input
                      id="password-current"
                      className="form__input"
                      type="password"
                      placeholder="••••••••"
                      value={passwordCurrent}
                      onChange={(e) => setPasswordCurrent(e.target.value)}
                      required
                      minLength={8}
                    />
                  </div>
                  <div className="form__group">
                    <label className="form__label" htmlFor="password">
                      New password
                    </label>
                    <input
                      id="password"
                      className="form__input"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={8}
                    />
                  </div>
                  <div className="form__group ma-bt-lg">
                    <label className="form__label" htmlFor="password-confirm">
                      Confirm password
                    </label>
                    <input
                      id="password-confirm"
                      className="form__input"
                      type="password"
                      placeholder="••••••••"
                      value={passwordConfirm}
                      onChange={(e) => setPasswordConfirm(e.target.value)}
                      required
                      minLength={8}
                    />
                  </div>
                  <div className="form__group right">
                    <button className="btn btn--small btn--green btn--save-password">
                      Save password
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
