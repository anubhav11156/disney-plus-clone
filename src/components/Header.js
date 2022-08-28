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
            <div className="home">
              <div className="logo-div">
                <img src="/images/home-icon.svg" />
              </div>
              HOME
            </div>
            <div className="search">
              <div className="logo-div">
                <img src="/images/search-icon.svg" />
              </div>
              SEARCH
            </div>

            <div className="watchlist">
              <div className="logo-div">
                <img src="/images/watchlist-icon.svg" />
              </div>
              WATCHLIST
            </div>

            <div className="originals">
              <div className="logo-div">
                <img src="/images/original-icon.svg" />
              </div>
              ORIGINALS
            </div>

            <div className="movies">
              <div className="logo-div">
                <img src="/images/movie-icon.svg" />
              </div>
              MOVIES
            </div>

            <div className="series">
              <div className="logo-div">
                <img src="/images/series-icon.svg" />
              </div>
              SERIES
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

  .home,
  .search,
  .watchlist,
  .originals,
  .movies,
  .series {
    flex:1;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Inter;
    font-weight: 500;
    font-size: 13.5px;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: cente;

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
