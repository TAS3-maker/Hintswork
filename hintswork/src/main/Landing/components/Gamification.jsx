import React from 'react';
import phoneGam from '../assets/phoneGam.png'; 
import bulbMessage from '../assets/bulbMessage.png'; 
import medal from '../assets/medal2.png'; 

const Gamification = () => {
  return (
    <div className="w-full px-4  md:px-16 md:mt-20 mt-10  py-10">
      <h1 className="text-4xl md:text-5xl lg:mr-125 font-bold text-red-500 text-center font-Montserrat tracking-wide">
        Gamification
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-20 relative">
        <img
          src={medal}
          alt="Trophy Icon"
          className="hidden md:block absolute md:h-25 md:w-25 md:mt-40 md:pr-8  left-0   top-35  right-2 w-32"
        />
        <div className="flex-1 mt-15 ml-15 max-w-xl z-10 leading-relaxed">
          <h2 className="text-2xl font-bold mb-2">Stay Motivated with Gamification</h2>
          <p className="text-gray-600 text-base md:text-lg mb-6">
            We designed points, streaks, and trophies to keep you engaged. Celebrate small wins, share your progress, and unlock bonuses as you go.
          </p>
          <button className="bg-red-500 mb-19 md:mt-6 text-white px-7 ml-[0px] py-3 rounded-md text-lg  font-semibold shadow-md">
            How Points Work
          </button>
        </div>
        <div className=" relative flex-shrink-0 flex items-center justify-center  z-10">
          <div
            className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -z-10"
            style={{
              width: '260px',
              height: '260px',
              background: 'linear-gradient(135deg, #fff 0%, #fdf3c8ff 100%)',
              borderRadius: '50% 40% 60% 50% / 60% 50% 40% 50%',
            }}
          ></div>
          <img
            src={phoneGam}
            alt=""
            className="w-[180px] md:w-[220px] drop-shadow-2xl  relative"
          />
          <img
            src={bulbMessage}
            alt=""
            className="absolute right-[-40px] top-[-40px] w-20 pointer-events-none"
            style={{ zIndex: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Gamification;
