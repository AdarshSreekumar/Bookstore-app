import React, { useEffect, useState } from 'react'
import { FaAddressCard, FaBars, FaFacebook, FaInstagram, FaPowerOff, FaTwitter, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
  const[listStatus,setListStatus]=useState(false)
  const [dp,setDp]=useState("")
  const [token,setToken]=useState("")
  const [dropDown,setDropDown]=useState(false)

  useEffect(()=>{
    if (sessionStorage.getItem("token")) {
      const userToken=sessionStorage.getItem("token")
      setToken(userToken)
      const user=JSON.parse(sessionStorage.getItem("user"))
      setDp(user.picture)
    }
  },[token])

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
      {/* login btn */}
     {
          !token ?
          <Link to={'/login'} className=' ms-2 border rounded px-2 py-1 hover:bg-white hover:text-black flex items-center'><FaUser className='me-1'/>Login</Link>
          :
          <div className="relative inline-block text-left ms-2">
            <button onClick={()=>setDropDown(!dropDown)} className='w-full bg-white px-3 py-2 shadow hover:bg-gray-50'><img width={'50px'} height={'50px'} style={{borderRadius:'50%'}} src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_se_enriched&w=740&q=80" alt="profile picture" />
            </button>
           {
            dropDown &&
             <div className='absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right ring-1 ring-black/5 focus:outline-hidden'>
                <Link to={'/user/profile'} className='px-4 py-2 text-sm text-gray-700 flex items-center'><FaAddressCard className='me-2'/>Profile</Link>
                <button className='px-4 py-2  text-sm text-gray-700 flex items-center'><FaPowerOff className='me-2'/>Logout</button>
            </div>
           }
          </div>
        }
      </div>
    </div>

    {/*  header lower part - links & menu + login */}
    <nav className='w-full p-2 bg-black text-white md:flex justify-center items-center'>
      {/* menu bar & login btn in mobile screen */}
      <div className="flex justify-between items-center text-2xl md:hidden">
        {/* menu bar */}
        <button onClick={menuBtnClick} className='cursor-pointer'><FaBars/></button>
        {/* login link */}
        {
          !token ?
          <Link to={'/login'} className=' ms-2 border rounded px-2 py-1 hover:bg-white hover:text-black flex items-center'><FaUser className='me-1'/>Login</Link>
          :
          <div className="relative inline-block text-left ms-2">
            <button onClick={()=>setDropDown(!dropDown)} className='w-full bg-white px-3 py-2 shadow hover:bg-gray-50'><img width={'50px'} height={'50px'} style={{borderRadius:'50%'}} src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_se_enriched&w=740&q=80" alt="profile picture" />
            </button>
           {
            dropDown &&
             <div className='absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right ring-1 ring-black/5 focus:outline-hidden'>
                <Link to={'/user/profile'} className='px-4 py-2 text-sm text-gray-700 flex items-center'><FaAddressCard className='me-2'/>Profile</Link>
                <button className='px-4 py-2  text-sm text-gray-700 flex items-center'><FaPowerOff className='me-2'/>Logout</button>
            </div>
           }
          </div>
        }
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