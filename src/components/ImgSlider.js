import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {movieData} from '../sliderData'
import SliderCard from './SliderCard'

function ImgSlider() {


  // this is setting for the carousel (react-slick)
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }

  const sliders = movieData.map((slider)=>{
    return (
      <SliderCard
        id={slider.id}
        trailerKey={slider.key}
        bgImg={slider.bgImg}
        poster={slider.poster}
        overview={slider.overview}
        year={slider.year}
        name={slider.name}
        mediaType={slider.mediaType}
      />
    )
  })
    return (
        <Carousel {...settings}>
          {sliders}
        </Carousel>
    )
}

export default ImgSlider

const Carousel=styled(Slider)`
  margin-top: 20px;
  height:368px;
  width:95vw;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`
