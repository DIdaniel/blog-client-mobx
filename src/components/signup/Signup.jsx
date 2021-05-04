import React from "react";
import {
  Wrapper,
  LoginPart,
  EMAIL,
  Title,
  USERNAME,
  PW,
  CONFIRM,
  Label,
  Input,
  IdnPw,
  Btn,
} from "./SignupStyle.js";

const Signup = () => {
  return (
    <Wrapper>
      <LoginPart>
        <IdnPw>
          <Title>회 원 가 입</Title>
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

        <Btn type="submit">가입하기</Btn>
      </LoginPart>
    </Wrapper>
  );
};

export default Signup;
