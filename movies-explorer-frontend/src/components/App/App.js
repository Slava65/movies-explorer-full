import React from "react";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Error from "../Error/Error";
import { Switch } from "react-router";
import { Route, useHistory } from "react-router-dom";
import { moviesapi } from "../../utiles/MoviesApi";
import { mainapi } from "../../utiles/MainApi";
import ProtectedRoute from "../ProtectedRoute";

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMovieLike, setIsMovieLike] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = React.useState([]);
  const [countmovies, setCountmovies] = React.useState(3);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const history = useHistory();
  const [isGotResult, setIsGotResult] = React.useState(false);
  const [registerError, setRegisterError] = React.useState("");
  const [loginError, setLoginError] = React.useState("");
  const [isSuccessUpdateUser, setIsSuccessUpdateUser] = React.useState(false);

  React.useEffect(() => {
    let jwt = localStorage.getItem("jwt");
    if (jwt) {
      tokenCheck(jwt);
    }
  }, []);

  React.useEffect(() => {
    moviesapi
      .getInitialMovies()
      .then((res) => {
        const convertedRes = moviesConvert(res);
        setMovies(convertedRes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loggedIn]);

  React.useEffect(() => {
    mainapi
      .getInitialMovies()
      .then((res) => {
        const userMovies = res.data.filter((movie) => {
          return movie.owner === currentUser._id;
        });
        setSavedMovies(userMovies);
        setFilteredSavedMovies(userMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loggedIn]);

  React.useEffect(() => {
    return mainapi
      .getInfoUser()
      .then((user) => {
        setCurrentUser(user.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loggedIn]);

  function changeGotResult() {
    setIsGotResult(true);
  }

  function onRegister(data) {
    const { name, email, password } = data;
    return mainapi
      .register(name, email, password)
      .then((res) => {
        history.push("/movies");
      })
      .catch((err) => {
        setLoggedIn(false);
        if (err === "Error: 409") {
          setRegisterError("Пользователь с таким email уже существует");
        }
        if (err === "Error: 500") {
          setRegisterError("При регистрации пользователя произошла ошибка");
        }
      });
  }

  function onLogin(data) {
    const { email, password } = data;
    return mainapi
      .authorize(email, password)
      .then((res) => {
        let jwt = res.token;
        tokenCheck(jwt);
        localStorage.setItem("jwt", jwt);
        history.push("/");
      })
      .catch((err) => {
        if (err === "Error: 400") {
          setLoginError("Вы ввели неправильный логин или пароль");
        }
        if (err === "Error: 401") {
          setLoginError(
            "При авторизации произошла ошибка. Токен не передан или передан не в том формате"
          );
        }
        if (err === "Error: 403") {
          setLoginError(
            "При авторизации произошла ошибка. Переданный токен не корректен"
          );
        }
      });
  }

  function tokenCheck(jwt) {
    return mainapi
      .getContent(jwt)
      .then((res) => {
        setCurrentUser(res.data);
        setLoggedIn(true);
        history.push("/");
      })
      .catch(() => {
        localStorage.removeItem("jwt", jwt);
        history.push("/");
      });
  }

  function handleChangeCountMovies() {
    const newCountmovies = countmovies + 3;
    setCountmovies(newCountmovies);
  }

  function handleUpdateFindWord(word, isChecked) {
    setIsLoading(true);
    const filteredRes = findMovies(movies, word, isChecked);
    setFilteredMovies(filteredRes);
    setIsLoading(false);
    changeGotResult();
  }

  function handleFindSavedMovies(word, isChecked) {
    setIsLoading(true);
    const filteredMovies = findMovies(savedMovies, word, isChecked);
    setFilteredSavedMovies(filteredMovies);
    setIsLoading(false);
    changeGotResult();
  }

  function moviesConvert(movies) {
    return movies.map((movie) => {
      return {
        country: movie.country || "Какая-то страна",
        created_at: movie.created_at,
        description: movie.description || "Здесь должно было быть описание",
        director: movie.director || "Какой-то директор",
        duration: movie.duration,
        id: movie.id,
        image: movie.image || "Путь к картинке",
        nameEN: movie.nameEN || "Здесь должно быть описание на английском",
        nameRU: movie.nameRU || "Здесь должно быть описание на русском",
        trailerLink: movie.trailerLink,
        updated_at: movie.updated_at,
        year: movie.year || "Год такой-то",
      };
    });
  }

  function findMovies(movies, word, isChecked) {
    return movies.filter((movie) => {
      return finder(movie, word, isChecked);
    });
  }

  function finder(movie, word, isChecked) {
    const {
      country,
      director,
      description,
      duration,
      nameRU,
      nameEN,
      year,
    } = movie;
    const lowerCasedWord = word.toLowerCase();
    if (
      country &&
      country.toLowerCase().includes(lowerCasedWord) &&
      (isChecked ? duration <= 40 : !isChecked)
    ) {
      return true;
    }
    if (
      director &&
      director.toLowerCase().includes(lowerCasedWord) &&
      (isChecked ? duration <= 40 : !isChecked)
    ) {
      return true;
    }
    if (
      nameRU &&
      nameRU.toLowerCase().includes(lowerCasedWord) &&
      (isChecked ? duration <= 40 : !isChecked)
    ) {
      return true;
    }
    if (
      nameEN &&
      nameEN.toLowerCase().includes(lowerCasedWord) &&
      (isChecked ? duration <= 40 : !isChecked)
    ) {
      return true;
    }
    if (
      description &&
      description.toLowerCase().includes(lowerCasedWord) &&
      (isChecked ? duration <= 40 : !isChecked)
    ) {
      return true;
    }
    if (
      year &&
      year.toLowerCase().includes(lowerCasedWord) &&
      (isChecked ? duration <= 40 : !isChecked)
    ) {
      return true;
    }
  }

  function handleAddMovie(movie) {
    mainapi
      .addMovie(movie)
      .then((newMovie) => {
        setSavedMovies([newMovie.data, ...savedMovies]);
        setFilteredSavedMovies([newMovie.data, ...filteredSavedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(movieId, movie) {
    mainapi
      .deleteMovie(movieId)
      .then((data) => {
        const currentSavedMovies = savedMovies.filter((c) => {
          return c._id !== movie._id;
        });
        setSavedMovies(currentSavedMovies);
        const currentFilteredSavedMovies = filteredSavedMovies.filter((c) => {
          return c._id !== movie._id;
        });
        setFilteredSavedMovies(currentFilteredSavedMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDeleteFromMovie(id, movie) {
    const currentMovie = savedMovies.filter((c) => {
      return c.movieId === id;
    });
    mainapi
      .deleteMovie(currentMovie[0]._id)
      .then((res) => {
        const currentSavedMovies = savedMovies.filter((c) => {
          return c.movieId !== movie.id;
        });
        setSavedMovies(currentSavedMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onUpdateUser(newData) {
    mainapi
      .updateUser(newData)
      .then((info) => {
        setCurrentUser(info.user);
        setIsSuccessUpdateUser(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function likeMovieHandle() {
    if (isMovieLike === false) {
      setIsMovieLike(true);
    } else {
      setIsMovieLike(false);
    }
  }

  function headerToSignIn() {
    history.push("/signin");
  }

  function onSignOut() {
    localStorage.removeItem("jwt");
    history.push("/signin");
    setLoggedIn(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header headerToSignIn={headerToSignIn} loggedIn={loggedIn} />
            <Main />
            <Footer />
          </Route>
          <Route path="/movies">
            <Header
              isMenuOpen={isMenuOpen}
              openMenu={openMenu}
              closeMenu={closeMenu}
            />
            <ProtectedRoute
              loggedIn={loggedIn}
              isSavedMovies={false}
              isMovieLike={isMovieLike}
              likeMovieHandle={likeMovieHandle}
              filteredMovies={filteredMovies}
              handleUpdateFindWord={handleUpdateFindWord}
              handleAddMovie={handleAddMovie}
              handleChangeCountMovies={handleChangeCountMovies}
              countmovies={countmovies}
              savedMovies={savedMovies}
              handleCardDeleteFromMovie={handleCardDeleteFromMovie}
              isGotResult={isGotResult}
              isLoading={isLoading}
              component={Movies}
            />
            <Footer />
          </Route>
          <Route path="/saved-movies">
            <Header
              isMenuOpen={isMenuOpen}
              openMenu={openMenu}
              closeMenu={closeMenu}
            />
            <ProtectedRoute
              loggedIn={loggedIn}
              isSavedMovies={true}
              savedMovies={savedMovies}
              handleUpdateFindWord={handleUpdateFindWord}
              handleCardDelete={handleCardDelete}
              handleFindSavedMovies={handleFindSavedMovies}
              filteredSavedMovies={filteredSavedMovies}
              isLoading={isLoading}
              isGotResult={isGotResult}
              component={SavedMovies}
            />
            <Footer />
          </Route>
          <Route path="/profile">
            <Header
              isMenuOpen={isMenuOpen}
              openMenu={openMenu}
              closeMenu={closeMenu}
            />
            <ProtectedRoute
              loggedIn={loggedIn}
              onUpdateUser={onUpdateUser}
              onSignOut={onSignOut}
              isSuccessUpdateUser={isSuccessUpdateUser}
              component={Profile}
            />
          </Route>
          <Route path="/signup">
            <Register onRegister={onRegister} registerError={registerError} />
          </Route>
          <Route path="/signin">
            <Login handleLogin={onLogin} loginError={loginError} />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
