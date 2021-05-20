import styled from "styled-components/macro";
import bgImg from "./image/hero-image.jpg";

export const HeaderContainer = styled.div`
  background: url(${bgImg}) no-repeat center fixed;
  background-size: cover;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  opacity: 0.6;
  height: 30vh;
  width: 100%;
`;

export const Title = styled.p`
  font-size: 4rem;
  color: #fff;
`;

export const UnderLine = styled.p`
  width: 150px;
  height: 2px;
  background-color: #fff;
`;

export const SubTitle = styled.p`
  margin-top: 3rem;
  font-size: 1.2rem;
  color: #fff;
`;
