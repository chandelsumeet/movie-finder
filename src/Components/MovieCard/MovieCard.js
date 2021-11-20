import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardSubtitle,
  Button,
  CardText,
  CardLink,
} from "reactstrap";
import "./MovieCard.css";
const MovieCard = (props) => {
  const { Title, Year, imdbId, Poster } = props.movie;
  return (
    <div className="movie-card">
      <h3>{Title}</h3>
      <img src={Poster} />
    </div>
  );
};

export default MovieCard;
