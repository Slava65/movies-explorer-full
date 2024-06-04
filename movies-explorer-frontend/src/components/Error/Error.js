import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <p className="error__code">404</p>
      <p className="error__text">Страница не найдена</p>
      <Link to={"/"} className="error__link">
        Назад
      </Link>
    </div>
  );
}

export default Error;
