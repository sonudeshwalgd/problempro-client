import React from 'react'
import { styled } from 'styled-components'
import close from "./../../../../assets/images/common/icons8-close.svg"

export default function Result() {
  return (
    <Wrapper>
      <button className="primary-btn">
        Save as PDF
      </button>
    </Wrapper>
  )
}

const Wrapper=styled.div`
min-height: calc(100vh - 100px);
background-color: #D1F5FC;
border-radius: 20px;
position: relative;
.primary-btn{
left:50%;
bottom: 20px;
background-color: transparent;
border: none;
outline: none;
position: absolute;

}



`
