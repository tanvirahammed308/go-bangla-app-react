import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const PopularPlace = ({data}) => {

  const filterPopularCat=data.filter((item)=>item.category =="Popular Places")
  console.log(filterPopularCat);


  return (
    <div>
      <div className='flex items-center gap-5'>
        <h2 className='capitalize font-bold text-xl my-5 text-green-500   ' >Popular Tours
        

        </h2>
        <FaArrowRight />

      </div>
      <div className='grid md:grid-cols-4 gap-5 my-10 justify-center'>
        {
          filterPopularCat.map((item)=><Link to={`/${item.id}`}>
            

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
  <a href="#">
    <img className="rounded-t-lg" src={item.image_url} alt />
  </a>
  <div className="p-5  ">
    <div className='flex justify-between'>
    
      <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
   
      <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">{item.type}</h5>
   

    </div>
    <div className='h-32'>

    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">{item.description}</p>
    </div>
    
  </div>
</div>


          </Link>)
        }
      </div>
    </div>
  )
}

export default PopularPlace