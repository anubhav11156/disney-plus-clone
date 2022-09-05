import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function SliderCard(props) {

  const overview=props.overview;
  const year=props.year;
  const mediaType=props.mediaType;
  const image=props.poster;
  const id=props.id;
  const name=props.name;
  const trailerKey=props.trailerKey;


  const stateToPass = {
    overview:overview,
    year:year,
    mediaType:mediaType,
    poster:image,
    name:name,
    id:id,
    trailerKey:trailerKey
  }

    return (
      <Link to={`/home/detail/${id}`} state={stateToPass}>
        <Container>
          <img src={props.bgImg}/>
        </Container>
      </Link>
    )
}

export default SliderCard

const Container=styled.div`
  cursor: pointer;
  height: 368px;
  width: 95vw;
  img {
    border: 4px solid transparent;
    width: 100%;
    height: 100%;
    border-radius: 7px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: border 0.27s;
  }

  img:hover {
    border: 4px solid rgba(255, 255, 255, 0.7);
  }
`
