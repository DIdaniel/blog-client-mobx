import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0 3rem;
  margin-bottom: 3rem;
  background-color: #E8DFCE;
`;

export const GuidLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 80rem;
  /* border: 2px dashed green; */
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 40vh;
  width: 55%;
`;

export const HeadLine = styled.h1`
  font-size: 3rem;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
`;

export const Button = styled.button`
  font-size: 1.2rem;
  background: none;
  padding: 10px 20px 10px 20px;
  border: 2px solid dodgerblue;
  border-radius: 28px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color:dodgerblue;
    color: #fff;
    }
`;


export const Image = styled.img`
  width: 36%;
`;