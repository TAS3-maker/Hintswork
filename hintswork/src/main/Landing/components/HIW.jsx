import React from 'react'
import HowItWorks from '../assets/howitworks.png'
const HIW = () => {
  return (
    <div className='relative'>
        <img src={HowItWorks} alt="HowItWorks" className='ml-30' />
        <button className="bg-red-500 text-white  absolute px-7 py-3 rounded-md  mb-10 ml-130 text-lg font-semibold shadow-md">
Try a Sample Hint      
</button>


    </div>
  

  )
}

export default HIW