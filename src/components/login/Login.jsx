import React from "react";
import {
  Wrapper,
  LoginPart,
  ID,
  PW,
  Label,
  Input,
  IdnPw,
  Btn,
} from "./LoginStyle";

const Login = () => {
  return (
    <Wrapper>
      <LoginPart>
        <IdnPw>
          <ID>
            <Label htmlFor="userName">Admin ID</Label>
            <Input
              type="text"
              placeholder="Enter Admin ID"
              name="userName"
              required
            />
          </ID>

          <PW>
            <Label htmlFor="userPsw">Admin Password</Label>
            <Input
              type="password"
              placeholder="Enter Admin Password"
              name="userPsw"
              required
            />
          </PW>
        </IdnPw>

        <Btn type="submit">Login</Btn>
      </LoginPart>
    </Wrapper>
  );
};

export default Login;
