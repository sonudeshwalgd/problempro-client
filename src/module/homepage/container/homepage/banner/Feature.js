import React from 'react'
import { styled } from 'styled-components'
import background from "./../../../../../assets/images/homepage/Completed form.png"
import FeatureCard from './FeatureCard'

export default function Feature() {
  return (
    <Wrapper>
        <div className='main'> 
            <div className="content">
                <h5 className='sub-title'>Features</h5>
                <div className="grid">
                    <img className='img' src={background}/>
                    <div className="row row1">
                        <div className="card-wrapper">
                            <FeatureCard/>
                        </div>
                        <div className="card-wrapper">
                            <FeatureCard/>
                        </div>
                    </div>
                    <div className="row row2">
                        <div className="card-wrapper">
                            <FeatureCard/>
                        </div>
                        <div className="card-wrapper">
                            <FeatureCard/>
                        </div>
                    </div>
                    <div className="row row3">
                        <div className="card-wrapper">
                            <FeatureCard/>
                        </div>
                        <div className="card-wrapper">
                            <FeatureCard/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </Wrapper>
  )
}


const Wrapper=styled.div`
width: 100vw;
position: relative;
min-height: 100vh;
z-index: 1;
background-color: rgba(141,233,251,.14);
.main{
    max-width: 1440px;
    margin: auto;
    .img{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        z-index: 2;
    }
    .content{
        z-index: 2;
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
                background-color: #19C4E5;
            }
        }
        
        .grid{
            display: grid;
            width: 100%;
            min-height:100vh ;
            position: relative;

        }
        .card-wrapper{
            width:349px;
        }
        .row{
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: center;
        }
        .row1{
            gap: 30vw;
        }
        .row2{
            gap: 40vw;
        }
        .row3{
            gap: 30vw;
        }
        
    }
    background-image: url(${background});

}



`