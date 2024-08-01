import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TextButtonContainer = styled.button`
  background-color: transparent;
  color: ${({ color }) => color || "#007bff"};
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 16px;
  text-decoration: underline;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    color: #6c757d;
    cursor: not-allowed;
    text-decoration: none;
  }

  @media (max-width: 767.98px) {
    font-size: 14px;
  }
  @media (max-width: 575.98px) {
    font-size: 12px;
  }
`;

const TextButton = ({ children, color, ...rest }) => {
  return (
    <TextButtonContainer color={color} {...rest}>
      {children}
    </TextButtonContainer>
  );
};

TextButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  rest: PropTypes.object,
};

export default TextButton;
