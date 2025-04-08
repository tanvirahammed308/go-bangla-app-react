
import React from 'react'
import { BsSend } from "react-icons/bs";
import { Link } from 'react-router-dom';


const ProductCard = ({item}) => {
  return (
    <div>
        <div className='w-full md:max-w-[500px]  bg-white shadow-2xl rounded-lg overflow-hidden text-gray-600   py-2'>
            <div className=' rounded-md  px-2'>
            <img src={item.image_url} alt="" className='rounded-md h-36 w-full' />
            </div>
            <div className='card-body   h-[250px]  p-3' >
                <h1 className='font-bold text-xl '>{item.name}</h1>
                <div className='flex justify-between '>
                    <h3 className='border border-[#5C98F2] px-2  rounded-md'>{item.type}</h3>
                    <h3 className='border border-[#5C98F2] px-2 rounded-md'>{item.category}</h3>
                </div>
                <p className=''>{item.description}</p>
                <div className='flex justify-between items-center '>
                    <h2 className='flex flex-col'> <span className=' font-bold text-xl'>{item.price}</span></h2>
                    <Link to={`/destinations/${item.id}`}>
                    <button className='flex btn hover:text-white hover:bg-[#5C98F2]' >
                    <BsSend />
 
                        Views Details</button>
                    </Link>
                    
                </div>

            </div>

        </div>
    </div>
  )
}

export default ProductCard