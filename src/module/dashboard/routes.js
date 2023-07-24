import React from 'react'
import { Outlet, Route } from 'react-router-dom'
import { styled } from 'styled-components'
import DashboardSideabar from '../../core/common/DashboardSideabar'
import Profile from './pages/Profile'




export const DashboardRoutes=[
  <Route index element={<Profile/>}/>,
]


export  function DashboardOutlet() {
  return (
    <>
        <Main>
          <DashboardSideabar/>
          <Outlet/>
        </Main>
    
    
    </>
  )
}

const Main=styled.div`
display: flex;
flex-direction: row;
gap: 50px;
background-image:linear-gradient( to left ,#47CFE9,#EDFAFD) ;
min-height: 100vh;
padding: 80px 50px ;
`

