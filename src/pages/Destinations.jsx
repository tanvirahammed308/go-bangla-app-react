
import React, { useEffect, useState } from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { Link } from 'react-router-dom'


const Destinations = () => {
    const [data,setData]=useState([])
    const [visibleCard,setVisibleCard]=useState(5)
    useEffect(()=>{
        fetch('/date.json')
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })
    },[])

    const handleSeeMore=()=>{
        setVisibleCard(data.length)
    }

    const [cat, setCat] = useState("All");
      const filterLocation = new Set(data.map((item) => item.location));
      const filterCat = ["All", ...filterLocation];
      
    
      const selectedCat =
        cat == "All" ? data : data.filter((item) => item.location == cat);
    
  return (
    <div className="mt-10">
     <div className='mx-2 relative'>
      <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  className='h-36 w-full rounded opacity-60 bg-black/65'/>
      <div className='absolute top-10 md:top-15 md:left-[230px]  flex flex-col justify-center items-center w-full'>
        <h1 className='text-center text-sm md:text-2xl  '>"From the hills to the beaches—experience the true essence of Bangladesh!"</h1>
        <p className='text-center'>Choose your favorite destinations</p>
      </div>

      <div className="flex justify-center flex-wrap gap-5 my-5 mx-10 md:mx-0 mt-10">
          {filterCat.map((item) => (
            <button className="btn btn-outline border-2 border-[#2B7FFF] btn-sm" onClick={()=>setCat(item)}>
              {item}
            </button>
          ))}
        </div>
      
     </div>
      <div>
      <div className="my-3 grid md:grid-cols-3 justify-center items-center gap-10 mx-0 md:mx-6 ">
        {selectedCat.slice(0,visibleCard).map((item, index) => (
         <div
         key={index}
         className="relative group w-96 h-64 shadow-lg rounded-lg overflow-hidden"
       >
         {/* Background Image */}
         <div
           className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
           style={{
             backgroundImage: `url(${item.image_url})`,
           }}
         ></div>
       
         {/* Dark Overlay (Becomes Visible on Hover) */}
         <div className="absolute inset-0 bg-gray-400 opacity-0 group-hover:bg-opacity-100 transition-all duration-300"></div>

       
         {/* Hover Content */}
         <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 space-y-5">
           <h2 className="text-xl font-bold">{item.name}</h2>
           <p className="text-center text-sm px-5">{item.description}</p>
           <Link to={`/destinations/${item.id}`} className="text-sm underline text-[#5C98F2]">
             View details
           </Link>
         </div>
       </div>
       
        
        ))}
      </div>
      <div>
    {visibleCard < data.length && (
        <div className="flex justify-center">
            <button onClick={handleSeeMore}>
                <div className="flex items-center justify-center gap-2 border-b-2 hover:border-[#5C98F2] border-[#848484] w-[180px] my-10">
                    <h2 className="text-[#343434] hover:text-[#51A2FF] text-xl">See More</h2>
                    <MdOutlineArrowRightAlt className="text-xl mt-0.5 text-[#848484]hover:text-[#51A2FF]" />
                </div>
            </button>
        </div>
    )}
</div>
      </div>
      
      
      
      

      
    </div>
  )
}

export default Destinations