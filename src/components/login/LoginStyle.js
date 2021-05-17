import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #181818;
`;

export const LOGINPART = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
`;

export const IDPW = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 5rem;
`;

export const TITLE = styled.p`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 5rem;
`;
