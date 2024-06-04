class MoviesApi {
    constructor(options) {
      this._url = options.url;
      this._headers = options.headers;
    }
  
    _handleResult = (res) => {
      if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
      }
      return res.json();
    };
  
    getInitialMovies() {
      return fetch(`${this._url}/beatfilm-movies`, {
        headers:  {
          "Content-Type": "application/json"
        },
      }).then(this._handleResult);
    }
  
  }
  
  export const moviesapi = new MoviesApi({
    url: "https://api.nomoreparties.co",
    headers: {
      "Content-Type": "application/json"
    },
  });