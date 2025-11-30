import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'
import { FaPen } from 'react-icons/fa'

function AdminProfile() {
  return (
    <>
    <AdminHeader/>
    <div className="md:grid grid-cols-5">
      <div className="col-span-1">
        <AdminSideBar/>
      </div>
      <div className="col-span-4 p-10">
        <h1 className="text-center my-5 font-bold text-3xl">Settings</h1>
        <div className="md:grid grid-cols-2 items-center mt-10 gap-10">
          {/* text */}
          <div>
           <h2 className='text-xl font-bold mb-5'>Welcome to the Admin Panel</h2>
           <p className='text-justify mb-5'>
             The Admin Collection module is the control center of the bookstore management system.
            It gives the administrator complete visibility and control over all books stored in the catalogue.
            From here, the admin can track inventory, update book details, organize categories, and remove outdated or unavailable titles.
            View the entire book inventory in a structured, searchable list Add new titles with pricing, category, author details, and stock count Edit existing records to update prices, covers, and descriptions Remove books that are discontinued or out of circulation Monitor stock levels and highlight items running low Group books under categories and maintain classification accuracy
           </p>
           <p className='font-bold mb-2'>Account Settings</p>
            <ul>
              <li>View the entire book inventory in a structured, searchable list</li>
              <li>Add new titles with pricing, category, author details, and stock count</li>
              <li>Edit existing records to update prices, covers, and descriptions</li>
              <li>Remove books that are discontinued or out of circulation</li>
              <li>Monitor stock levels and highlight items running low</li>
              Group books under categories and maintain classification accuracy
            </ul>
           
          </div>

          {/* form */}
           {/* body */}
            <div className="flex justify-center items-center flex-col mb-5 mt-10 bg-blue-100 p-5 rounded">
              {/* image */}
              <label htmlFor="uploading">
                <input type="file" id='uploading' hidden />
                <img style={{width:'150px',height:'150px',borderRadius:'50%'}} src="https://media.istockphoto.com/id/1345371869/photo/senior-male-author-sitting-at-table-with-book-and-holds-hands-under-head.jpg?s=612x612&w=0&k=20&c=RiQw0gXvUm2c9UsAK77MjS7Wr49i5s-TEm-l6QMX43o=" alt="profile" />
              </label>
              <button style={{marginTop:'-20px'}}  className='bg-blue-500 p-2 text-white rounded'><FaPen/></button>
              {/* name */}
              <div className=" mb-3 w-full px-5 mt-5">
                <input type="text" placeholder='Username' className='bg-white rounded p-2 w-full py-1' />
              </div>
              {/* password */}
              <div className=" mb-3 w-full px-5">
                <input type="password" placeholder='New Password' className=' bg-white rounded w-full py-1 p-2' />
              </div>
              <div className=" mb-3 w-full px-5">
                <input type="password" placeholder='Confirm Password' className=' bg-white  rounded w-full py-1 p-2' />
              </div>
              
              {/* button */}
              <div className="mb-3 flex justify-center px-5">
                <button className='px-3 py-2 rounded bg-red-600 text-white hover:bg-white hover:border-red-600'>RESET</button>
                <button className='px-3 py-2 rounded bg-green-600 text-white hover:bg-white hover:border-green-600 ms-5'>UPDATE</button>
              </div>

            </div>

        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default AdminProfile