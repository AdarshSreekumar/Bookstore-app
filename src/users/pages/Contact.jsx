import React from 'react'
import Header from '../components/Header'

function Contact() {
  return (
    <>
    <Header/>
    <section class="w-full py-14 px-6 md:px-16">
  {/* <!-- Heading --> */}
  <div class="text-center max-w-4xl mx-auto">
    <h2 class="text-3xl font-semibold mb-4">Contacts</h2>
    <p class="text-gray-600 text-sm md:text-base leading-relaxed">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione, officia delectus
      consequuntur, dicta libero magni omnis architecto voluptas culpa praesentium ipsum assumenda quae
      dolor, nihil rerum fugit expedita corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Optio maiores fuga, modi vel accusantium magnam ex, ratione aliquam eius odit consequuntur earum,
      itaque nulla labore veritatis quis aut atque!
    </p>
  </div>

  {/* <!-- Icons Row --> */}
  <div class="mt-10 flex flex-col md:flex-row justify-center gap-10 md:gap-20">
    
    {/* <!-- Address --> */}
    <div class="flex items-start gap-4">
      <div class="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl">
        <i class="fa-solid fa-location-dot"></i>
      </div>
      <p class="text-sm leading-relaxed">
        123 Main Street, Apt 4B,<br />
        Anytown, CA 91234
      </p>
    </div>

    {/* <!-- Phone --> */}
    <div class="flex items-start gap-4">
      <div class="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl">
        <i class="fa-solid fa-phone"></i>
      </div>
      <p class="text-sm">+91 9874561230</p>
    </div>

    {/* <!-- Email --> */}
    <div class="flex items-start gap-4">
      <div class="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl">
        <i class="fa-solid fa-envelope"></i>
      </div>
      <p class="text-sm">Bookstore@gmail.com</p>
    </div>

  </div>

  {/* <!-- Form + Map --> */}
  <div class="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
    
    {/* <!-- Form Box --> */}
    <div class="bg-gray-100 rounded-md p-8">
      <h3 class="text-center font-semibold mb-6">Send me Message</h3>

      <div class="space-y-4">
        <input
          type="text"
          placeholder="Name"
          class="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-gray-300 outline-none"
        />

        <input
          type="email"
          placeholder="Email ID"
          class="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-gray-300 outline-none"
        />

        <textarea
          rows="4"
          placeholder="message"
          class="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-gray-300 outline-none"
        ></textarea>

        <button
          class="w-full bg-gray-800 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-900 transition"
        >
          Send <i class="fa-solid fa-paper-plane text-sm"></i>
        </button>
      </div>
    </div>

    {/* <!-- Map --> */}
    <div class="rounded-md overflow-hidden">
      <iframe
        class="w-full h-[350px] md:h-full border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.205...your_google_map_link..."
        loading="lazy"
      ></iframe>
    </div>

  </div>
</section>

</>

  )
}

export default Contact