import React from "react";
import styled from "styled-components/macro";
import left from "../../../assets/icons/Left-Arrow.svg";
import right from "../../../assets/icons/Right-Arrow.svg";

const PageNav = () => {
  return (
    <PageWrapper>
      <PrevNextBtn src={left} alt="left" />
      <PageNumber>1</PageNumber>
      <LineBreak></LineBreak>
      <PageNumber>2</PageNumber>
      <LineBreak></LineBreak>
      <PageNumber>3</PageNumber>
      <LineBreak></LineBreak>
      <PageNumber>4</PageNumber>
      <LineBreak></LineBreak>
      <PageNumber>5</PageNumber>
      <PrevNextBtn src={right} alt="right" />
    </PageWrapper>
  );
};

export default PageNav;

const PageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30%;
`;

const PrevNextBtn = styled.img`
  cursor: pointer;
`;

const PageNumber = styled.div`
  font-size: 1.5rem;
  padding: 2rem;
  cursor: pointer;
`;

const LineBreak = styled.p`
  width: 1px;
  height: 20px;
  background-color: #fff;
`;
