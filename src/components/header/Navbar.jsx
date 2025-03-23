import React from "react";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";


const Navbar = () => {
  
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm w-full px-8 md:px-10 md:container  md:mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-24 " />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="font-bold">
              <Link to="/">Home</Link>
            </li>
            <li className="">
              <details >
                <summary className="font-bold">Destinations</summary>
                <ul className=" z-30  w-40  -translate-x-6">
                  <li>
                    <Link>Popular Places</Link>
                  </li>
                  <li>
                    <Link>Top Attractions</Link>
                  </li>
                  <li>
                    <Link>Hidden Gems</Link>
                  </li>
                </ul>
                
              </details>
            </li>
            <li>
              <details>
                <summary className="font-bold ">Tours & Packages</summary>
                <ul className="px-2 z-30  w-40">
                  <li>
                    <Link>Cultural Tours</Link>
                  </li>
                  <li>
                    <Link>Family Packages</Link>
                  </li>
                  <li>
                    <Link>Adventure Tours</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="font-bold">
             <Link to="/blog">Blog</Link>
             
            </li>
            <li className="font-bold">
            <Link to="/contact">Contact</Link>
             
            </li>
            <li className="font-bold">
            <Link to="/contact">Login</Link>
             
            </li>
          </ul>
        </div>
        <div className="navbar-end">
         <Link className="font-bold ">
         <div className="indicator">
  <span className="indicator-item badge bg-green-500 text-white">12</span>
  <button className="btn">
  <IoCartOutline />

  </button>
</div></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
