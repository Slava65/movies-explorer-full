import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";

function Profile({ onUpdateUser, onSignOut, isSuccessUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [data, setData] = React.useState({
    name: "",
    email: "",
  });
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  React.useEffect(() => {
    const userName = currentUser.name;
    const userEmail = currentUser.email;
    setData({ name: userName, email: userEmail });
  }, []);

  const handleChange = (e) => {
    const target = e.target;
    const { name, value } = target;
    setData({
      ...data,
      [name]: value,
    });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  function handleSubmitProfile(e) {
    e.preventDefault();
    onUpdateUser({
      name: data.name,
      email: data.email,
    });
  }

  return (
    <form className="profile" onSubmit={handleSubmitProfile}>
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      <div className="profile__data">
        <input
          name="name"
          type="text"
          className="profile__name"
          value={data.name}
          onChange={handleChange}
          required
          minLength="2"
          pattern="[A-Za-zА-Яа-яЁё\s]+$"
        />
        <label className="register__error">{errors.name}</label>
        <p className="profile__lable-name">Имя</p>
        <hr className="profile__line"></hr>
        <input
          name="email"
          type="text"
          className="profile__email"
          value={data.email}
          onChange={handleChange}
          required
          minLength="2"
          pattern="^[^@]+@[^@.]+\.[^@]+$"
        />
        <label className="register__error">{errors.email}</label>
        <label className="profile__success-message">{isSuccessUpdateUser && "Данные успешно изменены"}</label>
        <p className="profile__lable-mail">Почта</p>
      </div>
      <div className="profile__manage-block">
        <button
          type="submit"
          className={`profile__edit ${isValid && "profile__edit_active"}`}
        >
          Редактировать
        </button>
        <Link to={"/"} className="profile__exit" onClick={onSignOut}>
          Выйти из аккаунта
        </Link>
      </div>
    </form>
  );
}

export default Profile;
