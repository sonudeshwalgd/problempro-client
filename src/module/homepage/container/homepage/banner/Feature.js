import React from 'react'
import { styled } from 'styled-components'
import background from "./../../../../../assets/images/homepage/Group 11.png"
import FeatureCard from './FeatureCard'

export default function Feature() {
  return (
    <Wrapper>
        <div className='main'> 
            <div className="content">
                <h5 className='sub-title'>Features</h5>
                <div className="body">
                <div className="left">
                    <div className="left-body">
                            <FeatureCard/>
                            <FeatureCard/>
                            <FeatureCard/>
                    </div>
                    <div className="left-body">
                            <FeatureCard/>
                            <FeatureCard/>
                            <FeatureCard/>
                    </div>
                </div>
                <div className="right">
                    <img className='img' src={background}/>
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
    padding: 92px 20px ;
    .sub-title{
            font-family: 'Judson', serif;
            font-size: 48px;
            text-align: center;
            margin: auto;
            padding: 0 20px;
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

}
.body{
    display: flex;
    flex-direction: row;
}
.left{
    flex:2;
    .left-body{
        flex-direction: row;
        justify-content: space-around;
        display: flex;
        padding-top: 20vh;
        gap: 20px;
        position: relative;
        &::after{
            content: "";
            width: 100%;
            height: 16px;
            background-color: white;
            border-radius: 10px;
            border: 2px solid #03256C;
            position: absolute;
            top: calc(20vh - 35px);
            left: 0;
            z-index: -1;
        }

    }

}
.right{
    flex:1;
    padding: 2vw;
    position: relative;
    img{
        width: 100%;
        padding: 2vw;
        padding-top: 20vh;
    }
}




`