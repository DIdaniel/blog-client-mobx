import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components/macro";
import { Link, useHistory } from "react-router-dom";
import LogoImage from "../../../assets/images/Logo.svg";
import RoundButton from "../../../assets/atoms/RoundButton";

const Navbar = () => {
  const history = useHistory();
  const navToSubscribe = () => history.push("/subscribe");

  const [posY, setPosY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function onScroll() {
    setPosY(window.scrollY);
  }

  console.log("posY :", posY);

  return (
    <StyledNavbar posY={posY}>
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
  padding: 2rem 16rem;
  transition: all 0.3s;
  ${({ posY }) => (posY > 70 ? "opacity: 0" : "opacity: 1")}
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
