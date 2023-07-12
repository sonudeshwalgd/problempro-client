import React from 'react'
import { styled } from 'styled-components'
import logo from "./../../assets/images/common/logo.svg"
import meta from "./../../assets/images/common/Facebook.svg"
import instagram from "./../../assets/images/common/Instagram.svg"
import linkedin from "./../../assets/images/common/Linkdin.svg"
import twitter from "./../../assets/images/common/Twitter.svg"
import email from "./../../assets/images/common/Icon.png"
import call from "./../../assets/images/common/Icon (1).png"
import address from "./../../assets/images/common/Icon (2).png"
import { Link } from 'react-router-dom'



export default function Footer() {
  return (
    <Wrapper>
      <div>
        <div className='top'>
        <ul>
          <li>
            <img className='logo' src={logo}/>
            <p>Reeroute: India's Fastest Truck Booking Platform!</p>
            <div className='social'>
              <h4>Follow us on</h4>
              <div>
                <a href="#" className='link'><img src={instagram}/></a>
                <a href="#" className='link'><img src={meta}/></a>
                <a href="#" className='link'><img src={twitter}/></a>
                <a href="#" className='link'><img src={linkedin}/></a>
              </div>
            </div>
          </li>
          <li>
            <Link className='link'>About Us</Link >
            <Link className='link'>How it Works</Link >
            <Link className='link'>Download App</Link >
            <Link className='link'>Contact</Link >
          </li>
          <li>
            <Link className='link'>Careers</Link>
            <Link className='link'>Terms & Conditions</Link>
            <Link className='link'>Privacy Policy</Link>
          </li>
          <li className='icon-text'>
            <div>
              <div>
                <img src={email}/>
              </div>
              <div>
                <p>Email</p>
                <p>contact@logistics.com</p>
              </div>
            </div>
            <div>
              <div>
                <img src={call}/>
              </div>
              <div>
                <p>Email</p>
                <p>contact@logistics.com</p>
              </div>
            </div>
            <div>
              <div>
                <img src={address}/>
              </div>
              <div>
                <p>Email</p>
                <p>contact@logistics.com</p>
              </div>
            </div>
          </li>
        </ul>
        </div>
        <div className='bottom'>
          <p >Copyright © ReeRoute | Designed by Jethi Tech</p>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper=styled.div`
width:100vw;
position: relative;
background-color: #2A4F6D;
color: white;
&>div{
  position: relative;
  max-width: 1196px;
  margin: auto;
  p{
  font-size: 14px;
}
.link{
    font-size: 14px;
    text-decoration: none;
    color: white;

  }
  .top{
    padding-top: 140px ;
    padding-bottom: 50px ;
    ul{
      display: flex;
      list-style: none;
      justify-content: space-between;
      &>li{
        display: flex;
        flex-direction: column;
        gap: 20px;
        .logo{
          width: 100px;
          margin-top: -46px;
        }
        .social{
          padding:10px 0;
          div{
            padding:10px 0;
            display: flex;
            gap: 12px;
          }
        }
      }
      &>.icon-text{
        &>div{
            display: flex;
            gap: 30px;
          }
      }
    }

  }
  .bottom{
    padding: 20px 0;
    border-top: 1px solid  #4E5683;
    p{
      text-align: center;
    }
  }
}


`