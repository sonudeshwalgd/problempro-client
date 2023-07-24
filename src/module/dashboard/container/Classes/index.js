import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { styled } from 'styled-components'
import arrow from "./../../../../assets/images/dashboard/Chevron Right (1).png"
import GradeCard from '../../../../core/common/Grade'

export default function Index() {
    const location=useLocation()
    console.log(location)
  return (
    <Wrapper>
        <div className="header">
        {location.pathname.split("/").map((ele,index,arr)=>{
            return(
                <>
                {
                    index>1 &&<>
                <Link to={"/dashboard/"+ele}>{ele}</Link>
                {index<arr.length-1 && <img src={arrow}/>}
                    </>
                }
                </>
                
                )
        })}
        </div>
        <div className="body">
            <GradeCard grade="1"/>
            <GradeCard grade="2"/>
            <GradeCard grade="3"/>
            <GradeCard grade="4"/>
            <GradeCard grade="5"/>
            <GradeCard grade="6"/>
            <GradeCard grade="7"/>
            <GradeCard grade="8"/>
            <GradeCard grade="9"/>

        </div>
        
    </Wrapper>
  )
}


const Wrapper=styled.div`
display: flex;
flex-direction: column;
gap: 24px;
.header{
    a{
        color: white;
        font-size: 26px;
        text-transform: capitalize;
    }
}
.body{
    display: flex;
    background-color: #80ddf0;
    min-height: 40vh;
    border-radius: 10px;
    padding: 20px;
    gap: 20px;
    flex-wrap: wrap;
    position: relative;
}


`