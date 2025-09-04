import React from 'react';
import groupPlan from "../assets/group2.png";

const ChooseYourPlan = () => {
  return (
    <div className="mt-20 px-6 lg:px-70 md:px-0  max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-bold text-center md:ml-30 md:text-left">
        Choose <span className="text-red-500">Your Plan</span>
      </h2>
      <p className="text-gray-500 text-lg md:text-1xl text-center md:text-left mt-4 max-w-xl md:ml-34 mx-auto md:mx-4">
        Start Free. Upgrade anytime. No commitments.
      </p>
      <div className="mt-8 flex justify-center md:ml-10 md:justify-start">
        <img
          src={groupPlan}
          alt="Group Plan"
          className="w-full max-w-md md:max-h-100 md:max-w-3xl"
        />
      </div>
    </div>
  );
};

export default ChooseYourPlan;
