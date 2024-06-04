import { Link } from "react-router-dom";
import React from "react";
import useFormWithValidation from "../../utiles/validation";

function Register({ onRegister, registerError }) {
  const validation = useFormWithValidation();
  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(validation.data);
    validation.resetForm();
  };

  return (
    <form className="register" onSubmit={handleSubmit}>
      <Link to={"/"} className="register__link">
        <button
          type="button"
          className="register__logo"
          aria-label="О проекте"
        ></button>
      </Link>
      <h2 className="register__title">Добро пожаловать!</h2>
      <p className="register__data-lable">Имя</p>
      <input
        className={`register__data ${
          validation.errors.name && "register__data_active"
        }`}
        id="name"
        type="text"
        name="name"
        onChange={validation.handleChange}
        required
        minLength="2"
        pattern="[A-Za-zА-Яа-яЁё\s]+$"
      ></input>
      <label className="register__error">{validation.errors.name}</label>
      <p className="register__data-lable">E-mail</p>
      <input
        className={`register__data ${
          validation.errors.email && "register__data_active"
        }`}
        id="email"
        type="text"
        name="email"
        onChange={validation.handleChange}
        required
        minLength="2"
        pattern="^[^@]+@[^@.]+\.[^@]+$"
      ></input>
      <label className="register__error">{validation.errors.email}</label>
      <p className="register__data-lable">Пароль</p>
      <input
        className={`register__data ${
          validation.errors.password && "register__data_active"
        }`}
        id="password"
        type="password"
        name="password"
        onChange={validation.handleChange}
        required
        minLength="2"
      ></input>
      <label className="register__error">{validation.errors.password}</label>
      {registerError && (
        <lable className="register__error-submit">{registerError}</lable>
      )}
      <button
        type="submit"
        className={`register__finish ${
          validation.isValid && "register__finish_active"
        }`}
      >
        Зарегистрироваться
      </button>
      <div className="register__login">
        <p className="register__login-text">Уже зарегистрированы?</p>
        <Link
          to={"/signin"}
          className="register__login-text register__login-text_signin"
        >
          Войти
        </Link>
      </div>
    </form>
  );
}

export default Register;
