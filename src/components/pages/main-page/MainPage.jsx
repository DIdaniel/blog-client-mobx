import React, { useState } from "react";
import styled from "styled-components/macro";
import Body from "../common/body/Body";
import LastestPost from "../common/body/LastestPost";
import PageNav from "../common/body/PageNav";
import PostList from "../common/body/PostList";
import Profiles from "../common/body/Profiles";
import Header from "../common/header/Header";

const MainPage = () => {
  const [posts, setPosts] = useState([
    {
      img: "./assets/purple.jpg",
      category: "category",
      title: "포스트 제목",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, maxime! Sapiente labore vel corrupti nemo quas dolore sint, quisquam explicabo nisi adipisci molestias voluptatem ullam natus consequatur provident maiores molestiae in rerum eum. Veritatis exercitationem ipsa id itaque debitis eaque.",
      author: {
        avatar: "./assets/4.png",
        name: "Hoon Oh",
      },
      createdAt: new Date("2021-04-30").toDateString(),
    },
    {
      img: "./assets/purple.jpg",
      category: "category",
      title: "포스트 제목",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, maxime! Sapiente labore vel corrupti nemo quas dolore sint, quisquam explicabo nisi adipisci molestias voluptatem ullam natus consequatur provident maiores molestiae in rerum eum. Veritatis exercitationem ipsa id itaque debitis eaque.",
      author: {
        avatar: "./assets/4.png",
        name: "Hoon Oh",
      },
      createdAt: new Date("2021-04-30").toDateString(),
    },
    {
      img: "./assets/purple.jpg",
      category: "category",
      title: "포스트 제목",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, maxime! Sapiente labore vel corrupti nemo quas dolore sint, quisquam explicabo nisi adipisci molestias voluptatem ullam natus consequatur provident maiores molestiae in rerum eum. Veritatis exercitationem ipsa id itaque debitis eaque.",
      author: {
        avatar: "./assets/4.png",
        name: "Hoon Oh",
      },
      createdAt: new Date("2021-04-30").toDateString(),
    },
  ]);

  return (
    <>
      <Header />
      <Body>
        <MainPageContainer>
          <PostsContainer>
            <LastestPost />
            <PostList />
            <PostList />
          </PostsContainer>
          <ProfileContainer>
            <Profiles />
          </ProfileContainer>
        </MainPageContainer>
      </Body>
      <PageNav />
    </>
  );
};

export default MainPage;

const MainPageContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;

const PostsContainer = styled.div`
  margin-right: 2rem;
`;

const ProfileContainer = styled.div`
  margin-left: 2rem;
`;
