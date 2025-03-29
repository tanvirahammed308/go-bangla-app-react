import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AllDestinations = ({ data }) => {
  return (
    <div className="mt-40 md:mt-[400px] ">
      <div className="w-full md:w-[1000px] flex flex-col justify-center items-center mx-auto px-5">
        <h1 className="text-3xl md:text-5xl">
          Top <span className="text-[#5C98F2]"> Destinations</span>
        </h1>
        <p className="text-[#848484] mt-8 text-xl md:text-2xl dm-sans text-center">
          Explore our top destinations voted by more than 100,000+ customers around the world.
        </p>
      </div>
      
      <div className="mt-8 grid md:grid-cols-3 justify-center items-center gap-10 mx-0 md:mx-6">
        {data.slice(0, 6).map((item, index) => (
          <div
            key={index}
            className="relative group w-80 md:w-96 h-64 shadow-lg rounded-lg overflow-hidden "
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center w-[350px] md:w-full mx-auto"
              style={{
                backgroundImage: `url(${item.image_url})`,
              }}
            ></div>
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
            
            {/* Static Content without hover */}
                                           <div className="md:hidden absolute bottom-5 left-2 text-white group-hover:opacity-0 transition-opacity duration-300  flex flex-col w-full justify-center items-center">
                                             <h2 className="text-xl font-bold">{item.name}</h2>
                                             <Link to={`/destinations/${item.id}`} className="text-sm underline text-[#5C98F2]">
                                               View Details
                                             </Link>
                                           </div>
            
            {/* Hover Content */}
            <div className="absolute inset-0 md:flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 space-y-5 hidden">
              <h2 className="text-xl font-bold">{item.name}</h2>
              <h3 className="text-xl font-bold">{item.category}</h3>
              <Link to={`/destinations/${item.id}`} className="text-sm underline text-[#5C98F2]">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className='flex justify-center mt-8'>
        <Link to="/destinations">
          <button className="btn border-2 border-b-[#5C98F2] text-[#5C98F2] flex items-center gap-2 px-4 py-2 rounded">
            See All <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllDestinations;