import React from "react";
import MovieCard from "./MovieCard";
import styled from "styled-components";
import LocaleContext from "../contexts/LocaleContext";

const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const NoMoviesMessage = styled.p`
  text-align: center;
  font-size: 18px;
  color: #555;
  width: 100%;

  @media (max-width: 767.98px) {
    font-size: 14px;
  }
  @media (max-width: 575.98px) {
    font-size: 12px;
  }
`;

const MovieList = ({ movies }) => {
  const { selectLanguage } = React.useContext(LocaleContext);

  return (
    <MovieListContainer>
      {movies && movies.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
      ) : (
        <NoMoviesMessage>
          {selectLanguage({
            id: "Tidak ada film yang ditemukan.",
            en: "No movies found.",
          })}
        </NoMoviesMessage>
      )}
    </MovieListContainer>
  );
};

export default MovieList;
