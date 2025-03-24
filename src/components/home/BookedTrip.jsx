import React from "react";
import { LuPlaneTakeoff } from "react-icons/lu";
import { LuPlaneLanding } from "react-icons/lu";
import { TbArrowBarBoth } from "react-icons/tb";
import { MdDateRange } from "react-icons/md";

const BookedTrip = () => {
  return (
    <div className="my-10 ">
      <div>
        <h1 className="capitalize font-semibold text-2xl text-green-500 text-center">
          book your trip now
        </h1>
        <div className="my-5 flex justify-center bg-white py-5 shadow rounded">
          <div className="relative ">
            <div className="block md:flex gap-5 justify-center space-y-4 md:space-y-0">
              <div className="bg-[#F5EEFD] items-center flex flex-col justify-center w-[350px] p-5 rounded">
                <div className="flex justify-evenly items-center w-full">
                  <h1 className="font-bold capitalize py-2">from</h1>
                  <LuPlaneTakeoff className="text-2xl" />
                </div>
                <input
                  type="text"
                  placeholder="Dhaka"
                  className="input input-ghost"
                />
              </div>
              <div className="bg-[#F5EEFD] items-center flex flex-col justify-center w-[350px] p-5 rounded">
                <div className="flex justify-evenly items-center w-full">
                  <h1 className="font-bold capitalize py-2">to</h1>

                  <LuPlaneLanding className="text-2xl" />
                </div>
                <input
                  type="text"
                  placeholder="Cox's bazar"
                  className="input input-ghost"
                />
              </div>
              <div className="bg-[#F5EEFD] items-center flex flex-col justify-center w-[350px] p-5 rounded">
                <div className="flex justify-evenly items-center w-full">
                  <h1 className="font-bold capitalize py-2">Journey date</h1>

                  <MdDateRange className="text-2xl" />
                </div>
                <input
                  type="date"
                  placeholder="12/12/25"
                  className="input input-ghost"
                />
              </div>
            </div>

            {/* <div className="hidden border-3 border-white bg-[#F5EEFD] rounded-full w-14 md:flex items-center justify-center absolute top-5 left-[430px]">
              <TbArrowBarBoth className="text-3xl text-green-500" />
            </div> */}
            <div className="my-3 flex justify-center">
              <button class="btn btn-outline bg-[#F5EEFD] border-green-500">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedTrip;
