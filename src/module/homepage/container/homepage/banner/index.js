import React from "react";
import { styled } from "styled-components";
import rightBanner from "./../../../../../assets/images/homepage/Online business negotiation.png"
export default function Banner() {
  return (
    <Wrapper>
      <div>
        <div className="left">
            <h1>
            “Let AI solve the problem for you “
            </h1>
            <h5 className="sub-heading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet viverra leo, nec tempus est hendrerit non. Donec malesuada lobortis arcu vel cursus. 
            </h5>
            <button className="primary-btn">Try Now</button>
        </div>
        <div className="right">
          <img src={rightBanner}/>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  margin: auto;
  padding: 10rem 2vw;

  &>div{
    display: flex;
    gap: 4vw;
    padding-top: 126px;
    .left{
      
      display: flex;
      align-items: center;
      flex-direction: column;
      padding-left: 2vw;
      gap: 30px;
      width: 50%;
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
