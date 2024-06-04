import Navigation from "../Navigation/Navigation";
import { Route, Link, Switch } from "react-router-dom";
import React from "react";

function Header({ isMenuOpen, openMenu, closeMenu, headerToSignIn, loggedIn }) {
  return (
    <header className="header">
      <Link to={"/"}>
        <button
          type="button"
          className="header__logo"
          aria-label="О проекте"
        ></button>
      </Link>
      <Switch>
        <Route exact path="/">
          {!loggedIn && (
            <nav className="header__nav-sign">
              <Link to={"/signup"} className="header__signup">
                Регистрация
              </Link>
              <button
                type="button"
                className="header__button-in"
                aria-label="Войти"
                onClick={headerToSignIn}
              >
                Войти
              </button>
            </nav>
          )}
          {loggedIn && (
            <Navigation isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
          )}
        </Route>
        <Route path="/">
          <button
            type="button"
            className="header__menu-open"
            aria-label="Открыть меню"
            onClick={openMenu}
          ></button>
          <Navigation isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
