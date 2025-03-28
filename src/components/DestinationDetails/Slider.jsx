import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Slider = ({ data }) => {
  const [relatedTours, setRelatedTours] = useState([]);

  useEffect(() => {
    fetch("/date.json")
      .then((res) => res.json())
      .then((allData) => {
        const filteredTours = allData.filter(
          (item) => item.location === data.location && item.id !== data.id
        );
        setRelatedTours(filteredTours);
      });
  }, [data]);

  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {
        relatedTours.map((tour)=><div className="card bg-base-100 w-96 shadow-sm ">
        <figure>
          <img src={tour.image_url} alt={tour.name} className=""/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{tour.name}</h2>
          <p>{tour.description.slice(0, 100)}...</p>
          <div className="card-actions justify-center my-2">
            <Link to={`/destinations/${tour.id}`}>
            <button className="btn border-2 border-b-[#2B7FFF]">View Details</button>
            </Link>
            
          </div>
        </div>
      </div>)
      }

    </div>
      
  );
};

export default Slider;
