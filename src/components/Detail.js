import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import DetailWrapper from './DetailWrapper'
import Trailer from './Trailer'

function Detail() {

  const {state} = useLocation();
  const year = state.year;
  const image = state.poster;
  const overview = state.overview;
  const mediaType = state.mediaType;
  const name=state.name;
  const id=state.id;
  const temp=state?.trailerKey;

  let movieKey;

  // const [trailerKey, setTrailerKey] = useState("");
  const [trailer, setTrailer] = useState([])
  const [playTrailer, setPlayTrailer] = useState(true);
  const [trailerButtonText, setTrailerButtonText] = useState("TRAILER")

  useEffect(()=>{
    async function fetchTrailer() {
        const response = await fetch(`https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=e8df460529a8f20593a1db1ae105c5ca&language=en-US`)
        const dataRecieved = await response.json();
        setTrailer(dataRecieved.results);
    }
    fetchTrailer();
  },[])

  // get the officialTrailer as the above api return a lot video
  const officialTrailer = trailer?.find( (video) => video.name === "Official Trailer")
  movieKey = officialTrailer?.key;
  // setTrailerKey(officialTrailer?.key);

  if(
    (id=='1')||
    (id=='2')||
    (id=='3')||
    (id=='4')
  ) {
    movieKey=temp;
  }

  const trailerOnClickHandler = () => {
    // here the state of the playTrailer is changed according to its previous state
    setPlayTrailer( prev => !prev )
    if(playTrailer){
      setTrailerButtonText("OVERVIEW")
    }else{
      setTrailerButtonText("TRAILER")
    }
  }

  const playOnClickHandler = () => {
    alert('Illegal action, this is Clone Project. Click on trailer button to watch the trailer.')
  }

  const renderStuff = () => {
    if(playTrailer){
      return (
        <DetailWrapper
          year={year}
          mediaType={mediaType}
          overview={overview}
        />
      )

    }else{
      return (
        <Trailer
          movieId={movieKey}
        />
      )
    }
  }
    return (
        <Container>
          <BackgroundImg>
            <img src="/images/frozen.jpg" alt="frozen-image"/>
          </BackgroundImg>

          <BackgroundTitle>
            <p className="movie-name">{name}</p>
          </BackgroundTitle>

          <Controls>

            <PlayButton onClick={playOnClickHandler}>
              <img src="/images/play-button.png" alt="play-button"/>
              PLAY
            </PlayButton>

            <TrailerButton onClick={trailerOnClickHandler}>
              <img src="/images/play-button-white.png" alt="trailer-button"/>
              {trailerButtonText}
            </TrailerButton>

            <AddButton>
              <img src="/images/plus-button-white.png" alt="plus-button-image"/>
            </AddButton>

            <WatchInGroupButton>
              <img src="/images/group-icon.png" alt="group-button-image"/>
            </WatchInGroupButton>

          </Controls>

          <Wrapper>
            {renderStuff()}
          </Wrapper>

          <PosterImage>
            <img src={image}/>
          </PosterImage>

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
  opacity: 0.25;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const BackgroundTitle=styled.div`
  height: 25vh;
  width: 55vw;
  min-width: 470px;
  min-height: 200px;
  display: flex;
  align-items: center;
  background-color: ;

  p {
    font-family: waltographUI;
    font-size: 50px;
    letter-spacing: 1px;
    line-height: 65px;
  }
`

const Controls=styled.div`
  width: 710px;
  margin-top: 0px;
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

const PosterImage=styled.div`
  position: absolute;
  z-index: 5;
  width: 490px;
  height: 740px;
  top: 85px;
  right: 250px;
  overflow: hidden;
  border-radius: 10px;
  border: 7px solid rgba(249,249,249,0.1);
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 150px -10px,
  rgb(0 0 0 / 73%) 0px 16px 50px -10px;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  opacity: 0.92;
  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    border-color:  rgba(255, 255, 255, 0.75);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 150px -10px,
    rgb(0 0 0 / 73%) 0px 16px 90px -10px;
    transform: scale(1.05);
  }
`

// const DisneyLogo=styled.div`
//   position: absolute;
//   bottom: 20px;
//   display: flex;
//   width: 190px;
//   justify-content: center;
//   left: 38px;
//
//   img {
//     width: 160px;
//     height: 90px;
//     object-fit: cover;
//     opacity: 0.8;
//   }
// `

const Wrapper=styled.div`
  margin-top: 2px;
  width: 750px;
  display: inline-block;
  height: 480px;
`
