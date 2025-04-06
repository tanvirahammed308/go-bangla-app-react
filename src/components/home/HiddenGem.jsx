import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

import { IoIosArrowRoundForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard'

const HiddenGem = ({data}) => {

    const hiddenGen=data.filter((item)=>item.category =="Hidden Gems")
  return (
    
     <div className='mt-20'>
        <div className="w-full md:w-[1000px] flex flex-col justify-center items-center mx-auto ">
          <Link to="/destinations" className='flex items-center  text-3xl md:text-4xl'>
              <h1 className="text-3xl md:text-5xl">
                Hidden  <span className="text-[#5C98F2]"> Gem</span>
                </h1>
                
                <IoIosArrowRoundForward className='mt-2'/>
          
          
                      </Link>
         
        </div>
        <div className='grid md:grid-cols-4 gap-5 my-8 justify-center'>
          {
            hiddenGen.map((item,index)=><Link to={`/${item.id}`}>
              
    <ProductCard key={index} item={item}></ProductCard>
    
    
    
            </Link>)
          }
        </div>
        
      </div>
  )
}

export default HiddenGem