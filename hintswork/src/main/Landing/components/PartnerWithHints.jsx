import React from 'react';
import imgPartner from '../assets/bgPartner2.png';
import PartnerImg from '../assets/PartnerImgBg.png';
import {Element} from 'react-scroll'
const PartnerWithHints = () => {
  return (
    <Element name='contactUs'>
    <div className="text-center px-6  bg-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Partner <span className="text-red-500">with HintsWork</span>
      </h2>

      <p className="text-gray-500 text-base md:text-xl font-normal mb-10 max-w-2xl mx-auto">
        Are you a brand, wellness coach, or corporate looking to engage your audience? 
        Partner with us to launch your own Hints and grow together.
      </p>

      <div className="relative flex flex-col-reverse md:flex-row justify-center items-center max-w-6xl mx-auto">
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[500px] mb-12 md:ml-10">
          <img src={imgPartner} alt="" className="absolute inset-0 w-full h-full object-contain " />
          <img src={PartnerImg} alt="" className="absolute inset-0 w-3/4 h-auto object-contain left-10 top-10 md:-mt-3" />
        </div>

        <form className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-6 md:mb-17 z-10">
          <div className="flex flex-col md:flex-row gap-4 mb-4 ">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                required
                className="mt-1 w-full border border-red-500 rounded-md p-2 focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none"
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Write a message...</label>
            <textarea
              name="message"
              rows="4"
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-600 text-white w-full py-2 rounded-md hover:bg-red-700 transition"
          >
            Book a demo
          </button>
        </form>
      </div>
    </div>
    </Element>

  );
};

export default PartnerWithHints;
