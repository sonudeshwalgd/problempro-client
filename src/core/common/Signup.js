import React from 'react'
import { styled } from 'styled-components'
import background from "./../../assets/images/common/loginbackground.png"
import email from "./../../assets/images/common/Layer 2.png"
import password from "./../../assets/images/common/Vector (1).png"

export default function Signup() {
  return (
    <Wrapper>
        <div className="body">
            <h1>Log In</h1>
            <div className="wrapper">
                <div className="input-label-wrapper">
                    <label>Email</label>
                    <div className="input-wrapper">
                     <img src={email} alt="" />   
                     <hr />
                     <input type="email" placeholder='Enter Your Email' />
                    </div>
                </div>
                <div className="input-label-wrapper">
                    <label>Password</label>
                    <div className="input-wrapper">
                     <img src={password} alt="" />   
                     <hr />
                     <input type="password" placeholder='Enter Your Password'  />
                    </div>

                </div>
                <p className='forget'>Forget password?</p>
                <button className='btn-2'>Log In</button>
                <p className='signup'>Don't have an account?<span>sign up</span></p>

            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper =styled.div`
position: relative;
background-image: url(${background});
padding-top: 92px;
min-height: 100vh;
display: flex;
justify-content: center;
align-items:center;
background-size: cover;
.body{
    max-width: 600px;
    min-width: 34vw;
    margin: auto;
    border-radius: 10px;
    padding: 20px;
    background-image: linear-gradient( to bottom ,#79DBEE,#10B0DA);
    h1{
        text-align: center;
        color: white;
        font-weight: 800 !important;
        margin-bottom: 10px;

    }
    .wrapper{
        display: flex;
        flex-direction: column;
        gap: 20px;
        .input-label-wrapper{
            display: flex;
            flex-direction: column;
            gap: 10px;
            label{
                color: white;
            }
            .input-wrapper{
                display: flex;
                flex-direction: row;
                gap: 10px;
                padding: 10px;
                border-radius: 10px;
                border: 4px solid white;
                position: relative;
                background-color: #EAF9FC;
                img{
                    position: relative;
                }
                hr{
                    background-color: black;
                    color: black;
                    border: none;
                    width: 2px;
                    border-radius: 2px;
                }

                input{
                    border: none;
                    outline: none;
                    background-color: inherit;
                    font-size: 18px;

                }
                
            }
        }
    }
    .forget{
        text-align: right;
        color: white;
    }
    .signup{
        text-align: center;
        color: white;
        span{
            color: black;
        }

    }
}

`
