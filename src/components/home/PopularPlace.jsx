import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const PopularPlace = ({data}) => {

  const filterPopularCat=data.filter((item)=>item.category =="Popular Places")
  console.log(filterPopularCat);


  return (
    <div className='mt-20'>
      <div className="w-full md:w-[1000px] flex flex-col justify-center items-center mx-auto ">
        <h1 className="text-3xl md:text-5xl">
        Popular  <span className="text-[#5C98F2]"> Places</span>
        </h1>
       
      </div>
      <div className='grid md:grid-cols-3 gap-5 my-8 justify-center'>
        {
          filterPopularCat.map((item,index)=><Link to={`/${item.id}`}>
            

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
                       <h3 className="text-xl font-bold">{item.category}</h3>
                       <Link to="/destinations" className="text-sm underline text-[#5C98F2]">
                         View all
                       </Link>
                     </div>
                   </div>



          </Link>)
        }
      </div>
    </div>
  )
}

export default PopularPlace