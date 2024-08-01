import React from "react";
import styled from "styled-components";
import LocaleContext from "../contexts/LocaleContext";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 24px;
    margin: 0;
  }

  @media (max-width: 767.98px) {
    h1 {
      font-size: 18px;
    }
  }
  @media (max-width: 575.98px) {
    h1 {
      font-size: 15px;
    }
  }
`;

const LanguageButton = styled.button`
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 767.98px) {
    font-size: 14px;
  }
  @media (max-width: 575.98px) {
    font-size: 12px;
  }
`;

function Navigation() {
  const { toggleLocale, selectLanguage } = React.useContext(LocaleContext);

  return (
    <NavBar>
      <h1>{selectLanguage({ id: "Aplikasi Film", en: "Movie App" })}</h1>
      <LanguageButton onClick={toggleLocale}>
        {selectLanguage({ id: "ID", en: "EN" })}
      </LanguageButton>
    </NavBar>
  );
}

export default Navigation;
