import React, { useEffect, useState } from 'react'
import { getAllUserBoughtBooksAPI } from '../../services/allAPI'

function Purchase() {

    const [userBoughtBooks,setUserBoughtBooks]=useState([])

    useEffect(()=>{
        getUserBoughtBooks
    },[])

    const getUserBoughtBooks=async()=>{
        const token=sessionStorage.getItem("token")
        if(token){
            const reqHeader={
                "Authorization":`Bearer ${token}`
            }
            const result=await getAllUserBoughtBooksAPI(reqHeader)
            if (result.status==200) {
                setUserBoughtBooks(result.data)
            }else{
                console.log(result);
                
            }
        }
    }

  return (
    <div className='p-10 my-20 mx-5 shadow rounded'>
       
        {/* book div duplicate */}
        <div className="bg-gray-200 p-5 rounded">
            {
                userBoughtBooks.length>0?
                    userBoughtBooks.map(books=>(
                        <div className='md:grid grid-cols-[3fr_1fr]'>
                             <div>
                                <h2 className='text-2xl'>{userBoughtBooks?.title}</h2>
                                <h3 className='text-xl'>{userBoughtBooks?.author}</h3>
                                <h4 className='text-lg text-red-500'>$ 400</h4>
                                <p className='text-justify'>{userBoughtBooks?.abstract}</p>
                                <div className='flex mt-5'>
                                {/* purchase */}
                                    <img width={'120px'} src="https://static.vecteezy.com/system/resources/thumbnails/023/629/822/small/web-button-icon-purchase-button-free-png.png" alt="purchase" />
                                        
                                </div>
                                </div>
                                <div className='px-4 mt-4 md:mt-0'>
                                    <img className='w-50' src={userBoughtBooks?.imageURL} alt="book" />
                                        
                                    </div>
                                </div>
                    ))
                    :
                      <div className='text-center my-5 font-bold'>
                            Books are not purchased yet!!!
                        </div>
            }
        </div>
    </div>
                  
  )
}

export default Purchase