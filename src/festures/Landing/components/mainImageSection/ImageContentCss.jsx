import React, { useState } from 'react'
import LargeImgCss from './LargeImgCss'




const ImageContentCss = ({item}) => {

  const [showModel, setShowModel] = useState(false)



  return (
    <div>
        <div  className="flex justify-center items-center z-0">
          <div className="w-[380px] h-[280px] p-2">
              <img className="h-[100%] w-[100%]" onClick={()=>setShowModel(!showModel)}
              src={item.image} alt="image"/>
          </div>
        </div>
        {showModel && <LargeImgCss item={item} setShowModel={setShowModel} showModel={showModel}/>}
    </div>
  )
}

export default ImageContentCss

// export const LargeImgCss = ({item}) => {
//   return (
//     <div className="flex justify-center items-center  w-screen h-screen absolute">
//         <div className="w-[1000px] h-[600px] flex justify-center items-center bg-slate-500 bg-opacity-50 relative">
//             <img className="w-full h-[450px] absolute object-contain" src={item.image} alt="Image"/>
//             <div className="text-xl text-[#fff] font-bold absolute top-0 right-0 m-3 cursor-pointer">{item.icon}</div>
//         </div>
//     </div>
//   )
// }