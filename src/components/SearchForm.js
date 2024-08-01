import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import omdbApi from "../services/omdbApi";
import Swal from "sweetalert2";
import Button from "./Button";
import Input from "./Input";
import Loading from "./Loading";
import TextButton from "./TextButton";
import LocaleContext from "../contexts/LocaleContext";

const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  button + button {
    margin-left: 10px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }

  @media (max-width: 575.98px) {
    button + button {
      margin-top: 10px;
      margin-left: 0px;
    }
  }
`;

const SearchForm = ({ onSearch }) => {
  const { selectLanguage } = React.useContext(LocaleContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await omdbApi.searchMovies(searchTerm);
      if (response.Search && response.Search.length > 0) {
        onSearch(response.Search);
        Swal.fire(
          selectLanguage({
            id: "Berhasil",
            en: "Succeed",
          }),
          selectLanguage({
            id: "Data Film Ditemukan",
            en: "Movie Data Found",
          }),
          "success"
        );
      } else {
        onSearch([]);
        Swal.fire(
          selectLanguage({
            id: "Data Film Tidak Ditemukan",
            en: "Movie Data Not Found",
          }),
          selectLanguage({
            id: "Tidak ada data yang cocok dengan pencarian Anda",
            en: "No data matches your search.",
          }),
          "warning"
        );
      }
    } catch (error) {
      Swal.fire("Error", "Terjadi kesalahan saat mengambil data", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSearchTerm("");
  };

  return (
    <SearchFormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder={selectLanguage({ id: "Cari Film", en: "Search Movies" })}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        required
        minLength={3}
      />
      <Button type="submit">
        {selectLanguage({ id: "Cari", en: "Search" })}
      </Button>
      {searchTerm.length >= 3 && (
        <TextButton type="reset" onClick={handleReset}>
          {selectLanguage({ id: "Hapus", en: "Clear" })}
        </TextButton>
      )}
      {isLoading && <Loading />}
    </SearchFormContainer>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
