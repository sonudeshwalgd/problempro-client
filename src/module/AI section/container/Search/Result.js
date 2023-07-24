import React, { useEffect, useRef } from 'react'
import { styled } from 'styled-components'

export default function Result({generatedResult}) {
  const result=useRef()
  useEffect(()=>{
    result.current.innerText=generatedResult
  },[generatedResult])
  return (
    <Wrapper>
      <p ref={result}></p>
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
p{
  padding: 20px;
  max-height: 90vh;
  overflow-y: auto;
}
.primary-btn{
left:50%;
bottom: 20px;
background-color: transparent;
border: none;
outline: none;
position: absolute;

}



`
