import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";




const Header = () => {
  return (
    <div className='  px-6 pt-2 hidden md:flex justify-between'>
        <div className='flex items-center gap-1 text-[#4A5565]'>
        <IoLocationOutline />
        <p className='text-sm '>Road-21, Sector-11, Uttara, Dhaka-1230, Bangladesh</p>

        </div>
        <div className='flex items-center gap-1 text-[#4A5565]'>
        <MdSupportAgent />

        <p className='text-sm '>+009254685468</p>

        </div>
        <div className='flex items-center gap-1 text-[#4A5565]'>
        <IoTimeOutline />

        <p className='text-sm '>Opening Hour 9.00 am to 10.00 pm</p>

        </div>
    </div>
  )
}

export default Header