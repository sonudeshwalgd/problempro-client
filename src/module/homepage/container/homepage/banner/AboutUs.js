import React from 'react'
import { styled } from 'styled-components'
import img from "./../../../../../assets/images/homepage/Recruiting advertisement.png"
import background from "./../../../../../assets/images/homepage/aboutus.png"

export default function AboutUs() {
  return (
    <>
    <Wrapper>
      <div className="main">
      <h5 className='sub-title'>About Us</h5>
      <div className="body">
        <div className="left">
          <img className='img' src={img} alt="" />
        </div>
        <div className="right">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet viverra leo, nec tempus est hendrerit non. Donec malesuada lobortis arcu vel cursus. Pellentesque gravida a eros vel tincidunt. Nullam quis lacus egestas, ornare urna non, tristique massa. 
          </p>
        </div>
      </div>
      </div>
    </Wrapper>
    </>
  )
}

const Wrapper=styled.div`
/* width: 100vw; */
position: relative;
/* background-color: #4CD0E9; */
background-image: url(${background});
margin-top: -110px;
padding: 92px 0;

.main{
  max-width:1440px;
  margin: auto;
  background-color: #5CDAF1;
  border-radius: 10px;
  margin: 0 180px;
  margin-top: 110px;
  .body{
    display: flex;
    /* gap: 3vw; */
    justify-content: center;
    align-items: center;
    flex-direction: row;
    position: relative;
  }

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
    padding: 2vw;
    p{
      font-size: 26px;
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
            padding: 20px;
            width: max-content;
            position: relative;
            &::after{
              content: "";
              position: absolute;
              bottom: 12px;
              left: 0;
              width: 100%;
              height: 4px;
              border-radius: 2px;
              background-color: white;
            }
        }


`
