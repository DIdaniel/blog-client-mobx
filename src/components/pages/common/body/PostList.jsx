import React from "react";
import styled from "styled-components/macro";

const PostList = () => {
  return (
    <>
      <hr />
      <LastestWrapper>
        <Image src="./assets/purple.jpg" alt="main" />

        <LastestInfo>
          <WritingInfo>
            <Category>category</Category>
            <PostTitle>포스트 제목</PostTitle>
            <PostContent>
              포스트 글 포스트 글 포스트 글 포스트 글 포스트 글 포스트 글
            </PostContent>
          </WritingInfo>
          <ProfileSection>
            <div>
              <ImgProfile src="./assets/4.png" alt="deer" />
              <p>HOON OH</p>
            </div>
            <ProfileInfo>30 APR 2021 - 10 MIN READ</ProfileInfo>
          </ProfileSection>
        </LastestInfo>
      </LastestWrapper>
    </>
  );
};

export default PostList;

const LastestWrapper = styled.section`
  display: flex;
  margin: 2rem 0;
`;

const Image = styled.img`
  width: 30%;
`;

const LastestInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 3rem;
  width: 100%;
`;

const WritingInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Category = styled.p`
  font-weight: 800;
  color: #3eb0ef;
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
  justify-content: space-between;
  width: 100%;
  //border: 1px solid #fff;
`;

const ProfileInfo = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

const ImgProfile = styled.img`
  width: 20%;
  border-radius: 50%;
  margin-bottom: 1rem;
  text-align: center;
`;
