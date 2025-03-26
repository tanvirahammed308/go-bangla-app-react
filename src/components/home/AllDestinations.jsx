import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const AllDestinations = ({ data }) => {
  
  
  

  return (
    <div className="mt-40 md:mt-[400px] ">
      <div className="w-full md:w-[1000px] flex flex-col justify-center items-center mx-auto ">
        <h1 className="text-3xl md:text-5xl">
          Top <span className="text-[#5C98F2]"> Destinations</span>
        </h1>
        <p className="text-[#848484] mt-8 text-xl md:text-2xl dm-sans text-center">
          Explore our top destinations voted by more than 100,000+ customers around the world.
        </p>
      </div>
      <div className="flex justify-center ">
        <Link to="/destinations">
        <div className="flex items-center justify-center gap-2 border-b-2 hover:border-[#5C98F2] border-[#848484] w-[180px] my-10">
          <h2 className="text-[#343434] text-xl">All Destinations</h2>
          <MdOutlineArrowRightAlt className="text-xl mt-0.5 text-[#848484]" />
        </div>
        </Link>
        
      </div>
      <div className="mt-3 grid md:grid-cols-3 justify-center items-center gap-10 mx-0 md:mx-6">
        {data.slice(0,5).map((item, index) => (
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
       
        
        ))}
      </div>
      
    </div>
  );
};

export default AllDestinations;
