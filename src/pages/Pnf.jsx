import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    
     <div className='h-screen flex justify-center items-center flex-col'>
        
        <img width={'30%'} src="https://assets-v2.lottiefiles.com/a/3455ed68-1151-11ee-9772-5b4c76d6674b/xn6epX0wkV.gif" alt="" />
        <h2 className='text-blue600 text-2xl'>Look Like You're Lost</h2>
        <p>The Page you're searching is not available</p>
        <Link to={'/'} className='bg-black py-2 px-3 rounded my-3 text-white'>Back Home</Link>
    </div>
  )
}

export default Pnf