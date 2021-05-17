import React from "react";
import { Wrapper, LOGINPART, IDPW, TITLE } from "./LoginStyle";
import { Input } from "../common/InputForm";
import { Button } from "../common/buttonForm";

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
