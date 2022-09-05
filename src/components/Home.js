import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import Footer from './Footer'

function Home() {
  return (
      <Container>
        <ImgSlider />
        <Viewers />
        <Movies />
        <BgImg>
        </BgImg>
        <Footer />
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
  bottom:-1400px;
  left:0;
  right:0;
  z-index: -4;
  background: url("/images/home-background.png");
  background-repeat: repeat-y;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
`
