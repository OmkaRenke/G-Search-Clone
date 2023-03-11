import React from 'react'
import HomeHeader from './HomeHeader'
import "../style/Home.css"

import i from "../assets/google-logo.png"
import SearchInput from './SearchInput'

const Home = () => {
  return (
    <div>
        <HomeHeader></HomeHeader>
       <div className="middlebox">
          <div className='googleMainLogo'>
          <img src={i} alt="" />
          </div>
          <SearchInput></SearchInput>
       </div>
    </div>
  )
}

export default Home