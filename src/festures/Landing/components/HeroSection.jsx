import React from 'react'
import ImageContent from './mainImageSection/ImageContent'


const HeroSection = () => {
  return (
    <div role="navigation" className="flex w-full h-full ">
      <div className="w-[210px] h-screen bg-slate-400 flex border-r-4 border-indigo-500">
        hi
        
      </div>

      <div className="w-screen pl-2 pr-2">
        <div className="p-2 h-[200px] bg-slate-600">For Slide</div>
        <div className="">
          <ImageContent/>
        </div>
      </div>
    </div>
  )
}

export default HeroSection