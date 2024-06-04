import { Link } from "react-router-dom";
import Portfolio from "../Portfolio/Portfolio";
import myFoto from "../../images/my-foto.jpg";

function AboutMe() {
  return (
    <section className="aboutme">
      <h3 className="aboutme__title">Студент</h3>
      <hr className="aboutme__line"></hr>
      <img className="aboutme__myfoto" src={myFoto} alt="Мое фото"></img>
      <p className="aboutme__name">Вячеслав</p>
      <p className="aboutme__profession">Фронтенд-разработчик</p>
      <nav className="aboutme__menu">
        <a href={"https://t.me/CJLaBa7"} className="aboutme__link">
          Telegram
        </a>
        <a href={"https://github.com/Slava65"} className="aboutme__link">
          Github
        </a>
      </nav>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
