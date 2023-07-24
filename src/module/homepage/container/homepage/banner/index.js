import React from "react";
import { styled } from "styled-components";
import banner from "./../../../../../assets/images/homepage/home.jpg"
export default function Banner() {
  return (
    <Wrapper>
      <div>
        <div className="left">
            <h1>
            “Let AI Create the problem 
            </h1>
            <h1>for you “</h1>

            <button className="primary-btn">Try Now</button>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 10rem 2vw;
  padding-top: .8rem;
  background-image: url(${banner});
  background-size: cover;
  aspect-ratio: 16/9;
  background-repeat: no-repeat;
  &>div{
    max-width: 1400px;
    display: flex;
    gap: 4vw;
    /* padding-top: 126px; */
    .left{
      
      display: flex;
      align-items: center;
      flex-direction: column;
      padding-left: 2vw;
      gap: 30px;
    
        h1{
          color: black;
          font-size: 4.8vw;
          line-height: 82px;
          font-weight: 400;
        }
        .sub-heading{
          color: black;
          font-size: 20px;
          opacity: .9;
          font-weight: 400;
        }
    }
    .right{
      width: 50%;
      position: relative;
     img{
      width: 100%;
     } 
    }

  }
  .primary-btn{
    font-size: 32px;
  }
`;
