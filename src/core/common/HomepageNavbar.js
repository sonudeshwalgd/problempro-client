import React from "react";
import logo from "./../../assets/images/common/logo.svg";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";



export default function HomepageNavbar() {
  return (
    <>
      <Wrapper>

        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <img style={{visibility:"hidden"}} src={logo} />
        </NavLink>
        <ul>
  
          
          <li>
            <NavLink
              to="/tracker"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
            
          </li>
          
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Feature
            </NavLink>
          </li>
          
          <li>
            <NavLink
              to="/how-it-works"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              About
            </NavLink>
          </li>
          
          <li>
            <NavLink
              to="/request-form"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Support
            </NavLink>
          </li>
          <li className="gap"/>
          <li>
           <NavLink
              to="/request-form"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <button className="primary-btn">
                Signup
              </button>
            </NavLink>
          </li>
          <li>
           <NavLink
              to="/request-form"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <button className="primary-btn">
                  Login
              </button>
            </NavLink>
          </li>
        </ul>

      </Wrapper>
    </>
  );
}

const Wrapper=styled.div`
  max-width: 1400px;
  margin:  auto;
  padding: 20px 0;
  justify-content: space-between;
  display: flex;
  background-color: transparent;
  ul{
    display: flex;
    list-style: none;
    align-items: center;
    position: relative;
    &>li{
      margin: 0 20px;
      white-space: nowrap;
      &>a{
        color: black;
      text-decoration: none;
      font-size: 20px;
      font-weight: 600;
      }      
    }
    .gap{
      width: 11vw;
    }
  }
  .after-span{
    &>span{
      display: block;
      height: 20px;
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 4px;
    }
  }
  .active{
    position: relative;
    display: block;
    &::after{
      position: absolute !important;
      bottom: -8px;
      left: 0;
      content: "";
      width: 100%;
      height: 4px;
      border-radius: 4px;
      background-color: white;
    }

  }

`
