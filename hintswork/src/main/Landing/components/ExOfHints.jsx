import React from 'react'
import shape from '../assets/shape.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'

 const ExOfHints = () => {
  return (
    <div className="relative  pt-10 pb-16 px-4 w-[100%] md:px-12">
      {/* Background shape */}
      <img
        src={shape}
        alt=""
        className="absolute top-0 left-[-4%] w-[100%] h-[120%] ml-15 z-0 pointer-events-none"
      />
      {/* Content above background */}
      <div className="relative z-10 mr-50">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Examples <span className="text-red-500">of Hints</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Every Hint is practical and easy to use. Explore categories across health, focus, and wellness.
          </p>
        </div>
        {/* Image grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-1 max-w-4xl mx-auto">
          <img src={img1} alt="Hint Example 1" className="rounded-lg object-cover w-full h-48 md:h-56 " />
          <img src={img2} alt="Hint Example 2" className="rounded-lg object-cover w-full h-48 md:h-70 " />
          <img src={img3} alt="Hint Example 3" className="rounded-lg object-cover w-full h-48 md:h-56 " />
          <img src={img4} alt="Hint Example 4" className="rounded-lg object-cover w-full h-48 md:h-70 " />
          <img src={img5} alt="Hint Example 5" className="rounded-lg object-cover w-full h-48 md:h-56 " />
          <img src={img6} alt="Hint Example 6" className="rounded-lg object-cover w-full h-48 md:h-70 " />
        </div>
      </div>
    </div>
  )
}
export default ExOfHints