import React, { useState } from 'react'
import { FaBars, FaFacebook, FaInstagram, FaTwitter, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
  const[listStatus,setListStatus]=useState(false)

  const menuBtnClick=()=>{
    setListStatus(!listStatus)
  }
  return (
    <>
    {/* upper part - title & login*/}
    <div className='grid grid-cols-3 p-2'>

    {/* logo with title */}
    <div className='flex items-center'>
      <img width={'70px'} height={'70px'} src="https://www.clipartmax.com/png/middle/218-2180174_photo-archive-g-book-stack-book-icons.png" alt="logo" />
      <h1 className='text-2xl font-bold ms-1 md:hidden'>BOOKSTORE</h1>
    </div>
    {/* title */}
    <div className='md:flex  justify-center items-center hidden'>
      <h1 className='text-3xl font-bold'>BOOK STORE</h1>
    </div>
    {/* login */}
    <div className='md:flex justify-end items-center hidden '>
      {/* insta, fb, twitter */}
      <FaInstagram/>
      <FaFacebook className='mx-2'/>
      <FaTwitter/>
      <Link to={'/login'} className=' ms-4 border rounded py-1 px-2 hover:bg-black hover:text-white flex items-center'><FaUser className='me-1'/>Login</Link>
    </div>
     </div>

    {/*  header lower part - links & menu + login */}
    <nav className='w-full p-2 bg-black text-white md:flex justify-center items-center'>
      {/* menu bar & login btn in mobile screen */}
      <div className="flex justify-between items-center text-2xl md:hidden">
        {/* menu bar */}
        <button onClick={menuBtnClick} className='cursor-pointer'><FaBars/></button>
        {/* login btn */}
        <Link to={'/login'} className=' ms-2 border rounded px-2 py-1 hover:bg-white hover:text-black flex items-center'><FaUser className='me-1'/>Login</Link>
      </div>
      {/* ul-  links */}
      <ul className={listStatus?"flex flex-col":"md:flex justify-center items-center hidden"}>
        <li><Link to={'/'}className='md:mx-4'>HOME</Link></li>
        <li><Link to={'/books'}className='md:mx-4'>BOOKS</Link></li>
        <li><Link to={'/contact'}className='md:mx-4'>CONTACT</Link></li>
        
      </ul>
    </nav>
   
    </>
  )
}

export default Header