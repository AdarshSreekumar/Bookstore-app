import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../components/Header'
import { FaCircleCheck } from 'react-icons/fa6'
import Edit from '../components/Edit'
import SellBook from '../components/SellBook'
import BookStatus from '../components/BookStatus'
import Purchase from '../components/Purchase'

function Profile() {

  const[tab,setTab]=useState(1)

  return (
    <>
    <Header/>
    {/* black div */}
    <div style={{height:'200px'}} className="bg-black"></div>
    {/* profile img */}
    <div style={{width:'230px',height:'230px',borderRadius:'50%',marginLeft:'70px',marginTop:'-130px'}} className='bg-white p-3'>
      <img style={{width:'200px',height:'200px',borderRadius:'50%'}} src="https://media.istockphoto.com/id/1345371869/photo/senior-male-author-sitting-at-table-with-book-and-holds-hands-under-head.jpg?s=612x612&w=0&k=20&c=RiQw0gXvUm2c9UsAK77MjS7Wr49i5s-TEm-l6QMX43o=" alt="" />
    </div>
    {/* name with edit block */}
    <div className="md:flex justify-between items-center px-5 my-5">
      
        <h1 className="text-2xl font-bold flex items-center">Username<FaCircleCheck className='text-blue-400 ms-5'/></h1>

        <Edit/>

    </div>
    <p className='text-justify px-5 my-5'>This profile gives you a clear snapshot of your activity across the bookstore platform. You can track your purchased books, saved items, reading progress, and reviews in one place. Your recommendations are generated automatically based on your reading history, so the more you explore, the sharper the suggestions become.</p>

    {/* tabs with content */}
    <div className="md:px-40">
      <div className="flex justify-center items-center my-8 font-medium text-lg">
        <p onClick={()=>setTab(1)} className={tab==1?'text-blue-600 border-gray-200 border-t border-l border-r p-4 cursor-pointer':' border-gray-200 border-b p-4 cursor-pointer'}>Sell Books</p>
        <p  onClick={()=>setTab(2)} className={tab==2?'text-blue-600 border-gray-200 border-t border-l border-r p-4 cursor-pointer':' border-gray-200 border-b p-4 cursor-pointer'}>Book Status</p>
         <p  onClick={()=>setTab(3)} className={tab==3?'text-blue-600 border-gray-200 border-t border-l border-r p-4 cursor-pointer':' border-gray-200 border-b p-4 cursor-pointer'}>Purchase History</p>
      </div>
      {/* content */}
      {
        tab==1 &&
        <SellBook/>
        }
      {
        tab==2 &&
        <BookStatus/>
        }
      {
        tab==3 &&
        <Purchase/>
        }
    </div>
   
    <Footer/>
    </>
  )
}

export default Profile