import React from 'react'
import dots from "./../../assets/images/dashboard/Menu Vertical.png"
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export default function GradeCard({grade}) {
  return (
    <Wrapper>
        <Link to={"grade"+grade}>
        <h3>Grade {grade}</h3>
        <img src={dots}/>    
        </Link>
    </Wrapper>
  )
}

const Wrapper=styled.div`
position: relative;
background-image: linear-gradient(to bottom ,#1768AC,#06BEE1);
border-radius: 20px;
height: max-content;
width: calc((100% - 20px) / 4 - 10px);
a{
    padding: 60px 20px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 40px;
    color: white;
    align-items: center;
    font-size: 18px;
    h3{
        font-weight: 500 ;

    }
    img{
        height: 26px;
    }


}


`

