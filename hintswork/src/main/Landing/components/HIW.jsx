import React from 'react'
import HowItWorks from '../assets/HowItWorks.png'
import { Element } from 'react-scroll'
const HIW = () => {
  return (
    <Element name='HIW'>
    <div className='relative mt-20 lg:mt-20'>
        <img src={HowItWorks} alt="HowItWorks" className='md:w-[100%] overflow-x-hidden lg:w-[90%] lg:ml-20' />
        <button className="bg-red-500 text-white absolute px-7 py-3 rounded-md  mb-10 ml-[90px]  md:ml-70 lg:ml-130 text-lg font-semibold shadow-md">
Try a Sample Hint      
</button>


    </div>
    </Element>
  

  )
}

export default HIW
