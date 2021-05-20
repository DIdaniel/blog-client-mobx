import React from "react";
// import { Wrapper, LoginPart, IdnPw, Title } from "./SignupStyle.js";
import styled from "styled-components/macro";
import { Input } from "../../assets/atoms/Input";
import { Button } from "../../assets/atoms/Button";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #181818;
`;

const SignUpForm = styled.div`
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

const UserInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 5rem;
`;

const Title = styled.p`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 5rem;
`;

const Signup = () => {
  return (
    <Wrapper>
      <SignUpForm>
        <UserInputContainer>
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
        </UserInputContainer>

        <Button type="submit">가입하기</Button>
      </SignUpForm>
    </Wrapper>
  );
};

export default Signup;
