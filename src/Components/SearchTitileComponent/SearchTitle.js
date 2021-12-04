import React, { useState } from "react";
import PaginationComponent from "../Pagination/Pagination";
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
  Pagination,
} from "reactstrap";
import "./SearchTitle.css";

import MovieCard from "../MovieCard/MovieCard";

const SearchByTitile = () => {
  const [movieName, setMovieName] = useState("");
  const [movieData, setMovie] = useState({});
  const [pageNumber, setPageNumber] = useState(1);
  const getInputHandler = (e) => {
    setMovieName(e.target.value);
  };

  const getMovieHandler = async (event, pageNumber) => {
    event.preventDefault();
    const apikey = "553a1371";

    const url = `http://www.omdbapi.com/?s=${movieName}&page=${pageNumber}&apikey=${apikey}`;

    const response = await fetch(url);
    if (response.status >= 200 && response.status <= 299) {
      const data = await response.json();
      setMovie(data);
    } else {
      console.error("bad request");
    }
  };
  const { Search, totalResults } = movieData;

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
            <Form onSubmit={(event) => getMovieHandler(event, 1)}>
              <div className="grid-container">
                <Input onChange={getInputHandler} />
                <Button type="submit" className="search">
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
            return <MovieCard key={movie.imdbID} movie={movie} />;
          })}
      </div>

      {Search && (
        <PaginationComponent
          totalResults={totalResults}
          setPageNumber={setPageNumber}
          getMovieHandler={getMovieHandler}
        />
      )}
    </>
  );
};

export default SearchByTitile;
