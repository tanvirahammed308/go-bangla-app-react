import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const TourCategory = () => {
    const [data,setData]=useState([])
    const {category}=useParams();
    console.log(data);
    
    useEffect(()=>{
fetch("/tour.json")
.then(res=>res.json())
.then(data=>{
    const filterData=data.filter((item)=>item.category == category)
    setData(filterData)
})
    },[category])
  return (
    <div>
         <div className=' relative'>
      <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  className='h-36 w-full rounded opacity-60 bg-black/65'/>
      <div className='absolute top-10 md:top-10 md:left-[100px] '>
        <h1 className='text-center text-sm md:text-xl '>"Explore the beauty of Bangladesh with our handpicked tour packages – adventure, nature, and relaxation all in one place!"</h1>
        <p className='text-center'>Choose your favorite packages</p>
      </div>

      
      
     </div>
     {/* pages card */}

     <div className='flex flex-wrap mt-10 gap-5 justify-center'>
        {
data.map((item)=><div className="card bg-base-100 w-96  border-2 border-[#2B7FFF] shadow-2xl">

<div className="card-body  flex flex-col justify-between items-center gap-2">
    
  <h2 className='text-xl'>{item.name}</h2>
  <div className='font-bold flex gap-10'>
  <p>{item.location}</p>
  <p>$ {item.price}</p>

  </div>
  <div className='font-bold flex gap-10'>
  <p>{item.duration}</p>
  <p>{item.category}</p>

  </div>
  <div>
    <h2 className=''>Special Features</h2>
    {
        item.includes.map((item)=> <li>{item}</li>)
    }
  </div>

    
</div>
</div>)
        }
     </div>
    </div>
  )
}

export default TourCategory