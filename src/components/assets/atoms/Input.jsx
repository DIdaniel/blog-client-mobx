//import React from "react";
import styled from "styled-components/macro";

export const Input = styled.input`
  display: flex;
  padding: 3%;
  margin-top: 1rem;
  margin-bottom: 1.2rem;
  width: 80%;
  background-color: #4a4a4a;
  color: yellowgreen;
  font-size: 0.9em;
  outline: none;
  font-family: "Open Sans", sans-serif;

  &::placeholder {
    color: #b3b3b3;
  }

  &:focus {
    outline: none;
    caret-color: yellow;
    color: yellowgreen;
    font-size: 0.9em;
  }
`;
