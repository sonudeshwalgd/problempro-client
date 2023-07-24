import React from 'react'
import { styled } from 'styled-components'
import close from "./../../../../assets/images/common/icons8-close.svg"

export default function Right() {
  return (
    <Wrapper>
      <button className="close">
        <img src={close}/>
      </button>
    </Wrapper>
  )
}

const Wrapper=styled.div`
min-height: calc(100vh - 100px);
background-color: #D1F5FC;
border-radius: 20px;
position: relative;
.close{
top: 10px;
right: 10px;
background-color: transparent;
border: none;
outline: none;
position: absolute;
img{
  background: transparent;
}
}



`
