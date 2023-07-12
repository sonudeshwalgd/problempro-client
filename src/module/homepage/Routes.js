import React from 'react'
import { Outlet, Route } from 'react-router-dom'
import Footer from '../../core/common/Footer'
import { HomepageBanner } from './pages/HomepageBanner'
import HomepageNavbar from '../../core/common/HomepageNavbar'
import { HomepageRequestForm } from './pages/RequestForm'
import { styled } from 'styled-components'
import NOTFOUND404 from '../../core/common/NOTFOUND404'



export const HomepageRoutes=[
  <Route index element={<HomepageBanner/>}/>,
  <Route path="/request-form" element={<HomepageRequestForm/>}/>,
  <Route path="/*" element={<NOTFOUND404/>}/>,

]


export  function HomePageOutlet() {
  return (
    <>
        <Main>
          <HomepageNavbar/>
        </Main>
        <Outlet/>
        {/* <Footer/> */}
    
    </>
  )
}

const Main=styled.div`
position:absolute;
top: 0;
width: 100vw;
z-index: 99;
`

