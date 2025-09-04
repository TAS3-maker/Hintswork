import React from 'react';
import messageIcon from '../assets/messageIcon.png'; 
import scienceSays from '../assets/scienseSays.png';
import { Element } from 'react-scroll';
const ScienceSays = () => {
  return (
    <Element name='Science'>

    <div className="py-8 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-6xl  font-bold text-center md:text-center mb-8">
        Science <span className="text-red-500">Says...</span>
      </h2>

      <div className="flex flex-col  md:flex-row items-center lg:ml-45  md:ml-7 md:items-center gap-8">
        <div className="flex flex-row items-center space-x-6 mb-8 md:mb-0">
          <img
            src={messageIcon}
            alt="Message Icon"
            className="w-16 h-16 md:w-14 md:h-10 md:mt-60 object-contain"
          />

          <img
            src={scienceSays}
            alt="Group Picture"
            className="w-40 h-40 md:w-40 md:h-40   rounded-lg object-cover"
          />
        </div>

        <div className="text-center md:text-left md:mt-15 max-w-md">
          <h3 className="text-3xl md:text-3xl font-bold mb-4">Science Says</h3>
          <p className="text-gray-500 text-lg md:text-md leading-relaxed">
            Hints Work! is grounded in behavioral science. Studies indicate that
            small, consistent nudges can improve long-term outcomes sustainably.
            Each Hint you see is connected to research and real-world evidence in
            plain language.
          </p>
        </div>
      </div>
    </div>
    </Element>
  );
};

export default ScienceSays;
