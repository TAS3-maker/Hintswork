import React from 'react';
import messageIcon from '../assets/messageIcon.png'; 
import scienceSays from '../assets/scienseSays.png';
const ScienceSays = () => {
  return (
    <div className="py-8 px-4 md:px-12 items-center mt-30 justify-center">
      {/* Section Heading */}
      <h2 className="text-5xl md:text-5xl font-bold text-center ml-160 md:text-left mb-6">
        Science <span className="text-red-500">Says...</span>
      </h2>

      {/* Content Flex Container */}
      <div className="flex flex-col mt-20 md:flex-row items-center md:items-start gap-6 ml-25">
        {/* Left Image Column */}
        <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
          {/* Message Icon */}
          <img
            src={messageIcon}
            alt="Message Icon"
            className="w-20 h-20 mt-60 mr-30"
          />

          {/* Middle Group Picture */}
          <img
            src={scienceSays}
            alt="Group Picture"
            className="w-90 h-90 rounded-lg object-cover mr-5"
          />
        </div>

        {/* Text Column */}
        <div className="text-center md:text-left ml-20 max-w-md w-full">
          <h3 className="text-4xl font-bold mb-2">Science Says</h3>
          <p className="text-gray-500 text-2xl ">
            Hints Work! is grounded in behavioral science. Studies indicate that
            small, consistent nudges can improve long-term outcomes sustainably.
            Each Hint you see is connected to research and real-world evidence in
            plain language.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScienceSays;
