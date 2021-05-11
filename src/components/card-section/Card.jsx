import React from 'react'
import { Container, NewsInfo, NewsImage } from './CardStyle';

const Card = ({newsUrl}) => {
  const {author, title, description, publishedAt, urlToImage } = newsUrl
  console.log(newsUrl);
  return (
    <Container>
      <NewsInfo>
        <p>{author}</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <small>{publishedAt}</small>
      </NewsInfo>
      <NewsImage src={urlToImage} alt={author}/>
    </Container>
  )
}

export default Card
