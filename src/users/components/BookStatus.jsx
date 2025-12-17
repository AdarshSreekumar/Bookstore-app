import React, { useEffect, useState } from 'react'
import { getAllUserBooksAPI } from '../../services/allAPI'

function BookStatus() {

    const [userBooks,setUserBooks]=useState([])

    useEffect(()=>{
        getUserUploadBooks()
    },[])

    const getUserUploadBooks=async ()=>{
        const token=sessionStorage.getItem("token")
        if(token){
            const reqHeader={
                "Authorization":`Bearer ${token}`
            }
            const result=await getAllUserBooksAPI(reqHeader)
            if (result.status==200) {
                setUserBooks(result.data)
            }else{
                console.log(result);
                
            }
        }
    }

  return (
    <div className='p-10 my-20 mx-5 shadow rounded'>
        {/* book div duplicate */}
        {
            userBooks?.length>0?
                userBooks?.map(book=>(
                    <div className="bg-gray-200 p-5 rounded">
                        <div className='md:grid grid-cols-[3fr_1fr]'>
                            <div>
                                <h2 className='text-2xl'>{book?.title}</h2>
                                <h3 className='text-xl'>{book?.author}</h3>
                                <h4 className='text-lg text-red-500'>$ {book?.discountPrice}</h4>
                                <p className='text-justify'>{book?.abstract}</p>
                                <div className='flex mt-5'>
                                    {/* pending */}
                                    
                                    {/* approved */}
                                   
                                    {/* sold */}
                                    
                                    {
                                        book?.status=="pending"?
                                        <img width={'120px'} src="https://static.vecteezy.com/system/resources/previews/022/411/806/non_2x/pending-rubber-stamp-red-pending-rubber-grunge-stamp-seal-illustration-vector.jpg" alt="pending" />
                                        : book?.status=="approved"?
                                        <img width={'100px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCwPzwjd7slg0dR4uJ7YjQx2sYncuHgFevng&s" alt="approved" />
                                        :
                                        <img width={'90px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJnMM3nKdlhlKIqvH2b2RRt-d4ODNTb0Vsg&s" alt="sold" />
                                    }
                                </div>
                            </div>
                            <div className='px-4 mt-4 md:mt-0'>
                                <img className='w-50' src={book?.imageURL} alt="book" />
                                <div className='flex justify-end'><button className='p-2 bg-red-600 text-white mt-5'>DELETE</button></div>
                            </div>
                        </div>
                    </div>
                ))
            :
            <div className='text-center my-5 font-bold'>
                Books are not uploaded yet!!!
            </div>
        }
    </div>
  )
}

export default BookStatus