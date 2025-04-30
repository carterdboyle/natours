export default function Header() {
  return (
    <header className="header">
      <nav className="nav nav--tours">
        <a className="nav__el" href="/">
          All Tours
        </a>
        <form className="nav__search" />
        <div className="header__logo">
          <img src="/img/logo-white.png" alt="Natours logo" />
        </div>
        <nav className="nav nav--user">
          <a className="nav__el" href="/login">
            Log in
          </a>
          <a className="nav__el nav__el--cta btn" href="#">
            Sign up
          </a>
        </nav>
      </nav>
    </header>
  );
}
