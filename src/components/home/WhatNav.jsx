import React from 'react'
import { FaFly } from "react-icons/fa";
import { FaPassport } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";





const WhatNav = () => {
  return (
    <div className='my-20'>
     
        <h1 className="text-3xl md:text-5xl text-center">
        What Travel Desh  <span className="text-[#5C98F2]">Brings to the Table</span>
          </h1>
          {/* card */}
          <div className='parent-card mt-5 block md:flex gap-5 px-5'>
            <div className='w-full px-2   md:w-[300px] 2xl:w-[350px]  py-5  shadow-2xl  flex flex-col justify-center items-center  '>
                <div className='  bg-[#8cb0e7] p-2 w-[80px] flex justify-center rounded'>
            <FaFly className='text-3xl '/>

                </div>
                <h2 className='mt-2 font-bold'>Amazing Flight Deals</h2>
                <p className='text-sm mt-2'>The beginning of your trip marks the beginning of your happiness! We help you get affordable flight deals for the trip at the tip of your finger. Easy booking with special surprise deals to your destination.</p>

            </div>
            
            <div className='w-full px-2   md:w-[300px] 2xl:w-[350px]  py-5  shadow-2xl  flex flex-col justify-center items-center  '>
                <div className='  bg-[#8cb0e7] p-2 w-[80px] flex justify-center rounded'>
            <FaPassport  className='text-3xl '/>

                </div>
                <h2 className='mt-2 font-bold'>Smooth Visa Processing
                </h2>
                <p className='text-sm mt-2'>No more delays and cancellations over complicated visa processing. Navigator makes your visa processing super smooth with proper documentation. Book your tickets and fly on time!</p>

            </div>
            
            <div className='w-full px-2   md:w-[300px] 2xl:w-[350px]  py-5  shadow-2xl  flex flex-col justify-center items-center  '>
                <div className='  bg-[#8cb0e7] p-2 w-[80px] flex justify-center rounded'>
            <FaUsers  className='text-3xl '/>

                </div>
                <h2 className='mt-2 font-bold'>Exciting Tour Package
                </h2>
                <p className='text-sm mt-2'>No need to worry about your tour plan costing a whooping fortune! We sort your tour plan that includes all the fun spots within budget! Navigator is your go-to quality commercial travel operator!

</p>

            </div>
            
            <div className='w-full px-2   md:w-[300px] 2xl:w-[350px]  py-5  shadow-2xl  flex flex-col justify-center items-center  '>
                <div className='  bg-[#8cb0e7] p-2 w-[80px] flex justify-center rounded'>
            <FaHotel  className='text-3xl '/>

                </div>
                <h2 className='mt-2 font-bold'>Hassle-free Hotel Booking
                </h2>
                <p className='text-sm mt-2'>Boosing your preferred hotel for the stay is a click away with Navigator! Our packages include complimentary breakfasts and transportation to the Airport. So you get to live precious moments with your close ones!

</p>

            </div>
            
            
            

          </div>
    </div>
  )
}

export default WhatNav