import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import React from "react";
import Preloader from "../Preloader/Preloader";

function Movies({
  isSavedMovies,
  isMovieLike,
  likeMovieHandle,
  filteredMovies,
  handleUpdateFindWord,
  handleAddMovie,
  handleChangeCountMovies,
  countmovies,
  savedMovies,
  handleCardDeleteFromMovie,
  isGotResult,
  isLoading
}) {

  return (
    <div className="movies">
      <SearchForm handleUpdateFindWord={handleUpdateFindWord} filteredMovies={filteredMovies} />
      {filteredMovies.length > 0 && (
        isGotResult && (<MoviesCardList
          isSavedMovies={isSavedMovies}
          isMovieLike={isMovieLike}
          likeMovieHandle={likeMovieHandle}
          filteredMovies={filteredMovies}
          handleAddMovie={handleAddMovie}
          handleChangeCountMovies={handleChangeCountMovies}
          countmovies={countmovies}
          savedMovies={savedMovies}
          handleCardDeleteFromMovie={handleCardDeleteFromMovie}
        />)
      )}
      {isLoading && <Preloader />}
      {(filteredMovies.length === 0 && isGotResult) && (
        <p className="movies__noresult">Ничего не найдено</p>
      )}
    </div>
  );
}

export default Movies;
