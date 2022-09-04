import React from 'react'
import styled from 'styled-components'

function Login() {

  const clickHandler = () => {
    alert('Click on login button')
  }
    return (
        <Container>
          <BackgroundImg>
            <img src="/images/login-background.jpg"/>
          </BackgroundImg>

          <LoginBox>
            <Logo>
              <div className="wrapper">
                <img src="/images/cta-logo-one.svg" />
              </div>
            </Logo>

            <SubscribeButton>
              <button onClick={clickHandler}>GET ALL THERE</button>
            </SubscribeButton>

            <Description>
              <p>Get Premier Access to Raya and the Last Dragon fonr and adventure free with a Disney+ subscription as of 30/08/2022, the price of Disney+ adn The Disney Bundle will increase by $1.</p>
            </Description>

            <Viewers>
              <div className="wrapper">
                <img src="/images/cta-logo-two.png" />
              </div>
            </Viewers>
          </LoginBox>
        </Container>
    )
}

export default Login

const Container=styled.div`
  height: calc(100vh - 70px);
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BackgroundImg=styled.div`
  z-index: -1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.87;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const LoginBox=styled.div`
  height: 45vh;
  width: 72vw;
  opacity: 0.87;
  display:flex;
  flex-direction: column;
`

const Logo=styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .wrapper {
    flex:1;
    display:flex;
    justify-content: center;
    align-items: center;

    img {
      width: 60%;
      object-fit: cover;
    }
  }
`

const SubscribeButton=styled.div`
  height: 60px;
  display: flex;
  justify-content:center;
  margin-top: 10px;

  button {
    width: 847.64px;
    border-radius: 4px;
    border:none;
    font-family: Inter;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 1.1px;
    color: rgba(255, 255, 255, 0.83);
    background-color: rgb(0, 99, 230);
    cursor: pointer;
    transition: all 0.25s;

    &:hover {
      opacity: 0.9;
    }
  }
`

const Description=styled.div`
  margin-top: 15px;
  height: 40px;
  display: flex;
  justify-content:center;
  align-items: center;

  p {
    margin: 0;
    width: 830px;
    font-family: Inter;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.75);
    text-align: center;
    letter-spacing: 1px;
  }
`

const Viewers=styled.div`
  margin-top: 30px;
  flex:1;

  .wrapper {
    flex:1;
    display:flex;
    justify-content: center;
    align-items: center;

    img {
      width: 60%;
      object-fit: cover;
    }
  }
`
