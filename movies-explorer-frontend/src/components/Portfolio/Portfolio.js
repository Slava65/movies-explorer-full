import itemIcon from "../../images/portfolio__item_icon.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <p className="portfolio__lable">Портфолио</p>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <p className="portfolio__text">
            Статичный сайт
            <a href="https://github.com/Slava65/how-to-learn">
              <img
                className="portfolio__icon"
                src={itemIcon}
                alt="Стрелка элемента"
              ></img>
            </a>
          </p>
        </li>
        <li className="portfolio__item">
          <p className="portfolio__text">
            Адаптивный сайт
            <a href="https://github.com/Slava65/russian-travel">
              <img
                className="portfolio__icon"
                src={itemIcon}
                alt="Стрелка элемента"
              ></img>
            </a>
          </p>
        </li>
        <li className="portfolio__item">
          <p className="portfolio__text">
            Одностраничное приложение
            <a href="https://github.com/Slava65/react-mesto-api-full">
              <img
                className="portfolio__icon"
                src={itemIcon}
                alt="Стрелка элемента"
              ></img>
            </a>
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
