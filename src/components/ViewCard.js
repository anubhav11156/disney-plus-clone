import React from 'react'
import styled from 'styled-components'

function ViewCard(props) {
    return (
        <Container>
          <img src={props.logo}/>
        </Container>
    )
}

export default ViewCard

const Container=styled.div`
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

  &:hover {
      border-color:  rgba(255, 255, 255, 0.75);
      transform: scale(1.05);
  }

  img {
    width: 100%;
    height:100%;
  }
`
