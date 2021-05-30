import React from "react";
import styled from "styled-components/macro";
import Footer from "../footer/Footer";
import LastestPost from "./LastestPost";
import PageNav from "./PageNav";
import PostList from "./PostList";
import Profiles from "./Profiles";

const Body = () => {
  return (
    <>
      <BodyWrapper>
        <BodyLeft>
          <LastestPost />
          <PostList />
          <PostList />
          <PostList />
        </BodyLeft>
        <BodyRight>
          <Profiles />
        </BodyRight>
      </BodyWrapper>
      <PageNav />
      <Footer />
    </>
  );
};

export default Body;

const BodyWrapper = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 5rem 15rem;
`;

const BodyLeft = styled.div`
  margin-right: 2rem;
`;

const BodyRight = styled.div`
  margin-left: 2rem;
`;
