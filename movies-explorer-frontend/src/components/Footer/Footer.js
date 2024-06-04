function Footer() {
  return (
    <footer className="footer">
      <h5 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h5>
      <hr className="footer__line"></hr>
      <div className="footer__menu-block">
        <p className="footer__year">&copy; 2023</p>
        <nav className="footer__menu">
          <a href={"https://praktikum.yandex.ru/"} className="footer__link">
            Яндекс.Практикум
          </a>
          <a href={"https://github.com/Slava65"} className="footer__link">
            Github
          </a>
          <a href={"https://t.me/CJLaBa7"} className="footer__link">
            Telegram
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
