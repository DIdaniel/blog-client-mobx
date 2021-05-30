import React from "react";
import styled from "styled-components/macro";

const LastestPost = (props) => {
  return (
    <LastestWrapper>
      <Image src="./assets/living.jpg" alt="main" />

      <LastestInfo>
        <WritingInfo>
          <Category>category</Category>
          <PostTitle>포스트 제목</PostTitle>
          <PostContent>
            포스트 글 포스트 글 포스트 글 포스트 글 포스트 글 포스트 글
          </PostContent>
        </WritingInfo>
        <ProfileSection>
          <ImgProfile src="./assets/4.png" alt="deer" />
          <ProfileInfo>
            <p>HOON OH</p>
            <p>30 APR 2021 - 10 MIN READ</p>
          </ProfileInfo>
        </ProfileSection>
      </LastestInfo>
    </LastestWrapper>
  );
};

export default LastestPost;

const LastestWrapper = styled.section`
  display: flex;
  //flex: 1 1 50%;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  width: 55%;
`;

const LastestInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 3rem;
`;

const WritingInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Category = styled.p`
  font-weight: bold;
  color: dodgerblue;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const PostTitle = styled.p`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const PostContent = styled.p`
  font-size: 1rem;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  //border: 1px solid #fff;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const ImgProfile = styled.img`
  width: 10%;
  border-radius: 50%;
  margin-right: 1rem;
`;
