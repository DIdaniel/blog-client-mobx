import React from 'react'
import { 
  Container,
  GuidLine,
  HeaderSection,
  HeadLine,
  Paragraph,
  Button,
  Image
} from './HeaderStyle';

const Header = () => {
  return (
    <Container>
      <GuidLine>
        <HeaderSection>
          <HeadLine>Write down your FANTASTIC developing ideas</HeadLine>
          <Paragraph>Read and share new perspectives on just about any topic. <br/>Everyone’s welcome.</Paragraph>
          <Button>Get Started</Button>
        </HeaderSection>
        <Image src="./assets/header.jpg" alt="header"/>
      </GuidLine>
    </Container>
  )
}

export default Header
