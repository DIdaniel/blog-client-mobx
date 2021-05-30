import React from "react";
import styled from "styled-components/macro";

const AnchorNotice = ({ children }) => {
  return (
    <Message>
      {children}
      <Anchor href="/signup"> Create an account</Anchor>
    </Message>
  );
};

export default AnchorNotice;

const Message = styled.p`
  margin-bottom: 4rem;
  color: lightyellow;
  font-size: 1.2rem;
`;

const Anchor = styled.a`
  margin-left: 1.3rem;
  &:hover {
    color: lightyellow;
    text-decoration: none;
  }
`;
