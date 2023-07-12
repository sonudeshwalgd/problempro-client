import React from 'react'
import { styled } from 'styled-components'
import img from "./../../../../../assets/images/homepage/Recruiting advertisement.png"

export default function AboutUs() {
  return (
    <>
    <Wrapper>
      <h5 className='sub-title'>Features</h5>
      <div className="main">

        <div className="left">
          <img className='img' src={img} alt="" />
        </div>
        <div className="right">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet viverra leo, nec tempus est hendrerit non. Donec malesuada lobortis arcu vel cursus. Pellentesque gravida a eros vel tincidunt. Nullam quis lacus egestas, ornare urna non, tristique massa. 
          </p>
        </div>
      </div>
    </Wrapper>
    </>
  )
}

const Wrapper=styled.div`
width: 100vw;
position: relative;
background-color: #4CD0E9;

.main{
  max-width:1440px;
  margin: auto;
  display: flex;
  gap: 3vw;
  justify-content: center;
  align-items: center;
  .left{
    width: 50%;
    padding: 2vw;
    position: relative;
    .img{
      width: 100%;
      object-fit: contain;
    }
  }
  .right{
    width: 50%;
    position: relative;
    padding: 4vw;
    p{
      font-size: 30px;
      color: white;
      max-width: 600px;
    }
  }

}
.sub-title{
            font-family: 'Judson', serif;
            font-size: 48px;
            text-align: center;
            margin: auto;
            padding: 0 20px;
            padding-top: 92px;
            width: max-content;
            position: relative;
            &::after{
              content: "";
              position: absolute;
              bottom: -8px;
              left: 0;
              width: 100%;
              height: 4px;
              border-radius: 2px;
              background-color: white;
            }
        }


`
