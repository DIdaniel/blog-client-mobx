import React from "react";
import styled, { keyframes } from "styled-components/macro";
import RoundButton from "../../../assets/atoms/RoundButton";

const Footer = () => {
  return (
    <FooterWrapper>
      <StyledFooter>
        <CopyRight>hd.note ⓒ 2021</CopyRight>
        <RoundButton>최신 글 보기</RoundButton>
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
  height: 15rem;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem 16rem;
  font-size: 1.3rem;
`;

const CopyRight = styled.p``;
