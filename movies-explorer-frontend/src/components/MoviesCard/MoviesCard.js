import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function MoviesCard({
  movie,
  isSavedMovies,
  handleAddMovie,
  handleCardDelete,
  getIsSaved,
  handleCardDeleteFromMovie,
  savedMovies
}) {
  const baseUrl = "https://api.nomoreparties.co";
  const currentUser = React.useContext(CurrentUserContext);
  const [isSavedMovie, setIsSavedMovie] = React.useState(false);

  React.useEffect(() => {
    let isMovieSaved = getIsSaved(movie.id);
    setIsSavedMovie(isMovieSaved);
  }, [savedMovies]);

  function addMovie(e) {
    const user = currentUser._id;
    const newMovie = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `${baseUrl}${movie.image.url}`,
      trailer: movie.trailerLink,
      thumbnail: `${baseUrl}${movie.image.formats.thumbnail.url}`,
      owner: user,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    };
    e.preventDefault();
    handleAddMovie(newMovie);
    
  }

  function deleteFromSavedMovie() {
    handleCardDelete(movie._id, movie);
  }

  function deleteFromMovie() {
    handleCardDeleteFromMovie(movie.id, movie);
  }

  return (
    <li className="moviescard">
      <article>
        <div className="moviescard__header">
          <div className="moviescard__info">
            <h5 className="moviescard__title">{movie.nameRU}</h5>
            <p className="moviescard__duration">{`${Math.floor(movie.duration / 60)}ч ${(movie.duration % 60)}м`}</p>
          </div>
          {isSavedMovies && (
            <button
              type="button"
              className="moviescard__save moviescard__save_delete"
              aria-label="Сохранить"
              onClick={deleteFromSavedMovie}
            ></button>
          )}
          {!isSavedMovies && (
            <button
            type="button"
            className={`moviescard__save ${isSavedMovie && "moviescard__save_active"}`}
            aria-label="Сохранить"
            onClick={
              (isSavedMovie ? deleteFromMovie : addMovie)
            }
          ></button>
          )}
        </div>
        <a rel="noopener noreferrer" target="_blank" href={isSavedMovies ? movie.trailer : movie.trailerLink}>
        <img
          className="moviescard__image"
          alt={movie.nameRU}
          src={
            isSavedMovies ? `${movie.image}` : `${baseUrl}${movie.image.url}`
          }
        />
        </a>
      </article>
    </li>
  );
}

export default MoviesCard;
