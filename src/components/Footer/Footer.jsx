import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" mt-10">
      
        <footer className="footer sm:footer-horizontal  text-base-content font-dmSans p-10  flex flex-wrap justify-between">
          <nav className="">
            <h6 className="font-bold border-b-2 text-lg ">Need Any help?</h6>
            <div className="flex flex-col gap-1 border-l-2 pl-2 border-blue-400 font-semibold my-2">
            <a className="link link-hover">Call 24/7 for any help</a>
            <a className="link link-hover text-xl text-blue-500 ">+8809825468794</a>
            </div>
            <div className="flex flex-col gap-1 border-l-2 pl-2 border-blue-400  font-semibold my-1" >
            <a className="link link-hover">Mail to support team</a>
            <a className="link link-hover text-xl text-blue-500 ">support@traveldesh.com</a>
            </div>
            <div className="flex flex-col gap-1 border-l-2 pl-2  border-blue-400  font-semibold my-1" >
            <a className="link link-hover">Follow us on</a>
            <a className="link link-hover text-xl text-blue-500  flex gap-2"><FaFacebook />  <FaTwitter /> <GrInstagram /> <FaLinkedin />
             </a>
            </div>
          </nav>
          <nav className="">
            <h6 className="font-bold border-b-2 text-lg">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Testimonials</a>
            <a className="link link-hover">Rewards</a>
            <a className="link link-hover">Work with us</a>
            <a className="link link-hover">Meet the Team</a>
            <a className="link link-hover">Blog</a>
          </nav>
          <nav className="">
            <h6 className="font-bold border-b-2 text-lg">Other Services</h6>
            <a className="link link-hover">Account</a>
            <a className="link link-hover">Faq</a>
            <a className="link link-hover">Legal</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Affiliate Program</a>
            <a className="link link-hover">Privacy Policy</a>
          </nav>
          <nav className="">
            <h6 className="font-bold border-b-2 text-lg">Top cities</h6>
            <a className="link link-hover">Chittagong</a>
            <a className="link link-hover">Cox's Bazar</a>
            <a className="link link-hover">Shylet</a>
            <a className="link link-hover">Bandarban</a>
            <a className="link link-hover">Khulna</a>
            <a className="link link-hover">Rangamati</a>
          </nav>
        </footer>
        {/* bg-base-300  */}
      <footer className="footer sm:footer-horizontal footer-center  text-base-content p-4 w-full">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by React Titans</p>
  </aside>
</footer>
    </div>
  );
};

export default Footer
