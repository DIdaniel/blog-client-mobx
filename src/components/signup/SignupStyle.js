import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #181818;
`;

export const LoginPart = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  margin-bottom: 5rem;
`;

export const Title = styled.p`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 5rem;
`;

export const EMAIL = styled.div`
  display: flex;
  padding: 3%;
  margin-bottom: 1rem;
  width: 100%;
  background-color: #4a4a4a;
`;

export const USERNAME = styled.div`
  display: flex;
  padding: 3%;
  margin-bottom: 1rem;
  width: 100%;
  background-color: #4a4a4a;
`;

export const PW = styled.div`
  display: flex;
  padding: 3%;
  margin-bottom: 1rem;
  width: 100%;
  background-color: #4a4a4a;
`;

export const CONFIRM = styled.div`
  display: flex;
  padding: 3%;
  margin-bottom: 1rem;
  width: 100%;
  background-color: #4a4a4a;
`;

export const Input = styled.input`
  width: 25rem;
  padding: 15px;
  background-color: #4a4a4a;
  border: none;

  ::placeholder {
    color: white;
  }
`;

export const Btn = styled.button`
  background-color: #181818;
  margin-top: 5%;
  border-radius: 38px;
  color: #fff;
  font-size: 18px;
  padding: 10px 20px 10px 20px;
  transition: all 0.3s;
  border: 1px solid #fff;

  &:hover {
    background-color: #4a4a4a;
    cursor: pointer;
  }
`;
