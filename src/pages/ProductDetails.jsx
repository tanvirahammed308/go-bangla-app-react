import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [popular, setPopular] = useState(null);

  useEffect(() => {
    fetch("/date.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.find((item) => item.id === Number(id));
        setPopular(popularItem);
      });
  }, [id]);
  if (!popular) return <div className="flex justify-center items-center">
<span className="loading loading-ring loading-xl  py-16">
    please wait..
  </span>
  </div> 

  return <div className=" container  mx-auto my-10">
    <div className="hero bg-base-200  ">
  <div className="hero-content flex-col lg:flex-row gap-10">
    <div className="w-full md:w-1/2">

    <img
      src={popular.image_url}
      className=" rounded-lg shadow-2xl" />
    </div>
    <div className="w-full md:w-1/2 ">
      
      <h1 className="text-3xl md:text-5xl font-bold">{popular.name}</h1>
      <div className="flex  gap-10 my-5 font-semibold">
        <p>{popular.type}</p>
        <p>{popular.location}</p>
        <p>{popular.category}</p>
      </div>
      <div className="my-3 space-y-2">

      <p className="">
        {
            popular.description
        }
      </p>
      <p>
        <h1>Don't miss this place</h1>
        {
            popular.attractions.map((item)=><li>
                {item}
            </li>)
        }
      </p>
      <p>Best Time To visit : <span className="text-red-500"> {popular.best_time_to_visit}</span>  </p>
      </div>
      <button className="btn btn-outline border-green-500 text-gray-800">Add To Cart</button>
    </div>
  </div>
</div>
  </div>;
};

export default ProductDetails;
