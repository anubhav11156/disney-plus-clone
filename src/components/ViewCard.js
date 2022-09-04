import React, { useState } from 'react'
import styled from 'styled-components'

function ViewCard(props) {

  const [isHovering, setIsHovering] = useState(false);

  const mouseOver = () => setIsHovering(true);
  const mouseOut = () => setIsHovering(false);

    return (
      <Container onMouseOver={mouseOver} onMouseOut={mouseOut}>
        <div className="img-div">
          <img src={props.logo}/>
        </div>

        { isHovering &&
          <div className="video-div">
            {/*<video autoplay muted loop className="bgVideo">
              <source src={props.bgVideo} type="video/mp4" />
            </video> */}
            <video src={props.bgVideo} loop autoPlay muted className="bgVideo" type="video/mp4" />
          </div>
        }

      </Container>
    )
}

export default ViewCard

const Container=styled.div`
  position: relative;
  border-radius: 10px;
  width: 260px;
  height: 140px;
  border: 4px solid rgba(249,249,249,0.1);
  display:flex;
  justify-content:center;
  align-items:center;
  box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
  rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  overflow: hidden;

  .img-div {
    width: 100%;
    height: 100%;
    z-index: 4;
    img {
      width: 100%;
      height:100%;
    }
  }

  .video-div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

    .bgVideo {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &:hover {
      border-color:  rgba(255, 255, 255, 0.75);
      transform: scale(1.05);
  }
`
