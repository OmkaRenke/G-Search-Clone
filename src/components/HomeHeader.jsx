import React from 'react'
import ProfileIcon from './ProfileIcon'
import  "../style/HomeHeader.css"

const HomeHeader = () => {
  return (
    <header className='homeHeader'>
        <div className='headLinks'>
            <a className='headLink' target={'_blank'} href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">Gmail</a>
            <a className='headLink' target={'_blank'} href="https://www.google.co.in/imghp?hl=en&tab=ri&ogbl">Images</a>
        </div>
        <ProfileIcon></ProfileIcon>
    </header>
  )
}

export default HomeHeader