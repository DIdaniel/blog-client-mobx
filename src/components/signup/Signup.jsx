import React from "react";
import { Wrapper, LoginPart, IdnPw, Title } from "./SignupStyle.js";
import { Input } from "../common/InputForm";
import { Button } from "../common/buttonForm";

const Signup = () => {
  return (
    <Wrapper>
      <LoginPart>
        <IdnPw>
          <Title>회 원 가 입</Title>
          <Input
            type="email"
            placeholder="E-MAIL"
            onFocus="EMAIL = ''"
            name="EMAIL"
            required
          />

          <Input
            type="text"
            placeholder="USER NAME"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='NAME"
            required
          />

          <Input
            type="password"
            placeholder="PASSWORD"
            name="password"
            required
          />

          <Input
            type="password"
            placeholder="CONFIRM PASSWORD"
            name="confirm password"
            required
          />
        </IdnPw>

        <Button type="submit">가입하기</Button>
      </LoginPart>
    </Wrapper>
  );
};

export default Signup;
