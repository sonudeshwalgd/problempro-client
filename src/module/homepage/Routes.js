import React from 'react'
import { Outlet, Route } from 'react-router-dom'
import Footer from '../../core/common/Footer'
import HomepageNavbar from '../../core/common/HomepageNavbar'
import NOTFOUND404 from '../../core/common/NOTFOUND404'
import {  AboutPage } from './pages/About'
import { Homepage } from './pages/Homepage'

export const HomepageRoutes=[
  <Route index element={<Homepage/>}/>,
  <Route path='/about' element={<AboutPage/>}/>,
  <Route path="/*" element={<NOTFOUND404/>}/>,
]


export  function HomePageOutlet() {
  return (
    <>
        <HomepageNavbar/>
        <Outlet/>
        <Footer/>
    
    </>
  )
}


