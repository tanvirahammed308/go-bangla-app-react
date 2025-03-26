import React from "react";
import { Link } from "react-router-dom";




const Navbar = () => {
  
  return (
    <div className="w-[90%] mx-auto">
      <div className="font-sans">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                <details>
                  <summary>Pages</summary>
                  <ul className="p-2">
                    <li>
                      <a>Destination</a>
                    </li>
                    <li>
                      <a>About Us</a>
                    </li>
                    <li>
                      <a>Services</a>
                    </li>
                    <li>
                      <a>Contact</a>
                    </li>
                    <li>
                      <a>Team</a>
                    </li>
                  </ul>
                </details>
                </li>
                <li>
                      <a>About Us</a>
                    </li>
                    <li>
                      <a>Services</a>
                    </li>
                    <li>
                      <a>Contact</a>
                    </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-2xl font-semibold  font-sans">
          
              <span className="font-semibold"> Travel</span>{" "}
              <span className="font-bold text-blue-500">Desh</span>{" "}
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-base">
              <li>
                
                 <Link to="/" className="font-bold hover:border-b-2 border-[#2B7FFF]">Home</Link>
                  
                
              </li>
              <li>
                <details>
                  <summary className="font-bold hover:border-b-2 border-[#2B7FFF]">Pages</summary>
                  <ul className="p-2 bg-gray-200 z-30 ">
                    <li>
                      <Link to="/destinations" className="font-bold hover:border-b-2 border-[#2B7FFF]">Destination</Link>
                    </li>
                    <li>
                      <a>About Us</a>
                    </li>
                    <li>
                      <a>Services</a>
                    </li>
                    <li>
                      <a>Contact</a>
                    </li>
                    <li>
                      <a>Team</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
              
                  <summary className="font-bold hover:border-b-2 border-[#2B7FFF]">Tour list</summary>
               
              </li>
              <li>
                
                  <summary className="font-bold hover:border-b-2 border-[#2B7FFF]">Room List</summary>
                  
              </li>
              <li>
                
                  <summary className="font-bold hover:border-b-2 border-[#2B7FFF]">About Us</summary>
                  
              </li>
              <li>
                
                  <summary className="font-bold hover:border-b-2 border-[#2B7FFF]">Blog</summary>
                
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn btn-soft text-[#2B7FFF]">Login</a>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Navbar;
