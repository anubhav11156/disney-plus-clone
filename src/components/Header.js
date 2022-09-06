import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { auth, provider } from '../firebase'
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function Header() {

  const location = useLocation();
  const path = location.pathname;

  let flag = (path=="/") ? true : false;

  const [userDetail, setUserDetail] = useState({});

  const navigate = useNavigate();

  // This is for: When user refresh the page the it should not logout
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=> {
      if(user){
        setUserDetail(user);
      }
    })
  },[])

  const signIn = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      alert('Logged In  Successfully')
      setUserDetail(result.user);
      navigate('/home')
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  const sign_Out = () => {
    signOut(auth)
    .then( ()=>{
      navigate('/')
    })
    .catch((err)=>{
      console.log(err);
    })
    alert('Logged Out')
  }

  const email=userDetail.email;
  const name=userDetail.displayName;
  const profileImageURL=userDetail.photoURL;

  const [isActive, setIsActive] = useState(false);
  const onFocusHandle = ()=> setIsActive(true)
  const onBlurHandle = ()=>  setIsActive(false)
  return (
      <Nav>
        <Logo>
          <img src="/images/disney-white-logo.png"/>
        </Logo>

        { flag==false &&
          <>
          <MenuBar>
            <div className="menu">
              <div className="logo-div">
                <img src="/images/home-icon.svg" />
              </div>
              <div className="option-div" onClick={()=>navigate('/home')}>
                HOME
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

          <SearchBar>
            <input type="text" placeholder="Search" onFocus={onFocusHandle} onBlur={onBlurHandle}
              style={{
                width: isActive ? '300px' : '190px',
                borderBottom: isActive ? '1px solid rgb(43, 118, 207)' : '1px solid rgb(255, 255, 255, 0.5)'
              }} />
          </SearchBar>

          <Profile>
            <div className="name-div">
              <p>Hi, {name}</p>
            </div>
            <div className="img-div">
              <img onClick={sign_Out} src={profileImageURL} />
            </div>
          </Profile>
          </>
         }

        { flag==true &&
          <LoginButton>
            <button onClick={signIn}>LOGIN</button>
          </LoginButton>
        }
      </Nav>
    )
}

export default Header

const Nav=styled.div`
  height: 70px;
  background-color: rgb(9,11,19);
  display: flex;
  align-items: center;
  overflow-x:hidden;
  position: relative;
  z-index: 10;
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
const LoginButton=styled.div`
  flex: 1;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: end;

  button {
    height: 38px;
    width: 98px;
    color: white;
    background-color: rgba(0, 0, 0, 0.8);
    font-family: Inter;
    letter-spacing: 0.4px;
    font-size: 15px;
    border: 1px solid white;
    border-radius: 4px;
    margin-right: 35px;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
      color: black;
      background-color: rgba(255, 255, 255, 0.94);
    }
  }
`
const MenuBar=styled.div`
  width: 570px;
  height: 70px;
  gap: 20px;
  background-color: rgb(9,11,19);
  display: flex;
  align-items: center;

  .menu {
    flex:1;
    height: 70px;
    opacity: 0.9;

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
      transition: opacity 0.3s;
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
      opacity: 0.9;
      margin-right: 8px;
      color: white;
      font-family: Inter;
      font-size:16px;
      font-weight: 500;
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
    position: relative;
    img {
      width: 42px;
      height: 42px;
      border-radius: 21px;
      cursor: pointer;
    }
  }
`

const SearchBar=styled.div`
  flex:1;
  margin-left: 20px;
  display: flex;
  justify-content: start;
  align-items: center;

  input {
    width: 207px;
    height: 28px;
    background-color: rgb(9,11,19);
    border: none;
    font-family: Inter;
    font-size: 16px;
    outline: none;
    color: rgba(255, 255, 255, 0.5);
    background: url('/images/search-grey.svg') no-repeat right;
    background-size: 17.5px;
    transition: all 0.25s;
  }
`
