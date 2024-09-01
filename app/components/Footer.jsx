import Link from 'next/link'
import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-20 flex flex-col items-center">

    <h1 className="-skew-y-[30deg] mb-12 text-7xl font-semibold font-greyQo">Rammy</h1>

    <div className="flex items-center space-x-10 mb-4">
      <span><Link href="https://www.linkedin.com/in/abdurrahman-abdulhakeem-322890239" target='_blank'><FaLinkedinIn className='text-2xl hover:text-gray-400 transition'/></Link></span>
      <span><Link href="https://github.com/Abdurrahman-Abdulhakeem" target='_blank'><FaGithub className='text-2xl  hover:text-gray-400 transition'/></Link></span>
      <span><Link href="https://web.facebook.com/profile.php?id=100063591285812" target='_blank'><FaFacebook className='text-2xl hover:text-gray-400 transition'/></Link></span>
    </div>
    <p><Link href={"mailto:abdurrahmanola21@gmail.com"} className='hover:text-gray-400 transition' target='_blank'>hello@abdurrahman.ng</Link></p>

    </footer>
  )
}

export default Footer