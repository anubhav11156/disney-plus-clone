import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'

function Home() {
    return (
        <Container>
          <ImgSlider />
          <Viewers />

          <BgImg>

          </BgImg>
        </Container>
    )
}

export default Home

const Container=styled.main`
  height: calc(100vh - 70px);
  padding-top: 0;
  padding-bottom: 0;
  paddin-left: calc(3.5vw + 5px);
  color: white;
  position:relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-x: hidden;
`
const BgImg=styled.div`
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  z-index: -1;
  background: url("/images/home-background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
`
