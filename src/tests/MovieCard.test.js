import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MovieCard from "../components/MovieCard";

const mockMovie = {
  imdbID: "tt1234567",
  Title: "Test Movie",
  Year: "2023",
  Poster: "https://example.com/poster.jpg",
  Type: "movie",
};

describe("MovieCard", () => {
  it("renders movie details correctly", () => {
    act(() => {
      render(<MovieCard movie={mockMovie} />);
    });

    const titleElement = screen.getByText("Test Movie");
    const yearElement = screen.getByText("2023");
    const typeElement = screen.getByText("movie");
    const imdbElement = screen.getByText(/IMDB:\s*tt1234567/);
    const imageElement = screen.getByAltText("Test Movie");

    expect(titleElement).toBeInTheDocument();
    expect(yearElement).toBeInTheDocument();
    expect(typeElement).toBeInTheDocument();
    expect(imdbElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });
});
