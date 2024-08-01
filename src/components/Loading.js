import React from "react";
import BarLoader from "react-spinners/BarLoader";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Loading = () => {
  return (
    <Overlay>
      <BarLoader color="#ffffff" width={200} />
    </Overlay>
  );
};

export default Loading;
