import React from "react";
import trophy from "../assets/trophy.png";
import lightbulb from "../assets/lightbulb.png";
import doublePhone from "../assets/doublePhone.png";
import rectangle1 from "../assets/Rectangle1.png";
import rectangle2 from "../assets/Rectangle2.png";
import home from "../assets/Home.png";
const LandPage1 = () => {
  return (
    <div
      className="  font-sans md:min-h-[30vh] lg:min-h-screen  overflow-x-hidden bg-cover bg-center bg-[#ffdd63] md:bg-white sm:h-auto px-6"
    >
<div
  className="absolute  top-0  right-0 w-full lg:h-[150%] md:h-[60%]  bg-no-repeat bg-right bg-contain z-0 hidden md:block"
  style={{ backgroundImage: `url(${home})` }}
/>

      <div className="absolute right-0  w-full md:w-[50%] md:h-auto flex justify-center items-center pointer-events-none z-0 ">
        <div className="   sm:w-[60%]   ">
      
<img
  src={doublePhone}
  alt="phone"
  className=" lg:h-120 absolute right-1 z-10 mx-auto h-60 md:h-100   max-w-none md:block"
/>
        </div>
      </div>
      <div className=" flex  flex-col md:flex-row  justify-between items-center px-6 md:px-20 pt-56 md:pt-10 relative z-10 ">
       
        <div className=" relative  max-w-xl text-center  md:text-left md:pr-30  md:flex-col   mb-12 ">
          <h1 className="text-4xl md:text-4xl font-bold text-red-600">
            Science Says...
          </h1>
          <p className="text-gray-700 text-Montserrat sm:text-xs md:z-20 md:text-xl mb-6 mt-6 md:mt-8 leading-relaxed">
            Unlock your potential with science-backed micro-behaviors that
            transform your daily habits.
          </p>
          <a
            href="#"
            className="bg-red-500 hover:bg-red-600 transition-colors text-white px-6 py-3 rounded-md text-base sm:text-lg font-semibold shadow-md inline-block"
          >
            Explore Hints
          </a>
        </div>
        {/* <div className="hidden md:block md:top-1  absolute left-6 lg:left-16 bottom-10 z-20">
          <img src={trophy} alt="trophy" className="w-12 md: lg:w-16" />
        </div> */}
        <div className="hidden md:block  right-0  lg:right-24 top-12 z-20">
          <img src={lightbulb} alt="lightbulb" className="w-8 absolute left-160  bottom-0 lg:w-20 " />
        </div>
        <div>
          <img src={trophy} className="hidden lg:block md:w-30   absolute left-3  lg:mt-[160px]" alt="" />
          </div>
      </div>
    </div>
  );
};
export default LandPage1;
