import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  CardGroup,
} from "reactstrap";
import "./SearchTitle.css";

import MovieCard from "../MovieCard/MovieCard";

const SearchByTitile = () => {
  const [movieName, setMovieName] = useState("");
  const [movieData, setMovie] = useState({});

  const getInputHandler = (e) => {
    setMovieName(e.target.value);
  };

  const getMovieHandler = async () => {
    const apikey = "553a1371";
    let pageNumber = 1;

    const url = `http://www.omdbapi.com/?s=${movieName}&page=${pageNumber}&apikey=${apikey}`;

    const response = await fetch(url);
    if (response.status >= 200 && response.status <= 299) {
      const data = await response.json();
      setMovie(data);
    } else {
      console.error("bad request");
    }
  };
  const { Search } = movieData;
  return (
    <>
      <Container>
        <h1>Enter A Movie Name</h1>
        <Card
          style={{
            backgroundColor: "#fafafa",
            borderColor: "#333",
          }}
        >
          <CardBody>
            <Form>
              <div className="grid-container">
                <Input onChange={getInputHandler} />
                <Button className="search" onClick={getMovieHandler}>
                  Search
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Container>

      <div className="movie-card-container">
        {Search &&
          Search.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
      </div>
    </>
  );
};

export default SearchByTitile;
