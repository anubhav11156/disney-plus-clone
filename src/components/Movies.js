import React from 'react'
import styled from 'styled-components'
import RecommendedMovie from './RecommendedMovie'

function Movies() {
    return (
        <Container>
          <h4>Recommended For You</h4>
          <div className="movie-card-div">
            <RecommendedMovie />
            <RecommendedMovie />
            <RecommendedMovie />
            <RecommendedMovie />
          </div>
          <h4>New to Disney +</h4>
          <div className="movie-card-div">
            new
          </div>
          <h4>Originals</h4>
          <div className="movie-card-div">
            originals
          </div>
        </Container>
    )
}

export default Movies

const Container=styled.div`
  margin-top: 35px;
  flex:1;
  width: 95vw;
  display: flex;
  flex-direction: column;

  h4 {
    padding-top: 15px;
    padding-bottom: 30px;
    display: block;
    margin:0;
    font-family: Inter;
    font-size: 20px;
    letter-spacing: 0.15px;
  }

  .movie-card-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 210px;
  }
`
