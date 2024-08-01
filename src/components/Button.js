import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const ButtonContainer = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 10px;
  margin-top: 0;
  color: white;
  border: none;
  cursor: pointer;

  ${({ type }) => {
    switch (type) {
      case "submit":
        return css`
          background-color: #28a745;
        `;
      case "reset":
        return css`
          background-color: #dc3545;
        `;
      default:
        return css`
          background-color: #007bff;
        `;
    }
  }}

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }

  @media (max-width: 767.98px) {
    padding: 8px 15px;
    font-size: 15px;
    border-radius: 8px;
  }
  @media (max-width: 575.98px) {
    padding: 6px 12px;
    font-size: 12px;
    border-radius: 5px;
  }
`;

const Button = ({ children, type = "button", ...rest }) => {
  return (
    <ButtonContainer type={type} {...rest}>
      {children}
    </ButtonContainer>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  rest: PropTypes.object,
};

export default Button;
