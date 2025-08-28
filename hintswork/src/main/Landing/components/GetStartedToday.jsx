import React from 'react';
import frame2 from '../assets/frame2.png';
import cycle from '../assets/cycle.png';
import dualPhone2 from '../assets/dualPhone2.png';
const GetStartedToday = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 max-w-7xl mx-auto">

      <div
        className="absolute -z-10 rounded-full"
        style={{
          width: '400px',
          height: '500px',
          background: 'linear-gradient(135deg, #fff 10%, #fdf3c8 130%)',
          borderRadius: '90% 70% 90% 130%',
          top: '20%',
          left: '10%',
          transform: 'translateY(-50%)',
        }}
      ></div>

      <div className="flex-1 text-center md:text-left space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold">
          Get <span className="text-red-500">Started Today</span>
        </h2>
        <p className="text-gray-500 text-lg md:max-w-md mx-auto md:mx-0">
          Available soon on App Store & Google Play
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center">
          <img src={frame2} alt="App Store" className="h-14 md:h-18" />
          <img src={cycle} alt="Google Play" className="h-14 md:h-18" />
        </div>
      </div>

      <div className="flex-1 flex justify-center md:justify-end mr-120 mt-10 md:mt-0 ">
        <img
          src={dualPhone2}
          alt="phone mockup"
          className="w-1xl sm:w-2/3 md:w-full max-w-4xl md:max-w-xl"
        />
      </div>
    </div>
  );
};
export default GetStartedToday;