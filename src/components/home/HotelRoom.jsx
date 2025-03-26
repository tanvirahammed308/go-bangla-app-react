import React, { useEffect, useState } from 'react'
import { FaFireAlt } from 'react-icons/fa'
import { FaTv, FaWifi } from 'react-icons/fa6'
import { FcRating } from 'react-icons/fc'
import { IoIosHome } from 'react-icons/io'
import { RiHotelBedFill } from 'react-icons/ri'
import { VscAdd } from 'react-icons/vsc'

const HotelRoom = () => {
    const [hotel, setHotel] = useState([])

    useEffect (()=>{
        fetch('hotel.json')
        .then(res => res.json())
        .then(data => setHotel(data))
    },[])

  return (
    <div className="">
        <div className="w-full md:w-[1000px] flex flex-col justify-center items-center mx-auto ">
          <h1 className="text-3xl md:text-5xl">
          Hotel  <span className="text-[#5C98F2]"> Rooms</span>
          </h1>
         
        </div>
        <div className="grid md:grid-cols-4 gap-10 justify-center mt-10 ">
          {hotel.map((hotel) => (
             <div className="w-96 md:w-80 rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            
             <div className="relative pt-[66.666%] overflow-hidden"> 
               <img 
                 src={hotel.image} 
                 alt={"Property image"} 
                 className="absolute top-0 left-0 w-full h-full object-cover"
               />
             </div>
       
             <div className="p-4">
               <div className="flex justify-between items-start gap-2">
                 <div className="flex-1">
                   <h3 className="text-lg font-semibold text-gray-800">
                     {hotel.name}
                   </h3>
                   <p className="text-sm text-gray-600 mt-1 line-clamp-3 ">
                     {hotel.description}
                   </p>
                 </div>
                 {hotel.rating && (
                   <div className="flex items-center gap-2 text-red-400 px-2 py-1 rounded text-sm font-medium whitespace-nowrap">
                     <FcRating />
                     {hotel.rating}
                   </div>
                 )}
               </div>

               <div className="flex gap-2 text-2xl pt-3 ">
               <RiHotelBedFill className="border-2 rounded-full "/>
               <FaWifi  className="border-2 rounded-full "/>
               <IoIosHome  className="border-2 rounded-full "/>
               <FaTv  className="border-2 rounded-full "/>
               <FaFireAlt  className="border-2 rounded-full "/>
               <VscAdd  className="border-2 rounded-full "/>


               </div>
               
       
               <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-200 active:bg-blue-800  ">
                 RESERVE
               </button>
             </div>
           </div>
          ))}
        </div>
      </div>
  )
}

export default HotelRoom









