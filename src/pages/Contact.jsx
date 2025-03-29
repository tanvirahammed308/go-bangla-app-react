import React from "react";
import contact from "../assets/img/contact.jpg";

const Contact = () => {
  return (
    <div className="container mx-auto my-5 px-2 ">
      <div
        className="hero "
        style={{
          backgroundImage: `url(${contact})`,
        }}
      >
        <div className="hero-overlay bg-gray-500/40 "></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-3xl md:text-4xl font-bold ">
              Get in Touch with <span className="text-black">Travel</span>
                <span className="text-[#2B7FFF]"> Desh</span>
            </h1>
            <p className="mb-5 font-bold">
              We'd love to hear from you. Whether you have questions or need
              help planning your next domestic adventure, feel free to reach
              out.
            </p>
          </div>
        </div>
      </div>

      <div className="my-10">
        <div className="flex  justify-center">
          <h1 className="font-bold text-center text-2xl border-b-4 w-48 border-[#2B7FFF] capitalize">
            Contact with us
          </h1>
        </div>

        <div className="  p-4 ">
          <div className="font-bold text-xl flex justify-between my-3 text-gray-500">
            <h2>Stay in touch</h2>
           
          </div>
          <div className="block md:flex justify-between gap-5">
            <div className="shadow p-4 rounded">
              <h1 className="font-bold text-2xl">Head Office (Dhaka)</h1>
              <p>
                Travel Desh Travels House # 123, Road # 5, Block B, Banani, Dhaka
                1213, Bangladesh
              </p>
            </div>
            <div className="shadow p-4 rounded">
              <h1 className="font-bold text-2xl">Chittagong Office</h1>
              <p>
                Travel Desh Level 4, City Center, Sadarghat Road, Chittagong 4000,
                Bangladesh
              </p>
            </div>
            <div className="shadow p-4 rounded">
              <h1 className="font-bold text-2xl">Rajshahi Office</h1>
              <p>Travel Desh Old Bus Stand Road, Rajshahi 6000, Bangladesh</p>
            </div>
            <div className="shadow p-4 rounded">
              <h1 className="font-bold text-2xl">Sylhet Office</h1>
              <p>
                Travel Desh Main Road, Jame Masjid Market, Sylhet 3100, Bangladesh
              </p>
            </div>
          </div>
        </div>

        <div className="hero bg-base-200 ">
          <div className="hero-content flex flex-col">
            <h1 className="font-bold text-center text-2xl border-b-4 w-full md:w-[350px] border-[#2B7FFF] capitalize ">
              Leave us a message
            </h1>

            <div className="card bg-base-100   shadow-2xl">
              <div className="card-body w-full md:w-[800px]">
                <fieldset className="fieldset ">
                  <div className="flex justify-between">
                    <div className=" w-full space-y-2">
                      <label className="fieldset-label">First Name</label>
                      <input type="text" className="input" placeholder="Name" />
                      <label className="fieldset-label">Email</label>
                      <input
                        type="email"
                        className="input"
                        placeholder="Email"
                      />
                    </div>
                    <div className="w-full space-y-2">
                      <label className="fieldset-label">Last Name</label>
                      <input type="text" className="input" placeholder="Name" />

                      <label className="fieldset-label">Phone Number</label>
                      <input
                        type="text"
                        className="input"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <textarea
                    className="textarea w-full my-5"
                    placeholder="Bio"
                  ></textarea>

                  <button className="btn border-2 border-[#2B7FFF] mt-4 w-40 mx-auto">
                    Send
                  </button>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
