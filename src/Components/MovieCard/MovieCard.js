import React from "react";
import { useParams } from "react-router";
import "./MovieCard.css";
const MovieCard = (props) => {
  const { Title, Year, imdbId, Poster } = props.movie;
  return (
    <div className="movie-card">
      <h4>{Title}</h4>
      <img src={Poster} />
    </div>
  );
};

export default MovieCard;
