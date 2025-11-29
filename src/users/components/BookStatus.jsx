import React from 'react'

function BookStatus() {
  return (
    <div className='p-10 my-20 mx-5 shadow rounded'>
        {/* book div duplicate */}
        <div className="bg-gray-200 p-5 rounded">
            <div className='md:grid grid-cols-[3fr_1fr]'>
                <div>
                    <h2 className='text-2xl'>Title</h2>
                    <h3 className='text-xl'>Author</h3>
                    <h4 className='text-lg text-red-500'>$ 400</h4>
                    <p className='text-justify'>Abstract</p>
                    <div className='flex mt-5'>
                        {/* pending */}
                        <img width={'120px'} src="https://static.vecteezy.com/system/resources/previews/022/411/806/non_2x/pending-rubber-stamp-red-pending-rubber-grunge-stamp-seal-illustration-vector.jpg" alt="pending" />
                        {/* approved */}
                        <img width={'100px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCwPzwjd7slg0dR4uJ7YjQx2sYncuHgFevng&s" alt="approved" />
                        {/* sold */}
                        <img width={'90px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJnMM3nKdlhlKIqvH2b2RRt-d4ODNTb0Vsg&s" alt="sold" />
                    </div>
                </div>
                <div className='px-4 mt-4 md:mt-0'>
                    <img className='w-50' src="https://images.crowdspring.com/blog/wp-content/uploads/2020/12/29153507/wizardesign1_boldpattern.png" alt="book" />
                    <div className='flex justify-end'><button className='p-2 bg-red-600 text-white mt-5'>DELETE</button></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookStatus