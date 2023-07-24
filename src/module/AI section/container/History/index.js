import React from 'react'
import { styled } from 'styled-components'
import Left from './Left'
import Right from './Right'

export default function Index() {
  return (
    <Wrapper>
        <div className="left">
            <Left/>
        </div>
        <div className="right">
            <Right/>
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
    width: 300px;
}
.right{
    flex: 1;
}



`