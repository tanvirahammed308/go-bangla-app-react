import React from "react";
import blog from "../assets/img/blog.jpg";
import blog1 from "../assets/img/blog1.jpg";
import blog2 from "../assets/img/blog2.jpg";
import blog3 from "../assets/img/blog3.jpg";
import blog4 from "../assets/img/blog4.jpg";
import blog5 from "../assets/img/blog5.jpeg";
const Blog = () => {
  return (
    <div className="container mx-auto my-10">
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage: `url(${blog})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: ""
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              <span className="text-red-500">Go</span>
              <span className="text-green-500"> Bangla</span> Blogs
            </h1>
            <p className="mb-5 font-bold">
              Get the latest travel tips, guides, and inspiration to explore the
              best of Bangladesh.
            </p>
          </div>
        </div>
      </div>
      <div className="my-10 grid md:grid-cols-4 gap-2 justify-center">
        <div className="w-[300px] border-2 border-green-500 shadow rounded">
          <img src={blog1} alt="" className="w-full h-52" />
          <div className="px-5 py-2">
            <h1 className="font-bold">Top 5 Must-Visit Places in Sylhet</h1>
            <p className="text-sm">
              Sylhet is a paradise for nature lovers, famous for its lush tea
              gardens, crystal-clear rivers, and serene landscapes
            </p>
            <ul className="font-semibold">
              List of Places:
              <li>Jaflong</li>
              <li>Ratargul Swamp Forest</li>
              <li>Srimangal Tea Gardens</li>
              <li>Madhabkunda Waterfall</li>
              <li>Bisnakandi</li>
            </ul>
            <small className="text-emerald-500">
              Sylhet offers a perfect mix of adventure and relaxation. Plan your
              trip today!
            </small>
          </div>
        </div>
        <div className="w-[300px] border-2 border-green-500 shadow rounded">
          <img src={blog2} alt="" className="w-full h-52" />
          <div className="px-5 py-2">
            <h1 className="font-bold">A Weekend Getaway in Cox’s Bazar</h1>
            <p className="text-sm">
              Cox’s Bazar is home to the longest unbroken sea beach in the
              world, making it the ultimate weekend escape
            </p>
            <ul className="font-semibold">
              List of Places:
              <li>Cox’s Bazar Beach</li>
              <li>Inani Beach</li>
              <li>Himchari National Park</li>
              <li>Radiant Fish World</li>
              <li>Saint Martin's Island</li>
            </ul>
            <small className="text-emerald-500">
              Want a perfect beach vacation? Cox’s Bazar is waiting for you!
            </small>
          </div>
        </div>
        <div className="w-[300px] border-2 border-green-500 shadow rounded">
          <img src={blog3} alt="" className="w-full h-52" />
          <div className="px-5 py-2">
            <h1 className="font-bold">
              Rajshahi: The City of Mangoes & History
            </h1>
            <p className="text-sm">
              Rajshahi is famous for its delicious mangoes, rich history, and
              stunning architectural heritage
            </p>
            <ul className="font-semibold">
              List of Places:
              <ul>
                <li>Puthia Temple Complex</li>
                <li>Varendra Research Museum</li>
                <li>Bagha Mosque</li>
                <li>Padma Riverbank</li>
                <li>Mahasthangarh</li>
              </ul>
            </ul>
            <small className="text-emerald-500">
              Explore the history and flavors of Rajshahi on your next trip!
            </small>
          </div>
        </div>
        <div className="w-[300px] border-2 border-green-500 shadow rounded">
          <img src={blog4} alt="" className="w-full h-52" />
          <div className="px-5 py-2">
            <h1 className="font-bold">Best Adventure Spots in Bangladesh</h1>
            <p className="text-sm">
              If you love adventure, Bangladesh offers some breathtaking
              destinations for trekking, camping, and exploring
            </p>
            <ul className="font-semibold ">
              <h1 className="">List of Places:</h1>
              <ul className="underline-none">
                <li>Boga Lake (Bandarban)</li>
                <li>Nafakhum Waterfall (Bandarban)</li>
                <li>Ratargul Swamp Forest (Sylhet)</li>
                <li>Sajek Valley (Rangamati)</li>
                <li>Tanguar Haor (Sunamganj)</li>
              </ul>
            </ul>
            <small className="text-emerald-500">
              Ready for an adrenaline rush? These adventure spots are calling
              you
            </small>
          </div>
        </div>
        <div className="w-[300px] border-2 border-green-500 shadow rounded">
          <img src={blog5} alt="" className="w-full h-52" />
          <div className="px-5 py-2">
            <h1 className="font-bold">Top 5 Hidden Gems in Bangladesh</h1>
            <p className="text-sm">
              Beyond the popular tourist spots, Bangladesh has hidden gems
              waiting to be explored.
            </p>
            <ul className="font-semibold">
              List of Places:
              
              <ul>
                <li>Nafakhum Waterfall (Bandarban)</li>
                <li>Chhera Island (Saint Martin's)</li>
                <li>Tanguar Haor (Sunamganj)</li>
                <li>Nilgiri Hills (Bandarban)</li>
                <li>Kuakata Sea Beach</li>
              </ul>
            </ul>
            <small className="text-emerald-500">
              Looking for unique travel experiences? Discover these hidden
              treasures!
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
