import React, { useEffect, useState } from 'react'
import Hero from '../components/home/Hero'
import BookedTrip from '../components/home/BookedTrip'
import PopularPlace from '../components/home/PopularPlace';
import TopAttraction from '../components/home/TopAttraction';
import HiddenGem from '../components/home/HiddenGem';
import AllCategory from '../components/home/AllCategory';
import AllDestinations from '../components/home/AllDestinations';

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
    <div >
      {/*
      <BookedTrip/>
     
      <TopAttraction data={data}/>
      <HiddenGem data={data}/>
      <AllCategory data={data}/> */}
       <Hero/>
      <AllDestinations data={data}/>
      <PopularPlace data={data}/>
    </div>
  )
}

export default Home