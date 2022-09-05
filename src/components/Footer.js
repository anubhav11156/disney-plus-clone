import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Container>
      <DisneyDetail>
        <div className="disney-logo-div">
          <div className="logo-div">
            <img src="/images/disney-white-logo.png"/>
          </div>
        </div>
        <div className="text-content">
          <p>&#169; Disney All Rights Reserved.</p>
          <p>Movie Data from <span><a href="https://developers.themoviedb.org/3/getting-started/introduction" target="_blank">www.themoviedb.org</a></span></p>
          <p>This is a clone developed by Anubhav Kumar, India</p>
        </div>
        <div className="flag"></div>
      </DisneyDetail>

      <MyDetail>
        <div className="social-media">
          <div className="handles">
            <a href="https://discordapp.com/users/769844243236913155" target="_blank">
              <img src="/images/discord-logo.png" />
            </a>
          </div>
          <div className="handles">
            <a href="https://www.behance.net/thermal_ice" target="_blank">
              <img src="/images/behance-logo.png" />
            </a>
          </div>
          <div className="handles">
            <a href="https://www.linkedin.com/in/anubhav-kumar-8749871b8/" target="_blank">
              <img src="/images/linkedin-logo.png" />
            </a>
          </div>
        </div>
      </MyDetail>
    </Container>
  )
}

export default Footer

const Container=styled.div`
  margin-top: 70px;
  width: 100vw;
  height: 400px;
  background-color: rgb(9,11,19);
  display: flex;
  flex-direction: row;
`

const DisneyDetail=styled.div`
  flex:1;

  display: flex;
  flex-direction: column;

  .disney-logo-div{
    margin-top: 40px;
    padding-left: 22px;
    flex:1
    background-color: lightblue;

    .logo-div{
      height: 60px;
      width: 120px;
      display: flex;
      align-items: center;
      margin-bottom: 25px;
      img {
        width: 100%;
      }
    }
  }

  .text-content {
    display: flex;
    flex-direction: column;
    p {
      padding-left: 22px;
      font-family: Inter;
      font-size: 14px;
      margin-top: 0px;
      margin-bottom: 7px;
      color: rgba(255, 255, 255, 0.91);
      a {
        color: white;
      }
    }
  }

  .flag{
    height: 20px;
  }
`

const MyDetail=styled.div`
  flex: 1;
  position: relative;

  .social-media {
    padding-right: 20px;
    position: absolute;
    height: 60px;
    bottom: 10px;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: end;

    .handles {
      margin-right: 30px;
      width: 32px;
      height: 32px;

      img {
        width: 100%;
      }

      transition: all 0.25s;
    }

    .handles:hover {
      scale: 1.15;
    }
  }

`
