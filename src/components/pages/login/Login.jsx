import React from "react";
//import { Wrapper, LOGINPART, IDPW, TITLE } from "./LoginStyle";
import styled from "styled-components/macro";
import { Input } from "../../assets/atoms/Input";
import { Button } from "../../assets/atoms/Button";

const Wrapper = styled.form`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #181818;
`;

const LOGINPART = styled.div`
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

const IDPW = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 5rem;
`;

const TITLE = styled.p`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 5rem;
`;

const Login = () => {
  return (
    <Wrapper>
      <LOGINPART>
        <IDPW>
          <TITLE>로 그 인</TITLE>
          <Input type="email" placeholder="E-MAIL" required />
          <Input type="password" placeholder="PASSWORD" required />
        </IDPW>

        <Button type="submit">로 그 인</Button>
      </LOGINPART>
    </Wrapper>
  );
};

export default Login;
