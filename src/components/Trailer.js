import React from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube'

function Trailer(props) {
  const videoOptions = {
      playerVars: {
        autoplay: 1,
        controls: 1,
        rel: 0,
        showinfo: 0,
        mute: 0,
        loop: 1
      }
    };
    return (
        <Container>
          <YouTube videoId={props.movieId} opts={videoOptions}/>
        </Container>
    )
}

export default Trailer

const Container=styled.div`
  margin-left: -4px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  z-index: 20;
  width: 658px;
  height: 378px;
  border-radius: 5px;
  border: 9px solid rgba(249,249,249,0.1);
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 150px -10px,
  rgb(0 0 0 / 73%) 0px 16px 50px -10px;
`
