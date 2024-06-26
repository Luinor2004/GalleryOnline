import React from 'react'
import ImageContent from './mainImageSection/ImageContent'


const HeroSection = () => {
  return (
    <div className="flex w-screen h-full pl-[192px]">
      <div className="w-full pl-2 pr-2">
        <div className="p-2 h-[200px] bg-slate-600">For Slide</div>
        <div className="">
          <ImageContent/>
        </div>
      </div>
    </div>
  )
}

export default HeroSection