import React from 'react'
import logo from '../assets/Logo2.png';
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'
import {FaInstagram} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className=' mb-20 py-6 flex items-center justify-between '>
      <div className='flex flex-shrink-0 items-center'>
        <img className='w-10 mx-2' src={logo} alt="logo"/> 
      </div>
      <div className='flex gap-4 m-8 text-xl items-center justify-center'>
        <a href='https://www.linkedin.com/in/akash-r-chaturvedi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
        <FaLinkedin/></a>
        <FaGithub/>
        <FaSquareXTwitter/>
        <FaInstagram/>

      </div>
    </nav>
  )
}

export default Navbar