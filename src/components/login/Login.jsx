import React from "react";
import {
  Wrapper,
  LoginPart,
  EMAIL,
  USERNAME,
  PW,
  CONFIRM,
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
          <EMAIL>
            {/* <Label htmlFor="userName">Admin ID</Label> */}
            <Input type="email" placeholder="EMAIL" name="EMAIL" required />
          </EMAIL>

          <USERNAME>
            {/* <Label htmlFor="userName">Admin ID</Label> */}
            <Input
              type="text"
              placeholder="USER NAME"
              name="userName"
              required
            />
          </USERNAME>

          <PW>
            {/* <Label htmlFor="userPsw">Admin Password</Label> */}
            <Input
              type="password"
              placeholder="PASSWORD"
              name="password"
              required
            />
          </PW>

          <CONFIRM>
            {/* <Label htmlFor="userPsw">Admin Password</Label> */}
            <Input
              type="password"
              placeholder="CONFIRM PASSWORD"
              name="confirm password"
              required
            />
          </CONFIRM>
        </IdnPw>

        <Btn type="submit">Login</Btn>
      </LoginPart>
    </Wrapper>
  );
};

export default Login;
