import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import ProductDetails from "../pages/ProductDetails";
import Login from "../pages/Login";
import Destinations from "../pages/Destinations";
import DestinationDetails from "../pages/DestinationDetails";
import TourCategory from "../pages/TourCategory";
import Signup from "../pages/Signup";
import HotelDetail from "../pages/HotelDetail";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/destinations",
          element: <Destinations />,
        },
        {
          path: "/destinations/:id",
          element: <DestinationDetails />,
        },
        // {
        //   path: "/:id",
        //   element: <ProductDetails />,
        // },
        {
          path: "/tourcategory/:category",
          element: <TourCategory />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/hoteldetail/:id",
          element: <HotelDetail />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
      ],
    },
  ]);
  