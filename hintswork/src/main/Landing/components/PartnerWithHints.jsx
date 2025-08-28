import React from 'react';
import imgPartner from '../assets/bgPartner2.png';
import PartnerImg from '../assets/PartnerImgBg.png';

const PartnerWithHints = () => {
  return (
    <div className="text-center mt-24 px-6 md:px-20">
      <h2 className="text-5xl md:text-6xl font-bold mb-6">
        Partner <span className="text-red-500">with HintsWork</span>
      </h2>
      <p className="text-gray-400 text-xl font-normal mb-12 max-w-2xl mx-auto">
        Are you a brand, wellness coach, or corporate looking to engage your audience? 
        Partner with us to launch your own Hints and grow together.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
 
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          <img 
            src={imgPartner} 
            alt="background" 
            className="w-full max-w-6xl rounded-xl" 
          />
          <img 
            src={PartnerImg} 
            alt="foreground" 
            className="absolute w-2/3 max-w-lg rounded-xl shadow-lg"
          />
        </div>


        <div className="w-full md:w-1/2">
   <form className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl mx-auto ">
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Write a message...</label>
              <textarea
                name="message"
                rows="4"
                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
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
    </div>
  );
};

export default PartnerWithHints;
