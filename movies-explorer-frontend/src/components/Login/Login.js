import React from "react";
import { Link } from "react-router-dom";
import useFormWithValidation from "../../utiles/validation";

function Login({ handleLogin, loginError }) {
  const validation = useFormWithValidation();
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(validation.data);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <Link to={"/"} className="login__link">
        <button
          type="button"
          className="login__logo"
          aria-label="О проекте"
        ></button>
      </Link>
      <h2 className="login__title">Рады видеть!</h2>
      <p className="login__data-lable">E-mail</p>
      <input
        className={`login__data ${validation.errors.email && "login__data_active"}`}
        id="email"
        type="text"
        name="email"
        onChange={validation.handleChange}
        required
        minLength="2"
        pattern="^[^@]+@[^@.]+\.[^@]+$"
      ></input>
      <label className="login__error">{validation.errors.email}</label>
      <p className="login__data-lable">Пароль</p>
      <input
        className={`login__data ${validation.errors.password && "login__data_active"}`}
        id="password"
        type="password"
        name="password"
        onChange={validation.handleChange}
        required
        minLength="2"
      ></input>
      <label className="login__error">{validation.errors.password}</label>
      {loginError && (
        <lable className="register__error-submit">{loginError}</lable>
      )}
      <button type="submit" className={`login__finish ${validation.isValid && "login__finish_active"}`}>
        Войти
      </button>
      <div className="login__register">
        <p className="login__register-text">Ещё не зарегистрированы?</p>
        <Link
          to={"/signup"}
          className="login__register-text login__register-text_signup"
        >
          Регистрация
        </Link>
      </div>
    </form>
  );
}

export default Login;
