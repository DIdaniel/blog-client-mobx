import React from "react";
import Navbar from "../navigationbar/Navbar";
import {
  HeaderContainer,
  InnerContainer,
  Title,
  UnderLine,
  SubTitle,
} from "./HeaderStyle";

const Header = () => {
  return (
    <>
      <Navbar />
      <HeaderContainer>
        <InnerContainer>
          <Title>Hoon & Daniel</Title>
          <UnderLine></UnderLine>
          <SubTitle>Node, TypeScript Enthusiasts</SubTitle>
        </InnerContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
