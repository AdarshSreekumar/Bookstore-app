import React, { useState } from 'react'
import { FaEdit, FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'


function Edit() {

  const[offcanvasStatus,setOffcanvasStatus]=useState(false)
  return (
    <div>
        <button onClick={()=>setOffcanvasStatus(true)} className='flex items-center text-blue-600 border p-2 rounded hover:text-white hover:bg-blue-600'>Edit <FaEdit className='ms-3'/></button>
        {/* offcanvas */}
        {
          offcanvasStatus &&
          <div>
            <div className='fixed inset-0 bg-gray-500/75 z-50 w-full h-full'>
        </div>
        <div className='bg-white h-full w-90 z-52 fixed top-0 left-0'>
            {/* header */}
            <div className="bg-black p-3 flex justify-between">
              <h3 className='text-lg text-white'>Update Profile</h3>
              <button onClick={()=>setOffcanvasStatus(false)}><FaX className='bg-red-600'/></button>

            </div>
            {/* body */}
            <div className="flex justify-center items-center flex-col mb-5 mt-10">
              {/* image */}
              <label htmlFor="uploading">
                <input type="file" id='uploading' hidden />
                <img style={{width:'150px',height:'150px',borderRadius:'50%'}} src="https://media.istockphoto.com/id/1345371869/photo/senior-male-author-sitting-at-table-with-book-and-holds-hands-under-head.jpg?s=612x612&w=0&k=20&c=RiQw0gXvUm2c9UsAK77MjS7Wr49i5s-TEm-l6QMX43o=" alt="profile" />
              </label>
              <button style={{marginTop:'-20px'}}  className='bg-blue-500 p-2 text-white rounded'><FaPen/></button>
              {/* name */}
              <div className=" mb-3 w-full px-5 mt-5">
                <input type="text" placeholder='Username' className='border border-gray-200 rounded w-full' />
              </div>
              {/* password */}
              <div className=" mb-3 w-full px-5">
                <input type="password" placeholder='New Password' className='border border-gray-200 rounded w-full' />
              </div>
              <div className=" mb-3 w-full px-5">
                <input type="password" placeholder='Confirm Password' className='border border-gray-200 rounded w-full' />
              </div>
              {/* bio */}
               <div className=" mb-3 w-full px-5">
                <textarea type="text" placeholder='Bio' className='border border-gray-200 rounded w-full' />
              </div>
              {/* button */}
              <div className="mb-3 flex justify-end px-5">
                <button className='px-3 py-2 rounded bg-red-600 text-white hover:bg-white hover:border-red-600'>RESET</button>
                <button className='px-3 py-2 rounded bg-green-600 text-white hover:bg-white hover:border-green-600 ms-5'>UPDATE</button>
              </div>

            </div>
        </div>
        </div>
        }
    </div>
  )
}

export default Edit