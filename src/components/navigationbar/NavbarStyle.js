import styled from "styled-components/macro";
import Logo from "../../Logo.svg";

export const NavContainer = styled.div`
  float: left;
  background: inherit;
  width: 100%;
  // background: grey;
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
  width: 100%;
  background-color: black;
  opacity: 0.6;
`;

export const LogoContainer = styled.img.attrs((props) => ({
  src: Logo,
}))`
  width: 60px;
`;

export const SubscribeBtn = styled.button`
  font-size: 1.2rem;
  border: 1px solid #fff;
  border-radius: 50px;
  width: 130px;
  height: 40px;
  color: #fff;
  background: inherit;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #fff;
    color: inherit;
  }
`;
