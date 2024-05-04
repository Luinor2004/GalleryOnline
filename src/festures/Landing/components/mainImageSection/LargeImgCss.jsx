import React from 'react'

const LargeImgCss = ({item, showModel,setShowModel}) => {
  return (
    <div className=" top-[110px] left-[270px] backdrop-blur-sm max-h-[600px] absolute z-10 overflow-hidden">
        <div className="w-[1000px] h-[600px] flex justify-center items-center bg-slate-500 bg-opacity-50 relative">
            <img className="w-full h-[450px] absolute object-contain" src={item.image} alt="Image"/>
            <div onClick={()=>setShowModel(!showModel)} className="text-xl text-[#fff] font-bold absolute top-0 right-0 m-3 cursor-pointer">{item.icon}</div>
        </div>
    </div>
  )
}

export default LargeImgCss