import React, { useState } from 'react'

import {IoMdClose} from "react-icons/io"
import { useNavigate, useParams } from 'react-router-dom'

import mic from "../assets/mic.svg"
import searchIcon from "../assets/search-icon-png-21.png"
import "../style/SearchInput.css"

const SearchInput = () => {
    const {query}=useParams()
    const [searchQuery,setSearchQuery]=useState(query||"")
    const navigate=useNavigate()

    const searchQueryHandler =(e)=>{
        // console.log(e)
        if(e.key==="Enter" && searchQuery.length>0){
            navigate(`/${searchQuery}/${1}`)
        }
    }

  return (
    <div className='searchInput'>
        <img className='outlineSearch' src={searchIcon}/>
        <input autoFocus className='inputbox' type="search" placeholder='Search Google or type a URL'
        value={searchQuery}
        onChange={(e)=>{
            setSearchQuery(e.target.value)
        }} 
        onKeyUp={searchQueryHandler}
        />
        {/* {
            searchQuery && (<img className='close' src={searchDelete} title='Clear'
            onClick={()=>setSearchQuery("")}
            ></img>)
        } */}
        <img id='mic' src={mic} alt="mic" title='Search by voice' />
    </div>
  )
}

export default SearchInput