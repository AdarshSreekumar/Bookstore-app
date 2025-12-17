import React, { useEffect, useState } from 'react'
import  Header  from "../components/Header";
import  Footer  from "../../components/Footer";
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { getHomePageBooksAPI } from '../../services/allAPI';


function Home() {
  const navigate=useNavigate()
  const [searchKey,setSearchKey]=useState("")
  const [homeBooks,setHomeBooks]=useState([])

  console.log(homeBooks);
  

  useEffect(()=>{
    getHomeBooks()
  },[])

  const getHomeBooks=async()=>{
    const result=await getHomePageBooksAPI()
    // console.log(result);
    if (result.status==200) {
      setHomeBooks(result.data)
    }else{
      console.log(result);
      
    }
  }

  const handleSearch=()=>{
      if (!searchKey) {
        toast.warning("please provide a Book title here!!")
      }else if(!sessionStorage.getItem("token")){
        toast.warning("please login to search Book!!")
        setTimeout(() => {
          navigate('/login')
        }, 2500);
      }else if(sessionStorage.getItem("token") && searchKey){
        navigate('/books')
      
      }else{
        toast.error("Something went wrong")
      }
  }
  return (
    <>
    <Header/>
    <div>
      {/* landing part-search */}
      <div style={{height:'500px'}} className='flex justify-center items-center flex-col bg-[url(/background-image.png)] bg-cover bg-center text-white'>
      <div style={{height:'500px',backgroundColor:'rgba(0,0,0,0.5)'}} className='w-full flex justify-center items-center  flex-col'>
        <h1 className='text-5xl font-bold mb-2'>Wonderful Gifts</h1>
        <p>Gift your Family and Friends</p>

        {/* search */}
        <div className='mt-9 flex items-center'>
          <input onChange={e=>setSearchKey(e.target.value)} type="text" className='bg-white rounded-3xl text-black w-100 placeholder-gray-500 p-2' placeholder='Search Books Here' />
          <button onClick={handleSearch}className='text-gray-500' style={{marginLeft:'-40px'}}><FaSearch/></button>

        </div>

      </div>
      </div>
      {/* new arrival */}
      <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
        <h1 className="text-3xl font-bold">NEW ARRIVALS</h1>
        <h2 className='text-2xl'>Explore Our Latest Collection</h2>

        {/* books row & col */}
        <div className="md:grid grid-cols-4 w-full mt-10">
          {/* duplicate book card div */}
            {
              homeBooks?.length>0?
                homeBooks?.map(book=>(
                    <div key={book?._id} className="shadow rounded p-3 mx-4 mb-5 md:mb-0">
                    <img width={'100%'} height={'300px'} src={book?.imageURL} alt="book" />
                    <div className="flex justify-center items-center flex-col mt-4">
                      <h3 className='text-blue-600 font-bold text-lg'>{book?.author}</h3>
                      <h4 className='text-lg'>{book?.title}</h4>
                      <h4 className='text-green-700'>$ {book?.discountPrice}</h4>

                    </div>

                </div>
                ))
              :
              <p className='font-bold'>Loading</p>

            }

        </div>
        {/*all books link  */}
        <div className='text-center mt-20'>
          <Link to={'/books'}><button className='p-2 bg-black text-white '>Explore More...</button></Link>
        </div>


      </section>
      {/* author */}
      <section className='md:px-40 p-5 my-5 md:grid grid-cols-2 items-center gap-10'>
          {/* author content */}
          <div className='text-center'>
            <h1 className="text-2xl font-bold">FEATURED AUTHORS</h1>
            <h2 className='text-2xl'>Captivates With Every Word</h2>
            <p className='text-justify mt-9'>writes clear, engaging books that focus on delivering real value to readers. Their work combines practical insight with straightforward storytelling, making complex ideas easy to understand and easy to apply. They aim to challenge assumptions, provoke thought, and push readers toward genuine improvement—without fluff or filler.</p>
             <p className='text-justify mt-9'>writes clear, engaging books that focus on delivering real value to readers. Their work combines practical insight with straightforward storytelling, making complex ideas easy to understand and easy to apply. They aim to challenge assumptions, provoke thought, and push readers toward genuine improvement—without fluff or filler.</p>

          </div>
          {/* author image */}
          <div className="p-5 flex justify-center items-center">
            <img className='w-full' src="https://media.istockphoto.com/id/1345371869/photo/senior-male-author-sitting-at-table-with-book-and-holds-hands-under-head.jpg?s=612x612&w=0&k=20&c=RiQw0gXvUm2c9UsAK77MjS7Wr49i5s-TEm-l6QMX43o=" alt="img" />
          </div>
      </section>
      {/* testimony */}

       <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
        <h1 className="text-3xl font-bold">TESTIMONIALS</h1>
        <h2 className='text-2xl'>See What Others Are Saying</h2>

        <div className='my-10 flex justify-center items-center flex-col'>
          {/* user image */}
          <img width={'200px'} height={'200px'} style={{borderRadius:'50%'}} src="https://thumbs.dreamstime.com/b/tablet-portrait-creative-business-man-office-research-publication-book-author-pen-story-technology-happy-face-357048320.jpg" alt="img" />

          {/* feedback */}
          <p className='mt-5'>Alexander</p>
          <p className='text-justify mt-4'><span className='font-bold me-2'>"Amazing Collection and Easy navigation</span>This site does a better job recommending books than most major platforms. The suggestions actually match my reading style instead of pushing random bestsellers.I appreciate how organized everything is. Categories are clear, book pages load fast, and I can compare titles without jumping through multiple links."</p>

        </div>

      
      </section>

    </div>
    <Footer/>
      <ToastContainer position='top-center' autoClose={2000} theme='colored'/>
    </>
  )
}

export default Home