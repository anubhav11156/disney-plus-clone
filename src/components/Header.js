import React from 'react'
import styled from 'styled-components'

function Header() {
  const profileName="Cortana"
    return (
        <Nav>

          <Logo>
            <img src="/images/disney-white-logo.png"/>
          </Logo>

          <MenuBar>
            <div className="menu">
              <div className="logo-div">
                <img src="/images/home-icon.svg" />
              </div>
              <div className="option-div">
                HOME
                <div className="bar"></div>
              </div>
            </div>
            <div className="menu">
              <div className="logo-div">
                <img src="/images/search-icon.svg" />
              </div>
              <div className="option-div">
                SEARCH
                <div className="bar"></div>
              </div>
            </div>

            <div className="menu">
              <div className="logo-div">
                <img src="/images/watchlist-icon.svg" />
              </div>
              <div className="option-div">
                WATCHLIST
                <div className="bar"></div>
              </div>
            </div>

            <div className="menu">
              <div className="logo-div">
                <img src="/images/original-icon.svg" />
              </div>
              <div className="option-div">
                ORIGINALS
                <div className="bar"></div>
              </div>
            </div>

            <div className="menu">
              <div className="logo-div">
                <img src="/images/movie-icon.svg" />
              </div>
              <div className="option-div">
                MOVIES
                <div className="bar"></div>
              </div>
            </div>

            <div className="menu">
              <div className="logo-div">
                <img src="/images/series-icon.svg" />
              </div>
              <div className="option-div">
                SERIES
                <div className="bar"></div>
              </div>
            </div>

          </MenuBar>

          <Profile>
            <div className="name-div">
              <p>{profileName}</p>
            </div>
            <div className="img-div">
              <img src="/images/profile-4.jpg"/>
            </div>
          </Profile>
        </Nav>
    )
}

export default Header

const Nav=styled.div`
  height: 70px;
  background-color: rgb(9,11,19);
  display: flex;
  align-items: center;
`
const Logo=styled.div`
  width: 140px;
  height: 70px;
  background-color: rgb(9,11,19);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 63%;
  }

`
const MenuBar=styled.div`
  flex:1;
  height: 70px;
  background-color: rgb(9,11,19);
  display: flex;
  align-items: center;

  .menu {
    flex:1;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Inter;

    letter-spacing: 1.7px;
    font-weight: 500;
    font-size: 13.5px;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;

    .option-div {
      position: relative;
    }

    .option-div .bar {
      position: absolute;
      left:0px;
      right:0px;
      bottom: -7.5px;
      background-color: rgba(53, 54, 50, 0.64);
      width: 97.5%;
      height: 3.8px;
      border-radius: 3px;
      opacity: 0;
      z-index: 1000;
      transition: opacity 0.35s;
    }

    .option-div:hover .bar {
      opacity: 1;
    }

    .logo-div {
      display: flex;
      width: 20px;
      justify-content: center;
      margin-right: 7px;
      padding-bottom: 2px;
    }


  }
`

const Profile=styled.div`
  flex:1.2;
  height: 70px;
  background-color: rgb(9,11,19);
  display: flex;
  align-items: center;

  .name-div {
    flex:1;
    display:flex;
    justify-content: end;

    p {
      margin-right: 8px;
      color: white;
      font-family: Inter;
      font-size:14px;
      cursor: pointer;
    }

  }

  .img-div {
    margin-right: 18px;
    width:70px;
    display: flex;
    justify-content: center;
    align-items:center;
    background-color: rgb(9,11,19);
    img {
      width: 42px;
      height: 42px;
      border-radius: 21px;
      cursor: pointer;
    }
  }
`
