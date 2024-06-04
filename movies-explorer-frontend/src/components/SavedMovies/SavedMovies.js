import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function SavedMovies({
  isSavedMovies,
  savedMovies,
  handleCardDelete,
  handleFindSavedMovies,
  filteredSavedMovies,
  isLoading,
  isGotResult
}) {
  return (
    <div className="movies">
      <SearchForm
        handleFindSavedMovies={handleFindSavedMovies}
        isSavedMovies={isSavedMovies}
        savedMovies={savedMovies}
        filteredSavedMovies={filteredSavedMovies}
      />
      <MoviesCardList
        isSavedMovies={isSavedMovies}
        savedMovies={savedMovies}
        handleCardDelete={handleCardDelete}
        filteredSavedMovies={filteredSavedMovies}
      />
      {isLoading && <Preloader />}
      {(filteredSavedMovies.length === 0 && isGotResult) && (
        <p className="movies__noresult">Ничего не найдено</p>
      )}
    </div>
  );
}

export default SavedMovies;
