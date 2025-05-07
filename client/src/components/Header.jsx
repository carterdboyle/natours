import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <nav className="nav nav--tours">
        <NavLink className="nav__el" to="/">
          All Tours
        </NavLink>
        <form className="nav__search" />
      </nav>
      <div className="header__logo">
        <img src="/img/logo-white.png" alt="Natours logo" />
      </div>
      <nav className="nav nav--user">
        {user ? (
          <>
            <NavLink onClick={logout} className="nav__el nav__el--logout">
              Log out
            </NavLink>
            <NavLink className="nav__el" to="/me">
              <img
                className="nav__user-img"
                src={
                  user.photo.startsWith('http')
                    ? `${user.photo}`
                    : `/img/users/${user.photo}`
                }
                alt={`Photo of ${user.name}`}
              />
              <span>{user.name.split(' ').at(0)}</span>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink className="nav__el" to="/login">
              Log in
            </NavLink>
            <NavLink className="nav__el nav__el--cta btn" to="#">
              Sign up
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
