import React from "react";
import styled, { keyframes } from "styled-components/macro";
import RoundButton from "../../../assets/atoms/RoundButton";

const Footer = () => {
  return (
    <FooterWrapper>
      <StyledFooter>
        <CopyRight>hd.note ⓒ 2021</CopyRight>
        <RoundButton>최신 글 보기</RoundButton>
        {/* <LastestWrite>최신 글 보기</LastestWrite> */}
      </StyledFooter>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  position: relative;
  height: 100vh;
`;

const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10rem;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 7rem;
  font-size: 1.3rem;
`;

const CopyRight = styled.p``;

const clickEffect = keyframes`
  to {
    transform: translateY(5px)
  }
`;

const LastestWrite = styled.p`
  border: 1px solid #fff;
  border-radius: 50px;
  padding: 1rem 1.2rem;
  cursor: pointer;
  user-select: none;
  &:active {
    animation: ${clickEffect} 0.3s linear;
  }
`;
