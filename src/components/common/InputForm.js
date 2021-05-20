import styled from "styled-components/macro";

export const Input = styled.input`
  display: flex;
  padding: 3%;
  margin-bottom: 1.2rem;
  width: 80%;
  background-color: #4a4a4a;
  color: yellowgreen;
  font-size: 0.9em;
  outline: none;
  &::placeholder {
    color: #fff;
  }
  &:focus {
    outline: none;
    caret-color: yellow;
    color: yellowgreen;
    font-size: 0.9em;
    &::placeholder {
      color: transparent;
    }
  }
`;
