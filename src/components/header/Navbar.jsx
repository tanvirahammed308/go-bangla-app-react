import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-bold"
              >
                
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/destinations">Destinations</Link>
                </li>
                <li>
                <details>
                  <summary className="font-bold hover:border-b-2 border-[#2B7FFF]">
                    Tour Category
                  </summary>
                  <ul className="p-2  z-30 w-[180px] px-2">
                    <li>
                      <Link
                        to="/tourcategory/AdventureTour"
                        className="font-bold hover:border-b-2 border-[#2B7FFF]"
                      >
                        Adventure Tour
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/tourcategory/BeachTour"
                        className="font-bold hover:border-b-2 border-[#2B7FFF]"
                      >
                        Beach Tour
                      </Link>
                    </li>
                    <li>
                      <Link
                          to="/tourcategory/NatureTour"
                        className="font-bold hover:border-b-2 border-[#2B7FFF]"
                      >
                        Nature Tour
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/tourcategory/HillTour"
                        className="font-bold hover:border-b-2 border-[#2B7FFF]"
                      >
                        Hill Tour
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/tourcategory/HeritageTour"
                        className="font-bold hover:border-b-2 border-[#2B7FFF]"
                      >
                        Heritage Tour
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <Link to="/blog">
                <summary className="font-bold hover:border-b-2 border-[#2B7FFF]">
                  Blog
                </summary>
                
                </Link>
                
              </li>
              <li>
                <Link to='/contact'>
                <summary className="font-bold hover:border-b-2 border-[#2B7FFF]">
                  Contact
                </summary>
                
                </Link>
                
              </li>
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost text-2xl font-semibold  font-sans">
              <span className="font-semibold"> Travel</span>{" "}
              <span className="font-bold text-blue-500">Desh</span>{" "}
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            {/* desktop screen */}
            <ul className="menu menu-horizontal px-1 text-base">
              <li>
                <Link
                  to="/"
                  className="font-bold hover:border-b-2 border-[#2B7FFF]"
                >
                  Home
                </Link>
              </li>

              <li>
                <summary className="font-bold hover:border-b-2 border-[#2B7FFF]">
                  <Link to="/destinations">Destinations</Link>
                </summary>
              </li>
              <li>
                <details>
                  <summary className="font-bold hover:border-b-2 border-[#2B7FFF]">
                    Tour Category
                  </summary>
                  <ul className="p-2 bg-gray-200 z-30 w-[180px] px-2">
                    <li>
                      <Link
                        to="/tourcategory/AdventureTour"
                        className="font-bold hover:border-b-2 border-[#2B7FFF]"
                      >
                        Adventure Tour
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/tourcategory/BeachTour"
                        className="font-bold hover:border-b-2 border-[#2B7FFF]"
                      >
                        Beach Tour
                      </Link>
                    </li>
                    <li>
                      <Link
                          to="/tourcategory/NatureTour"
                        className="font-bold hover:border-b-2 border-[#2B7FFF]"
                      >
                        Nature Tour
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/tourcategory/HillTour"
                        className="font-bold hover:border-b-2 border-[#2B7FFF]"
                      >
                        Hill Tour
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/tourcategory/HeritageTour"
                        className="font-bold hover:border-b-2 border-[#2B7FFF]"
                      >
                        Heritage Tour
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <Link to="/blog">
                <summary className="font-bold hover:border-b-2 border-[#2B7FFF]">
                  Blog
                </summary>
                
                </Link>
                
              </li>
              <li>
                <Link to='/contact'>
                <summary className="font-bold hover:border-b-2 border-[#2B7FFF]">
                  Contact
                </summary>
                
                </Link>
                
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link to="/login">
            <a className="btn btn-soft text-[#2B7FFF]">Login</a>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
