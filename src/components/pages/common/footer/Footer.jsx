import React from "react";
import styled from "styled-components/macro";
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
  margin-top: 10rem;
`;

const StyledFooter = styled.div`
  width: 100%;
  height: 15rem;
  background-color: #111;
  display: flex;
  justify-content: space-between;
  padding: 2rem 16rem;
  font-size: 1.3rem;
`;

const CopyRight = styled.p``;
