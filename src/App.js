import axios from "axios";
import React, { useEffect, useState } from "react";

import MovieCard from "./MovieCard";

import "./styles.css";

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState("");
  const [searchedMovieList, setSearchedMoviList] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.omdbapi.com/?apikey=45f0782a&s=war")
      .then((res) => setAllMovies(res.data.Search))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (searchedMovies.length >= 3) {
      axios
        .get(`https://www.omdbapi.com/?apikey=45f0782a&s=${searchedMovies}`)
        .then((res) => setSearchedMoviList(res.data.Search))
        .catch((err) => console.log(err));
    }
  }, [searchedMovies]);

  return (
    <div>
      <div className="searchContainer">
        <input
          type="search"
          placeholder="Search for Movie Title ... "
          className="searchBox"
          onChange={(e) => setSearchedMovies(e.target.value)}
        />
      </div>
      {searchedMovies.length < 3 && <p className="error"></p>}
      <div className="movieWrapper">
        {searchedMovieList &&
        searchedMovieList.length !== 0 &&
        searchedMovies !== ""
          ? searchedMovieList.map((movie) => <MovieCard movie={movie} />)
          : allMovies.map((movie) => <MovieCard movie={movie} />)}
      </div>
    </div>
  );
}

export default App;
