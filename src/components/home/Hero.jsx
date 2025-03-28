import React from "react";

const Hero = () => {
  return (
    <div>
      
          <div className="hero">
            <div className="hero-content flex-col items-start lg:flex-row-reverse">
              {/* Carousel Container */}
              <div className="h-[580px] lg:h-[700px] w-[400px] lg:w-[600px] mx-auto overflow-hidden rounded-lg">
                <div className="carousel carousel-vertical h-full w-full">
                  <div className="carousel-item w-full h-full">
                    <img
                      className="w-full h-full object-cover"
                      src="https://images.pexels.com/photos/7024485/pexels-photo-7024485.jpeg?auto=compress&cs=tinysrgb&w=1200"
                      alt="Image 1"
                    />
                  </div>

                  <div className="carousel-item w-full h-full">
                    <img
                      className="w-full h-full object-cover"
                      src="https://images.pexels.com/photos/906531/pexels-photo-906531.jpeg?auto=compress&cs=tinysrgb&w=1200"
                      alt="Image 2"
                    />
                  </div>

                  <div className="carousel-item w-full h-full">
                    <img
                      className="w-full h-full object-cover"
                      src="https://images.pexels.com/photos/17510046/pexels-photo-17510046/free-photo-of-man-on-boat-with-sail-on-lake.jpeg?auto=compress&cs=tinysrgb&w=1200"
                      alt="Image 3"
                    />
                  </div>

                  <div className="carousel-item w-full h-full">
                    <img
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1606407171179-04f350518a27?w=1200&auto=format&fit=crop&q=60"
                      alt="Image 4"
                    />
                  </div>
                </div>
              </div>

              {/* Hero Text Content */}
              <div className="py-20">
                <h1 className="text-2xl font-sans font-semibold py-3 text-blue-400">
                  Book with us!
                </h1>
                <h1 className="text-6xl lg:text-8xl font-bold font-dmSans">
                  Find Next Place To{" "}
                  <span className="text-blue-400">Visit </span>
                </h1>
                <p className="py-6 text-xl text-[#8C91A1]">
                  Explore Bangladesh's rich culture, scenic landscapes, historic
                  sites, and vibrant cities for an unforgettable journey.
                </p>
                
              </div>
            </div>
          </div>

          <div className="block md:flex  items-center gap-1 justify-between bg-white p-6 rounded-2xl shadow-lg  max-w-4xl -my-16 lg:mx-15 static lg:relative lg:-my-60 font-sans">
 


            {/* Destination Dropdown */}
            <div className="flex flex-col lg:mx-4 -mx-1  w-full">
              <label className="text-gray-600 mb-1">From</label>
              <select className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ">
                <option>Select</option>
                <option>Cox's Bazar</option>
                <option>Shylet</option>
                <option>Sajek</option>
                <option>Chittagong</option>
              </select>
            </div>

{/* 
            Destination Dropdown */}
            <div className="flex flex-col lg:mx-4 -mx-1  w-full">
              <label className="text-gray-600 mb-1">Destination</label>
              <select className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ">
                <option>Select</option>
                <option>Cox's Bazar</option>
                <option>Shylet</option>
                <option>Sajek</option>
                <option>Chittagong</option>
              </select>
            </div>

            {/* Duration Dropdown */}
            <div className="flex flex-col lg:mx-4 -mx-1 w-full">
              <label className="text-gray-600 mb-1">Duration</label>
              <select className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>Select</option>
                <option>2-4 Days Tour</option>
                <option>5-7 Days Tour</option>
                <option>8+ Days Tour</option>
              </select>
            </div>

            {/* Search Button */}
           <div className="mt-5">
           <button className="bg-blue-500  hover:bg-blue-600  text-white lg:px-10 lg:py-3 px-4 py-2 mx-2 rounded-md flex items-center">
              <span className="hidden lg:block">🔍 </span> Search 
            </button>
           </div>
          </div>
        </div>
      
  );
};

export default Hero;