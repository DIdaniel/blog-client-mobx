import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: darkblue;
`;

export const LoginPart = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 3px solid #fff;
  padding: 5%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
`;

export const IdnPw = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const ID = styled.div`
  display: flex;
  padding: 3%;
  color: #fff;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 2rem;
  width: 100%;
`;

export const Input = styled.input`
  width: 25rem;
  padding: 15px;
`;

export const PW = styled.div`
  display: flex;
  padding: 3%;
  color: #fff;
  width: 100%;
`;

export const Btn = styled.button`
  background-color: #77acf1;
  margin-top: 5%;
  border-radius: 38px;
  color: #fff;
  font-size: 32px;
  padding: 10px 20px 10px 20px;
  transition: all 0.3s;
  border: none;

  &:hover {
    background-color: #3edbf0;
    cursor: pointer;
  }
`;
