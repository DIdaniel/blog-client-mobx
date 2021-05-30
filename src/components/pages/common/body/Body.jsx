import React from "react";
import styled from "styled-components/macro";
const Body = (props) => {
  return (
    <>
      <BodyWrapper>{props.children}</BodyWrapper>
    </>
  );
};

export default Body;

const BodyWrapper = styled.main`
  max-width: 1148px;
  margin: 4rem auto;
`;
