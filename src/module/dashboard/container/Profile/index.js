import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import profile from "./../../../../assets/images/dashboard/Frame 3842.png"

export default function Index() {
  return (
    <Wrapper>
        <Link to="/">Profile</Link>
        <div className="body">
            <img src={profile} alt="" />
            <div className="wrapper">
                <div className="input-label-wrapper">
                        <label>Name</label>
                        <div className="input-wrapper">
                        <input type="email" placeholder='Enter Your Name' />
                        </div>
                    </div>
                <div className="input-label-wrapper">
                        <label>Organisation</label>
                        <div className="input-wrapper">
                        <input type="text" placeholder='Enter Your Organisation' />
                        </div>
                    </div>
                <div className="input-label-wrapper">
                        <label>Email</label>
                        <div className="input-wrapper">
                        <input type="email" placeholder='Enter Your Email' />
                        </div>
                    </div>
                <div className="input-label-wrapper">
                        <label>Profession</label>
                        <div className="input-wrapper">
                        <input type="text" placeholder='Enter Your Profession' />
                        </div>
                    </div>
            </div>
            <button className='primary-btn'>Update Profile</button>


        </div>
        
    </Wrapper>
  )
}


const Wrapper=styled.div`
display: flex;
flex-direction: column;
gap: 24px;
a{
    color: white;
    font-size: 26px;
    text-transform: capitalize;
}

.body{
    display: flex;
    background-color: #80ddf0;
    min-height: 40vh;
    border-radius: 10px;
    padding: 30px 50px;
    gap: 20px;
    position: relative;
    max-width: 800px;
    align-items: center;
    flex-direction: column;
    img{
        height: 120px;
    }
    .wrapper{
        display: flex;
        flex-direction: column;
        gap: 22px;
        width: 100%;
        position: relative;
        max-width: 500px;
        margin: auto;

        .input-label-wrapper{
            display: flex;
            flex-direction: column;
            gap: 8px;
            label{
                color: white;
            }
            .input-wrapper{
                display: flex;
                flex-direction: row;
                gap: 10px;
                padding: 8px;
                border-radius: 10px;
                border: 4px solid white;
                position: relative;
                background-color: #EAF9FC;

                input{
                    border: none;
                    outline: none;
                    background-color: inherit;
                    font-size: 18px;
                    width: 100%;

                }
                
            }
        }
    }
}


`