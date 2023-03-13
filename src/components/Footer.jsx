import React from 'react'


import {quickLinks} from "../utils/constant"
import {settingMenu} from "../utils/constant"
import {settingMenu2} from "../utils/constant"

import "../style/Footer.css"
const Footer = () => {
  return (
    <div className='Footer'>
      <div className='location'>
        <span className='locationCountry'>India</span>
        <span className='exactLocation'>location</span>
        <hr className='hr' />
      </div>
      <div>
        <div className='quickLinks'>
          {
            quickLinks.map((link,index)=>(
              <span className='quickLinksText1' key={index}>{link}</span>
            ))
          }
        </div>
        <div className='quickLinks'>
        {
          settingMenu.map((link,index)=>(
              <span className='quickLinksText2' key={index}>{link}</span>
            ))
        }
        </div>
        <div className='quickLinks'>
        {
          settingMenu2.map((link,index)=>(
              <span className='quickLinksText3' key={index}>{link}</span>
            ))
        }
        </div>
      </div>
    </div>
  )
}

export default Footer