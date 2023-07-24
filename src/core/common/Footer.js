import React from 'react'
import { styled } from 'styled-components'
import instagram from "./../../assets/images/common/instagram (1).png"
import linkedin from "./../../assets/images/common/linkedin (1).png"
import twitter from "./../../assets/images/common/twitter.png"
import call from "./../../assets/images/common/Icon (1).png"
import youtube from "./../../assets/images/common/youtube (1).png"
import { Link } from 'react-router-dom'



export default function Footer() {
  return (
    <Wrapper>
      <div>
        <div className='top'>
          <div className="left">
            <h4 className="heading">Newsletter</h4>
            <div className="input-wrapper">
              <input type="text"  placeholder='Enter Your Email'/>
              <button className='primary-btn'>Subscribe</button>
            </div>
          </div>
          <div className="right">
            <p>Privacy Policy</p>
            <p>Terms And Conditions </p>
            <p>Support</p>
          </div>
        </div>
        <hr/>
        <div className='bottom'>
          <p className="left">© 2023 Problem Pro</p>
          <div className="right">
            <a><img src={twitter} /></a>
            <a><img src={linkedin} /></a>
            <a><img src={youtube} /></a>
            <a><img src={instagram} /></a>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper=styled.div`
width:100vw;
position: relative;
background-color: #D7F7FD;
padding-top: 92px;
&>div{
  position: relative;
  max-width: 1196px;
  margin: auto;

  .top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 10px;
    .left{
      display: flex;
      flex-direction: column;
      gap: 10px;
      .heading{
        color: #03256C;
        font-family: 'Judson',serif;
        font-size: 26px;
      }
      .input-wrapper{
        display: flex;
        gap: 20px;
        input{
          width: 300px;
          background-color: white;
          border-radius: 30px;
          border: none;
          outline: none;
          padding-left: 20px;
        }
      }
    }
    .right{
      display: flex;
      flex-direction: column;
      gap: 24px;
      font-size: 14px;
      align-items: flex-end;
    }

  }
  .bottom{
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
      color: #2E3537;
      font-size: 12px;
      font-weight: 700;
    }
    .right{
      display: flex;
      gap: 10px;
      img{
        height: 24px;
      }
    }
  }
  .primary-btn{
    padding: 10px 32px;

  }
}


`