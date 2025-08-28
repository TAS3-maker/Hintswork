import React from 'react'
import groupPlan from "../assets/group2.png"
const ChooseYourPlan = () => {
  return (
    <div className='mt-20'>
          <h2 className="text-5xl md:text-6xl font-bold text-center ml-160 md:text-left ">
        Choose <span className="text-red-500">Your Plan</span>
      </h2>
      <p className='text-gray-500 text-2xl ml-163 mt-5 '>Start Free. Upgrade anytime. No commitments.</p>
      <img src={groupPlan} alt="" className='ml-100 mt-15' />
    </div>
  )
}

export default ChooseYourPlan