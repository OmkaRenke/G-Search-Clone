import React, { useState } from 'react'

import {AiOutlineSearch} from "react-icons/ai"
import {IoMdClose} from "react-icons/io"
import { useNavigate, useParams } from 'react-router-dom'

import mic from "../assets/mic.svg"

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
        <AiOutlineSearch className='outlineSearch' size={42} color="#9aa0a6" ></AiOutlineSearch>
        <input className='inputbox' type="text" placeholder='Search Google or type a URL'
        value={searchQuery}
        onChange={(e)=>{
            setSearchQuery(e.target.value)
        }} 
        onKeyUp={searchQueryHandler}
        />
        {
            searchQuery && (<IoMdClose className='close'
            onClick={()=>setSearchQuery("")}
            ></IoMdClose>)
        }
        <img id='mic' src={mic} alt="mic" />
    </div>
  )
}

export default SearchInput