import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import "./Pagination.css";
const PaginationComponent = (props) => {
  const { totalResults } = props;
  const pagePerResult = 10;
  const buttonCount = Math.ceil(totalResults / pagePerResult) || 0;
  const paginationButtons = [];
  const { setPageNumber } = props;
  const { getMovieHandler } = props;

  const paginationButtonHandler = (event, pageNumber) => {
    setPageNumber(() => {
      getMovieHandler(event, pageNumber);
      return pageNumber;
    });
  };

  const createPaginationButton = (buttonCount) => {
    for (let i = 1; i <= buttonCount; i++) {
      paginationButtons.push(
        <PaginationItem
          key={`${i}`}
          onClick={(event) => paginationButtonHandler(event, i)}
        >
          <PaginationLink href="#">{i}</PaginationLink>
        </PaginationItem>
      );
    }
  };

  buttonCount && createPaginationButton(buttonCount);
  return (
    <div className="pagination-container">
      <Pagination>
        <PaginationItem>
          <PaginationLink href="#" previous />
        </PaginationItem>
        {paginationButtons.map((item) => {
          return item;
        })}
        <PaginationItem>
          <PaginationLink href="#" next />
        </PaginationItem>
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
