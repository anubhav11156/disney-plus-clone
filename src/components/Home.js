import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'

function Home() {
    return (
        <Container>
          <ImgSlider />
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
  position: relative;
  color: white;
  position: relative;
  display: flex;
  justify-content: center;
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
