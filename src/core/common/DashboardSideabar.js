import React from 'react'
import { NavLink } from "react-router-dom";
import { styled } from 'styled-components'
import profile from "./../../assets/images/common/Ellipse 21.png"
import user from "./../../assets/images/common/Male User.png"
import history from "./../../assets/images/common/Historical.png"
import classes from "./../../assets/images/common/Classroom.png"
import setting from "./../../assets/images/common/Settings.png"
import arrow from "./../../assets/images/common/Chevron Right.png"

export default function DashboardSideabar() {
  return (
    <Wrapper>
            <NavLink
              to=""
              className={({ isActive, isPending }) =>
                isPending ? "pending main" : isActive ? "active main" : "main"}>
              <img src={arrow} alt="" />
              Dashboard
            </NavLink>
      <div className="sidebar">
        
            <NavLink
              to=""
              className={({ isActive, isPending }) =>
                isPending ? "pending img" : isActive ? "active img" : "img"}>
              <img src={profile} alt="profile image" />
            </NavLink>
            <NavLink
              to="new"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}>
              <button className='primary-btn'>New +</button>
            </NavLink>
            <div className="top">
            <NavLink
              to=""
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}>
              <img src={user}/>
              Profile
            </NavLink>
            <NavLink
              to="history"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}>
                  <img src={history} alt="" />
                  History
            </NavLink>
            <NavLink
              to="classes"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}>
              <img src={classes} alt="" />
              Classes
            </NavLink>
            <NavLink
              to="change-assword"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}>
              <img src={setting} alt="" />
              Change Password
            </NavLink>
            </div>
            <div className='flex-1-c'></div>
            <button className='primary-btn'>Logout</button>


      </div>
    </Wrapper>
  )
}
const Wrapper=styled.div`
display: flex;
align-items: center;
width: 320px;
flex-direction: column;
gap: 50px;
align-items: center;
.sidebar{
  padding: 20px;
  background-color: #80DDF0;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 80vh;
  border-radius: 10px;
  gap: 20px;
  width: 100%;
  a{
    display: flex;
    text-decoration: none;
    gap: 20px;
    align-items: center;
  }
  .top{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 90%;
    a{
      border: 2px solid white;
      border-radius: 10px;
      width: 100%;
      padding: 2px  6px;
      color: white;
      font-weight: 600;
    }
  }
  .img{
    margin-bottom: 26px;
  }
}
.main{
  font-size: 36px;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 20px;
}
.flex-1-c{
  flex-direction: column;
  flex:1
}


`