import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllCategory = ({ data }) => {
  const [cat, setCat] = useState("All");
  const filterLocation = new Set(data.map((item) => item.location));
  const filterCat = ["All", ...filterLocation];
  

  const selectedCat =
    cat == "All" ? data : data.filter((item) => item.location == cat);

  return (
    <div>
      <div>
        <div className="flex items-center  gap-2 px-5 md:px-0">
          <h1 className="capitalize font-bold text-xl my-5 text-green-500   ">
            our category
          </h1>
          <FaArrowRight className="text-xl" />
        </div>
        <div className="flex flex-wrap gap-5 my-5 mx-10 md:mx-0">
          {filterCat.map((item) => (
            <button className="btn btn-outline border border-green-500 btn-sm" onClick={()=>setCat(item)}>
              {item}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-4 gap-3 my-10 justify-center">{
          selectedCat.map((item)=> <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col h-[450px]">
          <a href="#">
            <img className="rounded-t-lg h-60 w-full object-cover" src={item.image_url} alt="" />
          </a>
          <div className="p-3 flex flex-col">
            <div className="flex justify-between">
              <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                {item.name}
              </h5>
              <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                {item.type}
              </h5>
            </div>
            <div className="flex-grow h-28">
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
            </div>
            <div className="f py-2">

            <Link to={`/${item.id}`}>
            <button className="btn btn-outline border border-green-500 btn-sm" >
              View Details
            </button>
            
            </Link>
            </div>

          </div>
        </div>)
          }</div>
      </div>
    </div>
  );
};

export default AllCategory;
