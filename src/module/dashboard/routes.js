import React from 'react'
import { Outlet, Route } from 'react-router-dom'
import { styled } from 'styled-components'
import DashboardSideabar from '../../core/common/DashboardSideabar'
import Profile from './pages/Profile'
import Classes from './pages/Classes'




export const DashboardRoutes=[
  <Route index element={<Profile/>}/>,
  <Route path="classes" element={<Classes/>}/>,
  <Route path="classes" element={<Classes/>}/>,
]


export  function DashboardOutlet() {
  return (
    <>
        <Main>
          <DashboardSideabar/>
          <div className="outlet">
            <Outlet/>
          </div>
        </Main>
    </>
  )
}

const Main=styled.div`
display: flex;
flex-direction: row;
gap: 50px;
background-image:linear-gradient( to right ,#47CFE9,#EDFAFD) ;
min-height: 100vh;
padding: 40px 50px ;
.outlet{
  padding-top: 10px;
  flex:1;
}
`

