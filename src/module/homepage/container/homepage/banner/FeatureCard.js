import React from 'react'
import { styled } from 'styled-components'

export default function FeatureCard() {
  return (
    <Wrapper>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Wrapper>
  )
}

const Wrapper= styled.div`
width: 100%;
position: relative;
height: 155px;
display: flex;
justify-content:center;
align-items: center;
border-radius: 20px;
background-image: linear-gradient( to bottom ,#8DE9FB,#FFFFFF);
box-shadow: 0 8px 6px #1768AC;
p{
    font-size: 24px;
    color: #1E1E1E;
    font-family: 'Source Sans 3', sans-serif;
    text-align: center;
    
}




`
