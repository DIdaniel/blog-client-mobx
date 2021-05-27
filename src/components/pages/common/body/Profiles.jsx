import React from "react";
import styled from "styled-components/macro";

const Profiles = () => {
  return (
    <AsideWrapper>
      <IntroduceContainer>
        <Image src="./assets/2.png" alt="duck" />
        <Name>김동일 (Daniel)</Name>
        <Paragraph>
          <p>두 줄로 작성하는 자기소개서입니다</p>
          <p>그게 바로 자기소개서 입니다.</p>
        </Paragraph>
      </IntroduceContainer>
      <IntroduceContainer>
        <Image src="./assets/3.png" alt="elephant" />
        <Name>오승훈 (Hoon)</Name>
        <Paragraph>
          <p>두 줄로 작성하는 자기소개서입니다</p>
          <p>그게 바로 자기소개서 입니다.</p>
        </Paragraph>
      </IntroduceContainer>
    </AsideWrapper>
  );
};

export default Profiles;

const AsideWrapper = styled.aside`
  width: 100%;
  height: 27rem;
`;

const IntroduceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 4rem;
  height: 100%;
`;

const Image = styled.img`
  border-radius: 5px;
  margin-bottom: 10px;
  /* width: 100%; */
`;

const Name = styled.p`
  margin-bottom: 10px;
`;

const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
