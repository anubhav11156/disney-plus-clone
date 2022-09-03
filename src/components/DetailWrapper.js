import React from 'react'
import styled from 'styled-components'

function DetailWrapper(props) {

    return (
        <Container>
          <ShortDetail>
            <p>{props.year} &#8226; {props.mediaType}</p>
          </ShortDetail>
          <Description>
            <p>
              {props.overview}
            </p>
          </Description>
        </Container>
    )
}

export default DetailWrapper

const Container=styled.div`
  width: 740px;
  height: 430px;
`

const ShortDetail=styled.div`
  p {
    padding-top: 10px;
    font-family: Inter;
    font-size: 17px;
  }
`

const Description=styled(ShortDetail)`
  width: 720px;
  margin-top:10px;
  line-height: 1.4;
  font-size: 10px;
  color: rgba(255, 255, 255);
  p {
    font-family: Inter;
    font-size: 17px;
    font-weight: 400;
    letter-spacing: 0.5px;
  }
`
