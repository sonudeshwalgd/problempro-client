import React from 'react'
import { styled } from 'styled-components'

export default function Left() {
  return (
    <>
    <Wrapper>
        <button className='primary-btn'>New +</button>
    <ul>
        <li>
            <button className='btn-3 '>Profit And Lose</button>
        </li>
        <li>
            <button className='btn-3 active'>Profit And Lose</button>
        </li>
        <li>
            <button className='btn-3'>Profit And Lose</button>
        </li>
    </ul>
    </Wrapper>
    </>
  )
}

const Wrapper=styled.div`
position: relative;
ul{
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: none;
    margin-top: 50px;
    height: 80vh;
    overflow-y: auto;
}
button{
    width: 100%;
}
.active{
    background-color: #33CAE6;
    color: white;
}

`
