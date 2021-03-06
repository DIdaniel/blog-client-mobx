import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components/macro";
import { Input } from "../../assets/atoms/Input";
import { Button } from "../../assets/atoms/Button";

const Signup = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const password = useRef();
  password.current = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormWrapper>
      <SignUpForm onSubmit={handleSubmit(onSubmit)}>
        <UserInputContainer>
          <Title>회원가입</Title>
          <Input
            name="email"
            type="email"
            placeholder="E-MAIL"
            {...register("email", {
              required: true,
              minLength: 5,
              pattern: /^\S+@\S+$/i,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <p>이메일을 입력해주세요.</p>
          )}
          <Input
            name="name"
            type="text"
            placeholder="USER NAME"
            {...register("name", {
              required: true,
              maxLength: 20,
            })}
          />
          {errors.name && errors.name.type === "required" && (
            <p>이름을 적어주세요.</p>
          )}
          {errors.name && errors.name.type === "maxLength" && (
            <span>이름은 최대 20자까지에요!</span>
          )}

          <Input
            name="password"
            type="password"
            placeholder="PASSWORD"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
          />
          {errors.password && errors.password.type === "required" && (
            <p>비밀번호를 입력해주세요.</p>
          )}
          {errors.password && errors.password.type === "minLenth" && (
            <p>최소 6자 이상으로 입력해주세요!</p>
          )}
          <Input
            name="password_confirm"
            type="password"
            placeholder="CONFIRM PASSWORD"
            {...register("password_confirm", {
              required: true,
              validate: (value) => value === password.current,
            })}
          />
          {errors.password_confirm &&
            errors.password_confirm.type === "requried" && (
              <p>비밀번호를 한번 더 입력해주세요.</p>
            )}
          {errors.password_confirm &&
            errors.password_confirm.type === "validate" && (
              <p>비밀번호가 일치하지 않아요...😩</p>
            )}
        </UserInputContainer>

        <Button type="submit">가입하기</Button>

        <Message>
          Already registered?
          <Anchor href="/login">Login</Anchor>
        </Message>
      </SignUpForm>
    </FormWrapper>
  );
};

export default Signup;

const FormWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #181818;
`;

const SignUpForm = styled.form`
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

const UserInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  color: #fff;
  letter-spacing: 16px;
  margin-bottom: 5rem;
`;

const Message = styled.p`
  margin-top: 4rem;
  color: lightyellow;
  font-size: 1.2rem;
`;

const Anchor = styled.a`
  margin-left: 1.3rem;
  &:hover {
    color: lightyellow;
    text-decoration: none;
  }
`;
