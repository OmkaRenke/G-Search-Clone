import React, { useContext, useState } from 'react'

import logog from "../assets/googlelogo_color_92x30dp.png"
import SearchInput from './SearchInput'
import ProfileIcon from "./ProfileIcon"

import "../style/Header.css"
import {menu} from "../utils/constant"
import { useNavigate } from 'react-router-dom'
import {context} from "../utils/contextApi"
const Header = () => {
  const[selectedMenu,setselectedMenu]=useState("All")
  const navigate=useNavigate()
  const {setImageSearch}=useContext(context)

  const clickHandler=(name)=>{
    setselectedMenu(name)
    if(name==="Images"){
      setImageSearch(true)
    }else{
      setImageSearch(false)
    }
  }
  return (
    <>
      <div className='headerForSearch'>
        <div className='logoSearchinput'>
        <img onClick={()=>navigate("/")} className='googlelogoForsearchResult' src={logog} alt="" />
        <span className="inputsection">
        <SearchInput></SearchInput>
        </span>
        </div>
        <span className="profileIcon">
        <ProfileIcon ></ProfileIcon>
        </span>
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