
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import React from 'react';
import Link from "next/link";

function Footer() {
  return (
    <div>
      <footer className="body-font">
        <div className='w-full h-[300px] flex items-center justify-center flex-col space-y-10 md:space-y-16'>
          <p style={{ fontFamily: 'Rubik Vinyl, cursive' }} className="text-[#7C4EE4] text-[30px] md:text-[40px]">Little Salt</p>

          <div className="flex items-center justify-center gap-10 text-xl flex-wrap">
            <Link href="/" className="text-gray-500  hover:scale-110 hover:underline transition-all duration-300 hover:text-purple-700">Home</Link>
            <Link href="/blog" className="text-gray-500 hover:scale-110 hover:underline transition-all duration-300 hover:text-purple-700">Blog</Link>
            <Link href="/about" className="text-gray-500 hover:scale-110 hover:underline transition-all duration-300 hover:text-purple-700">About</Link>
            <Link href="/contact" className="text-gray-500 hover:scale-110 hover:underline transition-all duration-300 hover:text-purple-700">Contact</Link>
          </div>

          <div className='flex items-center justify-center gap-4'>
            <Link href="https://www.facebook.com" className="hover:scale-110  transition-all duration-300">
              <FaFacebook size={24} color="#7C4EE4" />
            </Link>
            <Link href="https://www.youtube.com" className="hover:scale-110  transition-all duration-300">
              <FaYoutube size={24} color="#7C4EE4" />
            </Link>
            <Link href="http://www.linkedin.com" className="hover:scale-110  transition-all duration-300">
              <FaLinkedin size={24} color="#7C4EE4" />
            </Link>
            <Link href="https://www.instagram.com" className="hover:scale-110  transition-all duration-300">
              <FaInstagramSquare size={24} color="#7C4EE4" />
            </Link>
          </div>
        </div>

        <div className="bg-gray-100">
          <div className="px-5 py-6 mx-auto flex items-center justify-center sm:flex-row flex-col">
            <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span style={{ fontFamily: 'Rubik Vinyl, cursive' }} className="text-[#7C4EE4] text-[24px]">Little Salt</span>
            </Link>
            <p className="text-md text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2020 LittleSalt
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;




