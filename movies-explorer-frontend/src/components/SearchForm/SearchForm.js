import React from "react";
import searchFormIcon from "../../images/search-film-icon.svg";

function SearchForm({
  handleUpdateFindWord,
  handleFindSavedMovies,
  isSavedMovies,
  filteredMovies,
  filteredSavedMovies,
}) {
  const [word, setWord] = React.useState("");
  const [isChecked, setIsChecked] = React.useState(false);
  const [isValid, setIsValid] = React.useState(false);

  function handleChangeWord(e) {
    setWord(e.target.value);
    setIsValid(e.target.closest("form").checkValidity());
  }

  function handleSubmit(e) {
    e.preventDefault();
    isSavedMovies
      ? handleFindSavedMovies(word, isChecked)
      : handleUpdateFindWord(word, isChecked);
  }

  React.useEffect(() => {
    if (!isSavedMovies && filteredMovies.length > 0) {
      handleUpdateFindWord(word, isChecked);
    } else if (isSavedMovies) {
      handleFindSavedMovies(word, isChecked);
    }
  }, [isChecked]);

  function handleTurnCheckbox() {
    if (!isChecked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }

  return (
    <form className="searchform" onSubmit={handleSubmit}>
      <input
        name="keyword"
        className="searchform__film"
        placeholder="Фильм"
        value={word}
        onChange={handleChangeWord}
        pattern="[A-Za-zА-Яа-яЁё\s]{1,}"
      ></input>
      {!isValid && (
        <label className="searchform__error">
          {"Нужно ввести ключевое слово"}
        </label>
      )}
      <img
        className="searchform__icon"
        src={searchFormIcon}
        alt="лого поиска"
      ></img>
      {isValid && (
        <button type="submit" className="searchform__button">
          Найти
        </button>
      )}
      {!isValid && (
        <button type="submit" className="searchform__button" disabled>
          Найти
        </button>
      )}
      <div className="searchform__checkbox-block">
        <input
          type="checkbox"
          className="searchform__checkbox"
          id="checkbox"
          name="checkbox"
          value={isChecked}
          onClick={handleTurnCheckbox}
        ></input>
        <label className="searchform__lable" htmlFor="checkbox"></label>
        <p className="searchform__text">Короткометражки</p>
      </div>
    </form>
  );
}

export default SearchForm;
