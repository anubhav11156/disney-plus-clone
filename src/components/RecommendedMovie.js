import React from 'react'
import styled from 'styled-components'

function RecommendedMovie() {
    return (
        <Container>
          <img src="/images/simpson.png" />
        </Container>
    )
}

export default RecommendedMovie

const Container=styled.div`
  height: 210px;
  width: 320px;
  border-radius: 10px;
  overflow:hidden;
  border: 4px solid rgba(249,249,249,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
      border-color:  rgba(255, 255, 255, 0.75);
      transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
