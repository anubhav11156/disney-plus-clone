import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
          <BackgroundImg>
            <img src="/images/bao-detail.jpg"/>
          </BackgroundImg>

          <BackgroundTitle>
            <img src="/images/disney-white-logo.png"/>
          </BackgroundTitle>

          <Controls>

            <PlayButton>
              <img src="/images/play-button.png"/>
              PLAY
            </PlayButton>

            <TrailerButton>
              <img src="/images/play-button-white.png"/>
              TRAILER
            </TrailerButton>

            <AddButton>
              <img src="/images/plus-button-white.png"/>
            </AddButton>

            <WatchInGroupButton>
              <img src="/images/group-icon.png"/>
            </WatchInGroupButton>

          </Controls>
          <ShortDetail>
            <p>
              this is short detail
            </p>
          </ShortDetail>
          <Description>
            <p>
              This is Description about the movie, it will be fetched from the database.
            </p>
          </Description>
        </Container>
    )
}

export default Detail

const Container=styled.div`
  color: white;
  position: relative;
  height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  padding: 60px 60px;
`

const BackgroundImg=styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  bottom:0;
  right: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const BackgroundTitle=styled.div`
  height: 25vh;
  width: 25vw;
  min-width: 470px;
  min-height: 200px;

  img {
    width: 90%;
    height: 100%;
    object-fit: cover;
  }
`

const Controls=styled.div`
  margin-top: 30px;
  display: flex;
  gap: 25px;

`

const PlayButton=styled.button`
  border: none;
  height: 48px;
  width: 120px;
  border-radius: 3px;
  font-family: Inter;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
  transition: all 0.25s;

  img {
    margin-right: 3px;
    vertical-align: top;
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: rgba(223, 227, 228, 0.9);
  }
`

const TrailerButton=styled(PlayButton)`
  border: 1px solid rgba(255, 255, 255, 0.74);
  background-color: rgba(0, 0, 0, 0.35);
  height: 48px;
  width: 150px;
  color: white;
`

const AddButton=styled.button`
  border: 2px solid white;
  height: 48px;
  width: 48px;
  border-radius: 24px;
  background-color: rgba(0, 0, 0, 0.56);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    opacity: 0.8;
    width: 27px;
    height: 27px;
  }
`

const WatchInGroupButton=styled(AddButton)`
  background-color: rgba(0, 0, 0, 0.78);
`

const ShortDetail=styled.div`
  margin-top: 25px;
  p {
    font-family: Inter;
    font-size: 15px;
  }
`

const Description=styled(ShortDetail)`
  margin-top:20px;
  line-height: 1.4;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.89);
`
