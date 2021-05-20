import React from 'react'
import styled from 'styled-components/macro'
import Navbar from '../navbar/Navbar'
import HeroImage from '../../../assets/images/hero-image.jpg'


const Header = (props) => {
  return (
    <>
      <StyledHeader>
        <Navbar />
        <TextWrapper>
          <HeaderTitle>Hoon & Daniel</HeaderTitle>
          <HorizontalBar />
          <HeaderSubtitle>Node, TypeScript Enthusiasts</HeaderSubtitle>
        </TextWrapper>
      </StyledHeader>
    </>
  )
}

const StyledHeader = styled.header`
  height: 35rem;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${HeroImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items:center;
`

const TextWrapper = styled.div`
  text-align: center;
`

const HeaderTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 4rem;
`

const HeaderSubtitle = styled.p`
  font-family: 'Montserrat';
  font-weight: 200;
  font-size: 1.3rem;
  
`

const HorizontalBar = styled.span`
  display: inline-block;
  background-color: #929292;
  margin: 1rem 0 2.5rem;
  height: 2px;
  width: 10rem;
`
export default Header
