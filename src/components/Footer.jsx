import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <footer class="bg-[#0c1320] text-white py-12 px-6 md:px-16">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

    {/* <!-- ABOUT US --> */}
    <div>
      <h2 class="text-xl font-semibold mb-4">ABOUT US</h2>
      <p class="text-sm leading-6 text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum
        laudantium earum fugit fugiat eius voluptas aperiam numquam, quos,
        ratione non laborum sed facere ab nesciunt enim, quo necessitatibus vero!
      </p>
    </div>

    {/* <!-- NEWS LETTER --> */}
    <div>
      <h2 class="text-xl font-semibold mb-4">NEWS LETTER</h2>
      <p class="text-sm text-gray-300 mb-4">Stay updated with our latest trends</p>

      <div class="flex">
        <input
          type="email"
          placeholder="Email ID"
          class="w-full px-4 py-2 text-white rounded-l-md outline-none"
        />
        <button class="bg-yellow-500 px-4 rounded-r-md flex items-center justify-center">
          ➜
        </button>
      </div>
    </div>

    {/* <!-- FOLLOW US --> */}
    <div>
      <h2 class="text-xl font-semibold mb-4">FOLLOW US</h2>
      <p class="text-sm text-gray-300 mb-4">Let us be social</p>

      <div class="flex items-center space-x-4 text-xl">
        <FaFacebook/>
        <FaInstagram/>
        <FaTwitter/>
      </div>
    </div>

  </div>

  {/* <!-- COPYRIGHT BAR --> */}
  <div class="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
    Copyright © 2023 All rights reserved |
    This website is made with <span class="text-red-500">♥</span> Adarsh S kumar
  </div>
</footer>

  )
}

export default Footer