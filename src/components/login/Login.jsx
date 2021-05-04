import React from "react";
import {
  Wrapper,
  LOGINPART,
  IDPW,
  TITLE,
  EMAIL,
  INPUT,
  PW,
  Button,
} from "./LoginStyle";

const Login = () => {
  return (
    <Wrapper>
      <LOGINPART>
        <IDPW>
          <TITLE>로 그 인</TITLE>
          <EMAIL>
            {/* <Label htmlFor="userName">Admin ID</Label> */}
            <INPUT type="email" placeholder="EMAIL" name="EMAIL" required />
          </EMAIL>
          <PW>
            {/* <Label htmlFor="userPsw">Admin Password</Label> */}
            <INPUT
              type="password"
              placeholder="PASSWORD"
              name="password"
              required
            />
          </PW>
        </IDPW>

        <Button type="submit">로그인</Button>
      </LOGINPART>
    </Wrapper>
  );
};

export default Login;
