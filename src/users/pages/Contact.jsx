import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaLocationDot } from 'react-icons/fa6'
import { FaEnvelope, FaPaperPlane, FaPhone } from 'react-icons/fa'

function Contact() {
  return (
    <>
      <Header />

      <div className="md:px-40 p-5">
        {/* Heading */}
        <div className="text-center my-5">
          <h1 className='text-3xl font-bold mb-5'>Contact Us</h1>
          <p>
            We'd love to hear from you! Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Accusamus esse sapiente quos laudantium incidunt 
            repellat! Saepe minima rem amet mollitia beatae.
          </p>
        </div>

        {/* Contact info */}
        <div className="md:flex justify-evenly items-center my-10">
          <div className="flex items-center gap-3 md:mt-0 mt-5">
            <div className="w-12 h-12 rounded-full flex justify-center items-center bg-gray-200">
              <FaLocationDot size={20} />
            </div>
            <p>123 Main Street, Apt 50, BigTown, CA 26773</p>
          </div>

          <div className="flex items-center gap-3 md:mt-0 mt-5">
            <div className="w-12 h-12 rounded-full flex justify-center items-center bg-gray-200">
              <FaPhone size={20} />
            </div>
            <p>8078085653</p>
          </div>

          <div className="flex items-center gap-3 md:mt-0 mt-5">
            <div className="w-12 h-12 rounded-full flex justify-center items-center bg-gray-200">
              <FaEnvelope size={20} />
            </div>
            <p>adarsh@gmail.com</p>
          </div>
        </div>

        {/* Form + Map side by side */}
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          
          {/* Form */}
          <div className="bg-gray-200 p-5 rounded">
            <h1 className="text-xl text-center font-semibold">Send Message</h1>

            <div className="my-3">
              <input 
                placeholder="Name" 
                type="text" 
                className="bg-white p-2 w-full rounded" 
              />
            </div>

            <div className="my-3">
              <input 
                placeholder="E-mail" 
                type="text" 
                className="bg-white p-2 w-full rounded" 
              />
            </div>

            <div className="my-3">
              <textarea 
                placeholder="Message" 
                className="bg-white p-2 w-full rounded h-32" 
              ></textarea>
            </div>

            <button className="bg-black p-2 w-full text-white flex justify-center items-center rounded">
              Send <FaPaperPlane className="ms-2" />
            </button>
          </div>

          {/* Map */}
          <div className="w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.287259863896!2d76.2863442!3d9.9931134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d43b3065357%3A0xa5568979f3b9b500!2sErnakulam%20Town!5e0!3m2!1sen!2sin!4v1764270182924!5m2!1sen!2sin"
              className="w-full h-[100%] min-h-[350px] rounded"
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </div>

        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Contact
