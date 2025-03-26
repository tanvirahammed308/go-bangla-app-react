
import React, { useEffect, useState } from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Destinations = () => {
    const [data,setData]=useState([])
    const [visibleCard,setVisibleCard]=useState(5)
    useEffect(()=>{
        fetch('/date.json')
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })
    },[])

    const handleSeeMore=()=>{
        setVisibleCard(data.length)
    }
  return (
    <div className="my-20">
      
      
      <div className="my-3 grid md:grid-cols-3 justify-center items-center gap-10 mx-0 md:mx-6">
        {data.slice(0,visibleCard).map((item, index) => (
         <div
         key={index}
         className="relative group w-96 h-64 shadow-lg rounded-lg overflow-hidden"
       >
         {/* Background Image */}
         <div
           className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
           style={{
             backgroundImage: `url(${item.image_url})`,
           }}
         ></div>
       
         {/* Dark Overlay (Becomes Visible on Hover) */}
         <div className="absolute inset-0 bg-gray-400 opacity-0 group-hover:bg-opacity-100 transition-all duration-300"></div>

       
         {/* Hover Content */}
         <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 space-y-5">
           <h2 className="text-xl font-bold">{item.name}</h2>
           <p className="text-center text-sm px-5">{item.description}</p>
           <Link  className="text-sm underline text-[#5C98F2]">
             View details
           </Link>
         </div>
       </div>
       
        
        ))}
      </div>
      <div>
    {visibleCard < data.length && (
        <div className="flex justify-center">
            <button onClick={handleSeeMore}>
                <div className="flex items-center justify-center gap-2 border-b-2 hover:border-[#5C98F2] border-[#848484] w-[180px] my-10">
                    <h2 className="text-[#343434] text-xl">See More</h2>
                    <MdOutlineArrowRightAlt className="text-xl mt-0.5 text-[#848484]" />
                </div>
            </button>
        </div>
    )}
</div>

      
    </div>
  )
}

export default Destinations