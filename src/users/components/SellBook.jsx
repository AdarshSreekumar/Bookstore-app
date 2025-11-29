import React from 'react'

function SellBook() {
  return (
    <div>
        <div className="p-10 my-20 mx-5 bg-gray-200">
            <h1 className='text-center text-3xl font-bold'>Book Details</h1>
            <div className="md:grid grid-cols-2 mt-10 w-full">
                <div className="px-3">
                    <div className="mb-3">
                        <input type="text" placeholder='Book Title' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Author' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='No. of Pages' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Original price' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Discount price' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Book Image URL' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <textarea type="text" placeholder='Book Abstract' className="p-2 bg-white w-full rounded" />
                    </div>
                </div>
                <div className="px-3">
                    <div className="mb-3">
                        <input type="text" placeholder='Language' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Publisher' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='ISBN' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Category' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className='mb-3 flex justify-center items-center'>
                        <label htmlFor="uploadImg">
                            <input type="file" id='uploadImg' hidden />
                        <img width={'200px'} src="https://cdn.pixabay.com/photo/2017/06/13/12/53/upload-2398772_640.png" alt="upload" />
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button className='bg-gray-400 text-white p-2 rounded me-5 hover:bg-white hover:text-gray-400'>RESET</button>
                <button className='bg-blue-400 text-white p-2 rounded me-5 hover:bg-white hover:text-blue-400'>SUBMIT</button>
            </div>
        </div>
    </div>
  )
}

export default SellBook