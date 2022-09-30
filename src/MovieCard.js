import React from "react";

function MovieCard(props) {
  const { movie } = props;
  return (
    <div className="moviecard">
      <img src={movie.Poster} alt="poster" className="posterimage"></img>
      <div>
        <p className="cardtitle">
          <b>{movie.Title}</b>
        </p>
      </div>
    </div>
  );
}
export default MovieCard;
