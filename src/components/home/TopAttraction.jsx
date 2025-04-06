import React from 'react'

import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard';
import { IoIosArrowRoundForward } from "react-icons/io";




const TopAttraction = ({data}) => {
  const filterPopularCat=data.filter((item)=>item.category =="Popular Places")
  console.log(filterPopularCat);

  return (
    <div className='mt-20'>
    <div className="w-full md:w-[1000px] flex flex-col justify-center items-center mx-auto ">
    <Link to="/destinations" className='flex items-center  text-3xl md:text-4xl'>
    <h1 className="text-3xl md:text-5xl">
      Top  <span className="text-[#5C98F2]"> Attraction</span>
      </h1>
      
      <IoIosArrowRoundForward className='mt-2'/>


            </Link>
      
     
    </div>
    <div className='grid md:grid-cols-3 gap-5 my-8 justify-center'>
      {
        filterPopularCat.map((item,index)=><Link to={`/${item.id}`}>
          

         <ProductCard key={index} item={item}></ProductCard>

        </Link>)
      }
    </div>
    
  </div>
  )
}

export default TopAttraction