import React, { useMemo, useState } from "react";

import SearchForm from "./components/SearchForm";
import MovieList from "./components/MovieList";
import Navigation from "./components/Navigation";
import LocaleContext from "./contexts/LocaleContext";

import "./styles/global.css";

function App() {
  const [locale, setLocale] = useState(localStorage.getItem("locale") || "id");
  const [movies, setMovies] = useState([]);

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === "id" ? "en" : "id";
      localStorage.setItem("locale", newLocale);
      return newLocale;
    });
  };

  const selectLanguage = ({ id, en }) => {
    if (id === undefined || en === undefined) {
      return "language options is empty";
    }
    return locale === "id" ? id : en;
  };

  const localeContextValue = useMemo(() => {
    return {
      locale,
      toggleLocale,
      selectLanguage,
    };
  }, [locale]);

  const handleSearch = (searchResults) => {
    setMovies(searchResults);
  };

  return (
    <LocaleContext.Provider value={localeContextValue}>
      <div className="movie-app">
        <header className="movie-app__header">
          <Navigation />
        </header>
        <main>
          <SearchForm onSearch={handleSearch} />
          <MovieList movies={movies} />
        </main>
      </div>
    </LocaleContext.Provider>
  );
}

export default App;
