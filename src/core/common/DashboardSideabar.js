import React from 'react'
import { NavLink } from "react-router-dom";
import { styled } from 'styled-components'

export default function DashboardSideabar() {
  return (
    <Wrapper>
            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}>
              Dashboard
            </NavLink>
      <div className="sidebar">
        <div className="top">
            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}>
              <img src={profile} alt="profile image" />
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}>
              <button className='primary-btn'>New +</button>
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}>
              <img/>
              Profile
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}>
                  <img src="" alt="" />
                  History
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}>
              <img src="" alt="" />
              Classes
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}>
              <img src="" alt="" />
              Change Password
            </NavLink>
            </div>
            <button className='primary-btn'>Logout</button>


      </div>
    </Wrapper>
  )
}
const Wrapper=styled.div`
display: flex;
align-items: center;
padding: 20px;
width: 300px;
border: solid;
flex-direction: column;
.sidebar{
  border: solid;
}
.top{
  display: flex;
  flex-direction: column;
}


`