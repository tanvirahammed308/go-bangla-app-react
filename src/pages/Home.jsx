import React, { useEffect, useState } from 'react'
import Hero from '../components/home/Hero'
import BookedTrip from '../components/home/BookedTrip'
import PopularPlace from '../components/home/PopularPlace';
import TopAttraction from '../components/home/TopAttraction';
import HiddenGem from '../components/home/HiddenGem';
import AllCategory from '../components/home/AllCategory';

const Home = () => {
  const [data,setData]=useState([]);
 

  useEffect(()=>{
    fetch('/date.json')
    .then(res=>res.json())
    .then(data=>{
      setData(data);
      
    })
  },[])
  return (
    <div className='container mx-auto'>
      <Hero/>
      <BookedTrip/>
      <PopularPlace data={data}/>
      <TopAttraction data={data}/>
      <HiddenGem data={data}/>
      <AllCategory data={data}/>
    </div>
  )
}

export default Home