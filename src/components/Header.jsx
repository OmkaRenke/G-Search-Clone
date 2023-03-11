import React, { useState } from 'react'

import logog from "../assets/Google_home-page_logo.png"
import SearchInput from './SearchInput'
import ProfileIcon from "./ProfileIcon"

import "../style/Header.css"
import {menu} from "../utils/constant"
const Header = () => {
  const[selectedMenu,setselectedMenu]=useState("All")

  const clickHandler=(name)=>{
    setselectedMenu(name)
  }
  return (
    <>
      <div className='headerForSearch'>
        <div className='logoSearchinput'>
        <img  className='googlelogoForsearchResult' src={logog} alt="" />
        <span className="inputsection">
        <SearchInput></SearchInput>
        </span>
        </div>
        <ProfileIcon></ProfileIcon>
      </div>
      <div className='iconAndText'>
        {
          menu.map(item=>{
            return(
              <span key={item.name}className={`headerSection ${selectedMenu ===item.name ? "textColor":null}`}
              onClick={()=>clickHandler(item.name)}>
               <span className='icon'> {item.icon}</span>
               <span className='text'> {item.name}</span>
               {selectedMenu === item.name && (
                  <span className='selectedmenuName'></span>
                )}
              </span>
            )
          })
        }
      </div>
      <hr />
    </>
  )
}

export default Header