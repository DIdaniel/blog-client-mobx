import React from "react";
import {
  NavContainer,
  InnerContainer,
  // LogoContainer,
  SubscribeBtn,
} from "./NavbarStyle";

const Navbar = () => {
  return (
    <NavContainer>
      <InnerContainer>
        {/* <LogoContainer /> */}
        <SubscribeBtn>구독하기</SubscribeBtn>
      </InnerContainer>
    </NavContainer>
  );
};

export default Navbar;
