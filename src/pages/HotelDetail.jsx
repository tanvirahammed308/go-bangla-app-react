import React, { useEffect, useState } from 'react'
import { CiCalendarDate, CiWifiOn } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa6';
import { FiUsers } from 'react-icons/fi';
import { IoTimeOutline } from 'react-icons/io5';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineMailOutline } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import Slider from '../components/DestinationDetails/Slider';
import { CiLocationOn } from "react-icons/ci";


const HotelDetail = () => {
    const { id } = useParams();
      const [data, setData] = useState(null);
      
      useEffect(() => {
        fetch("/hotel.json")
          .then((res) => res.json())
          .then((data) => {
            const filterData = data.find((item) => item.id === Number(id));
            setData(filterData);
          });
      }, [id]);
      if (!data) return <span className="loading loading-ring loading-lg"></span>;
  return (
    <div>
          <div className=" block md:flex gap-10 md:gap-5">
            {/* left side */}
            <div className=" w-full md:w-8/12 py-5 px-5 shadow-2xl">
              <div>
                <h1 className="text-2xl md:text-4xl my-2">{data.name}</h1>
                <div className="flex flex-wrap items-center gap-5 md:gap-10 mt-3">
                  <p>{data.duration}</p>
                  <p className="flex text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                  <p>{data.address}</p>
                 
                  <p>$ {data.price_per_night}</p>
                  <p>{data.contact}</p>
                </div>
                <div></div>
                <div className="mt-8 flex flex-wrap justify-between gap-5">
                  <div className="flex items-center gap-2">
                    <IoTimeOutline className="text-2xl" />
                    <p className="text-gray-500">5 days</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CiLocationOn  className="text-2xl" />
                    <p className="text-gray-500">Location : {data.location}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CiWifiOn className="text-2xl" />
                    <p className="text-gray-500">Wifi Available</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CiCalendarDate className="text-2xl" />
                    <p className="text-gray-500">{data.best_time_to_visit}</p>
                  </div>
                </div>
                <div className="mt-8">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-64 md:h-96 rounded-md"
                  />
                </div>
                <div className="mt-8">
                  <p className="">{data.description}</p>
                  <p className="font-bold text-[#2B7FFF] mt-3">
                    Main Attractions :
                  </p>
                  <p>
                    {data.amenities.map((item) => (
                      <li>{item}</li>
                    ))}
                  </p>
                </div>
              </div>
            </div>
            {/* right side */}
            <div className="shadow-md bg-white w-full md:w-4/12 py-8 px-10">
              <h1 className="text-2xl text-center border-b-2 border-[#2B7FFF]">
                Booking Form
              </h1>
              <div className="flex flex-col justify-center items-center mt-5 space-y-2">
                <input type="text" placeholder="Full Name" className="input" />
                <input type="email" placeholder="Email" className="input" />
                <input type="text" placeholder="Phone Number" className="input" />
                <label className="input">
                  <span className="label">Booking date</span>
                  <input type="date" />
                </label>
                <label className="input">
                  <span className="label">Return date</span>
                  <input type="date" />
                </label>
                <button className="btn btn-outline border-[#2B7FFF] w-full">Book Now</button>
    
              </div>
              <div className="border py-10 mt-10 flex flex-col justify-center items-center space-y-2">
                <h1 className="text-center text-2xl">Need Help ?</h1>
                <div className="flex items-center gap-3">
                <LuPhoneCall />
                <p>01954658472</p>
    
                </div>
                <div className="flex items-center gap-3">
                <MdOutlineMailOutline />
                <p>traveldesh@gmail.com</p>
    
                </div>
    
              </div>
            </div>
          </div>
          {/* <div className=" my-20 px-5 shadow">
            <h2 className="text-2xl my-5">Related Tour</h2>
            <div className=" py-5">
    
            <Slider data={data}/>
            </div>
          </div> */}
        </div>
  )
}

export default HotelDetail