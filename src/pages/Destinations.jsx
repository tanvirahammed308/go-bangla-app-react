import React, { useEffect, useState } from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import BackToTopButton from "../components/home/BackToTopButton";

const Destinations = () => {
  const [data, setData] = useState([]);
  const [visibleCard, setVisibleCard] = useState(8);
  useEffect(() => {
    fetch("/date.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleSeeMore = () => {
    setVisibleCard(data.length);
  };

  const [cat, setCat] = useState("All");
  const filterLocation = new Set(data.map((item) => item.location));
  const filterCat = ["All", ...filterLocation];

  const selectedCat =
    cat == "All" ? data : data.filter((item) => item.location == cat);

  return (
    <div className="mt-10">
      <div className="mx-2 relative ">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-36 w-full rounded opacity-60 bg-black/65"
        />
        <div className="absolute top-10 md:top-15 md:left-[5px]  flex flex-col justify-center items-center w-full ">
          <h1 className="text-center text-sm md:text-2xl  ">
            "From the hills to the beaches—experience the true essence of
            Bangladesh!"
          </h1>
          <p className="text-center">Choose your favorite destinations</p>
        </div>

        
      </div>
      {/* new */}
      
      <div className="flex flex-col  md:flex-row justify-between    mt-4 ">
        {/* button  */}
      <div className="w-full md:w-1/6 md:h-[500px] shadow-lg md:border border-gray rounded-md px-2 py-3 mt-5">
        <h1 className="capitalize font-bold text-center">category</h1>
        <div  className=" flex justify-center  flex-wrap  md:flex-col  gap-5  mt-2 ">
          {filterCat.map((item) => (
            <button
              className="btn btn-outline border-2 border-[#2B7FFF] btn-sm "
              onClick={() => setCat(item)}
            >
              {item}
            </button>
          ))}

        </div>
        </div>
        {/* card */}
        <div className="my-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  px-2 gap-2  w-full md:w-5/6 ">
  {selectedCat.slice(0, visibleCard).map((item, index) => (
    <ProductCard key={index} item={item} />
  ))}
</div>

      </div>
      <div>
        
        <div>
          {visibleCard < data.length && (
            <div className="flex justify-center">
              <button onClick={handleSeeMore}>
                <div className="flex items-center justify-center gap-2 border-b-2 hover:border-[#5C98F2] border-[#848484] w-[180px] my-10">
                  <h2 className="text-[#343434] hover:text-[#51A2FF] text-xl">
                    See More
                  </h2>
                  <MdOutlineArrowRightAlt className="text-xl mt-0.5 text-[#848484]hover:text-[#51A2FF]" />
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
      <BackToTopButton/>
    </div>
  );
};

export default Destinations;
