import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MovieCardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
  width: 220px;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  @media (max-width: 1199.98px) {
    width: 200px;

    img {
      height: 230px;
    }
  }

  @media (max-width: 767.98px) {
    width: 180px;

    img {
      height: 210px;
    }
  }

  @media (max-width: 575.98px) {
    width: 160px;

    img {
      height: 190px;
    }
  }
`;

const MovieContent = styled.div`
  padding: 10px;

  h3 {
    font-size: 18px;
    margin: 0;
  }

  p {
    margin: 5px 0;
  }

  @media (max-width: 767.98px) {
    h3 {
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 575.98px) {
    h3 {
      font-size: 14px;
    }

    p {
      font-size: 12px;
    }
  }
`;

const MovieCard = ({ movie }) => {
  return (
    <MovieCardContainer>
      {movie.Poster === "N/A" ? 
      (
        <img src="./default-image.png" alt={movie.Title} />
      ) : (
        <img src={movie.Poster} alt={movie.Title} />
      )
      }
      <MovieContent>
        <h3>{movie.Title}</h3>
        <p>IMDB: {movie.imdbID}</p>
        <p>{movie.Year}</p>
        <p>{movie.Type}</p>
      </MovieContent>
    </MovieCardContainer>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imdbID: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
