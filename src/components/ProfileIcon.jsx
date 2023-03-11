import React from 'react'

import "../style/ProfileIcon.css"

import {CgProfile} from "react-icons/cg"
import {TbGridDots} from "react-icons/tb"

const ProfileIcon = () => {
  return (
    <div className='profileicons'>
        <span className='TbGridDots'>
            <TbGridDots size={30} title="Google app"></TbGridDots>
        </span>
        <span className='cgProfile'>
            <CgProfile  title="Google Account"size={30}></CgProfile>
        </span>
    </div>
  )
}

export default ProfileIcon