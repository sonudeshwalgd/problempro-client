import React, { useState } from 'react'
import { styled } from 'styled-components'
import SearchSection from './SearchSection'
import Result from './Result'

export default function Index() {
    const [generatedResult,isGeneratedResult]=useState("")

  return (
    <Wrapper>
        <div className="left">
            <SearchSection isGeneratedResult={isGeneratedResult}/>
        </div>
        <div className="right">
            <Result generatedResult={generatedResult}/>
        </div>
    </Wrapper>
  )
}


const Wrapper=styled.div`
display: flex;
flex-direction: row;
gap: 24px;
padding: 50px;
.left{
    flex: 1;
}
.right{
    flex: 2;
}



`