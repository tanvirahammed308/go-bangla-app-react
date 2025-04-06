
import React from 'react'
import { BsSend } from "react-icons/bs";
import { Link } from 'react-router-dom';


const ProductCard = ({item}) => {
  return (
    <div>
        <div className='w-[300px] bg-white shadow-lg rounded-lg overflow-hidden text-gray-600 border  py-5'style={{borderRadius:"50px 0px 50px 0"}}>
            <div className=' rounded-md  px-3'>
            <img src={item.image_url} alt="" className='rounded-md h-40 w-full' style={{borderRadius:"50px 0px 50px 0"}}/>
            </div>
            <div className='card-body flex flex-col  h-[270px] space-y-2' >
                <h1 className='font-bold text-xl '>{item.name}</h1>
                <div className='flex justify-between '>
                    <h3 className='border border-[#5C98F2] px-2  rounded-md'>{item.type}</h3>
                    <h3 className='border border-[#5C98F2] px-2 rounded-md'>{item.category}</h3>
                </div>
                <p className='flex-1'>{item.description}</p>
                <div className='flex justify-between items-center'>
                    <h2 className='flex flex-col'>price <span className=' font-bold text-xl'>{item.price}</span></h2>
                    <Link to={`/destinations/${item.id}`}>
                    <button className='flex btn' >
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