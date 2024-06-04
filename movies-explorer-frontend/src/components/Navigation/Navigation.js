import React from "react";
import { Link } from "react-router-dom";

function Navigation({ isMenuOpen, closeMenu }) {
  return (
    <div className={`navigation ${isMenuOpen && "navigation_opened"}`}>
      <form className="navigation__container">
      <button
          type="button"
          className="navigation__close"
          aria-label="Закрыть Окно"
          onClick={closeMenu}
        ></button>
        <nav className="navigation__list">
          <Link to={"/"} className="navigation__link navigation__link_main">
            Главная
          </Link>
          <Link to={"/movies"} className="navigation__link">
            Фильмы
          </Link>
          <Link to={"/saved-movies"} className="navigation__link navigation__link_saved-movies">
            Сохранённые фильмы
          </Link>
          <div className="navigation__account">
          <Link to={"/profile"} className="navigation__link-account">
            Аккаунт
          </Link>
          <div className="navigation__account-logo" />
          </div>
        </nav>
      </form>
    </div>
  );
}

export default Navigation;
