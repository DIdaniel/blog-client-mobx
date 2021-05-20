import React from "react";
import styled from "styled-components/macro";
import { Link, useHistory } from "react-router-dom";
import LogoImage from "../../../assets/images/Logo.svg";
import RoundButton from "../../../assets/atoms/RoundButton";

const Navbar = () => {
  const history = useHistory();
  const navToSubscribe = () => history.push("/subscribe");

  return (
    <StyledNavbar>
      <NavContainer>
        <LogoContainer>
          <Link to="/">
            <Logo />
          </Link>
        </LogoContainer>
        <NavLists>
          <NavItem>
            <RoundButton onClick={navToSubscribe}>구독하기</RoundButton>
          </NavItem>
        </NavLists>
      </NavContainer>
    </StyledNavbar>
  );
};

export default Navbar;

const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5.5rem;
  background-color: transparent;
`;

const NavContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div``;

const Logo = styled.img`
  width: 80%;
`;

const NavLists = styled.ul`
  display: flex;
`;

const NavItem = styled.li`
  padding: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:last-child {
    padding-right: 0;
  }
`;

Logo.defaultProps = {
  src: LogoImage,
};
