import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const InputContainer = styled.input`
  width: 100%;
  max-width: 350px;
  border: 1px solid #ccc;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 10px;
  margin-right: 10px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  @media (min-width: 767.99px) {
  }

  @media (max-width: 767.98px) {
    max-width: 250px;
    padding: 8px 12px;
    font-size: 15px;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  @media (max-width: 575.98px) {
    max-width: 200px;
    padding: 6px 10px;
    font-size: 12px;
    border-radius: 6px;
  }
`;

const Input = ({ type = "text", placeholder = "", ...rest }) => {
  return <InputContainer type={type} placeholder={placeholder} {...rest} />;
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
