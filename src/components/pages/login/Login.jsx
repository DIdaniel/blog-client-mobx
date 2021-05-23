import { useForm } from "react-hook-form";

//import { Wrapper, LOGINPART, IDPW, TITLE } from "./LoginStyle";
import styled from "styled-components/macro";
import { Input } from "../../assets/atoms/Input";
import { Button } from "../../assets/atoms/Button";
import Navbar from "../common/navbar/Navbar";

const Login = () => {
  const {
    register,
    //watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Navbar />
      <LogInForm onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <TITLE>로 그 인</TITLE>
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
          {errors.email && <p>이메일을 입력해주세요.</p>}

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
            <p>비밀번호를 입력해주세요</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p>비밀번호는 6자 이상 입력해주세요!</p>
          )}
        </InputWrapper>

        <Button type="submit">로 그 인</Button>
      </LogInForm>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #181818;
`;

const LogInForm = styled.form`
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

const InputWrapper = styled.div`
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

export default Login;
