import React from 'react'

import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";





const PopularPlace = ({data}) => {

  const filterPopularCat=data.filter((item)=>item.category =="Popular Places")
  console.log(filterPopularCat);


  return (
    <div className='mt-20 '>
      <div className="w-[350px] md:w-[1000px] flex flex-col justify-center items-center mx-auto ">
        <h1 className="text-3xl md:text-5xl">
        Popular  <span className="text-[#5C98F2]"> Places</span>
        </h1>
       
      </div>
      <div className='grid md:grid-cols-3 gap-5 my-8 justify-center '>
        {
          filterPopularCat.map((item,index)=><Link to={`/${item.id}`}>
            

            <div
                     key={index}
                     className="relative group w-80 md:w-96 h-64 shadow-lg rounded-lg overflow-hidden "
                   >
                     {/* Background Image */}
                     <div
                       className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110  mx-autow-full"
                       style={{
                         backgroundImage: `url(${item.image_url})`,
                       }}
                     ></div>
                   
                     {/* Dark Overlay (Becomes Visible on Hover) */}
                     <div className="absolute inset-0 bg-gray-400 opacity-0 group-hover:bg-opacity-100 transition-all duration-300"></div>

                     {/* Static Content without hover */}
                                 <div className="md:hidden absolute bottom-5 left-2 text-white group-hover:opacity-0 transition-opacity duration-300  flex flex-col w-full justify-center items-center">
                                   <h2 className="text-xl font-bold">{item.name}</h2>
                                   <Link to={`/destinations/${item.id}`} className="text-sm underline text-[#5C98F2]">
                                     View Details
                                   </Link>
                                 </div>
            
                   
                     {/* Hover Content */}
                     <div className="absolute inset-0 hidden md:flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 space-y-5">
                     <div className='flex justify-between gap-10'>
                     <h2 className="text-xl font-bold">{item.name}</h2>
                     <h3 className="text-xl font-bold">{item.category}</h3>
                     </div>
                     <div className='flex flex-col items-center text-[#FFFFFF] space-y-3'>
                      <div className='flex items-center justify-between gap-5  w-full'>
                      <p>{item.duration}</p>
                      <div className='flex text-yellow-500'>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />


                      </div>


                      </div>
                      <p>{item.price}</p>
                     </div>
                      
                       <Link to={`/destinations/${item.id}`} className="text-sm underline text-[#5C98F2]">
                         View Details
                       </Link>
                     </div>
                   </div>



          </Link>)
        }
      </div>
      <div className='flex justify-center'>
        <Link to="/destinations">
        <button className="btn  border-2 border-b-[#5C98F2] text-[#5C98F2]">See All
      <FaArrowRight />

      </button>
        </Link>
      

      </div>
    </div>
  )
}

export default PopularPlace