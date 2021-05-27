import React from "react";
import styled from "styled-components/macro";

const Button = styled.button`
  position: relative;
  border: none;
  padding: 1.5rem 3.5rem;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 30px;
  height: 2.5rem;
  display: flex;
  align-items: center;
  color: #fff;
  transition: all 0.2s ease;

  &:hover {
    background-color: #fff;
    color: #171717;
  }

  &:active {
    top: 1px;
    left: 1px;
  }
`;

const ButtonText = styled.span`
  color: inherit;
`;

const RoundButton = (props) => {
  return (
    <Button onClick={(e) => props.onClick(e)}>
      <ButtonText>{props.children}</ButtonText>
    </Button>
  );
};

RoundButton.defaultProps = {
  onClick: () => {},
  children: "값을 입력해주세요",
  width: "auto",
};

export default RoundButton;
