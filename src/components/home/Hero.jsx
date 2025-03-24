import React from 'react'

import hero1 from "../../assets/img/hero1.jpg"
import hero2 from "../../assets/img/hero2.jpg"
import hero3 from "../../assets/img/hero3.jpg"
import hero4 from "../../assets/img/hero4.jpg"
const Hero = () => {
  return (
    <div className=' relative'>
        <div className="carousel w-full my-8 rounded">
  <div id="slide1" className="carousel-item relative w-full h-[300px] md:h-[450px] ">
    <img
      src={hero1}
      className="w-full " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-30">
      <a href="#slide4" className="btn btn-circle ">❮</a>
      <a href="#slide2" className="btn btn-circle ">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full  h-[300px] md:h-[450px]">
    <img
      src={hero2}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-30">
      <a href="#slide1" className="btn btn-circle ">❮</a>
      <a href="#slide3" className="btn btn-circle ">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full  h-[300px] md:h-[450px]">
    <img
      src={hero3}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-30">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full  h-[300px] md:h-[450px]">
    <img
      src={hero4}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-30">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
<div className='w-[350px] md:w-[580px] bg-white/70 mx-auto px-2 md:px-3 py-2  rounded text-center absolute bottom-15 md:bottom-40 left-[20px] md:left-[350px] shadow-2xl  text-gray-700 '>
  
  <p className='font-medium'>Discover the beauty of Bangladesh like never before! From the golden beaches of Cox’s Bazar to the serene tea gardens of Sylhet, let GoBangla be your guide to unforgettable adventures. Start your journey today!</p>
  <h1 className='text-red-600 font-bold'>GoBangla – <span className='text-green-600'>Unlock the Beauty of Bangladesh!</span> </h1>
  <button className="btn btn-outline  capitalize my-2 text-green-600">explore more</button>
</div>
    </div>
  )
}

export default Hero