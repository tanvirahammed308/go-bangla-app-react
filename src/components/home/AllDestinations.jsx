import React from "react";

import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";
import { IoIosArrowRoundForward } from "react-icons/io";

const AllDestinations = ({ data }) => {
  return (
    <div className="mt-40 md:mt-[200px] ">
      <div className="w-full md:w-[1000px] flex flex-col justify-center items-center mx-auto px-5">
        <Link to="/destinations" className="flex items-center  text-3xl md:text-4xl ">
        <h1 className="text-3xl md:text-5xl">
          Top <span className="text-[#5C98F2]"> Destinations</span>
        </h1>
         <IoIosArrowRoundForward className='mt-2'/>
        </Link>
        <p className="text-[#848484] mt-8 text-xl md:text-2xl dm-sans text-center">
          Explore our top destinations voted by more than 100,000+ customers around the world.
        </p>
      </div>
      
      <div className="mt-8 grid md:grid-cols-4 justify-center items-center gap-10 mx-0 md:mx-6">
        {data.slice(0, 6).map((item, index) => (
         <ProductCard key={index} item={item} />
        ))}
      </div>
      
      
    </div>
  );
};

export default AllDestinations;