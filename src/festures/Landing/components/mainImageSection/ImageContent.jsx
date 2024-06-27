import React, { useState } from 'react'
import ImageContentCss from './ImageContentCss'

const imageInfo=[
    {
        id:'img-01',
        image:'/images/pexels-pic_01.jpg',
        icon:'X'
    },
    {
        id:'img-02',
        image:'/images/pexels-pic_02.jpg',
        icon:'X'
    },
    {
        id:'img-03',
        image:'/images/pexels-pic_03.jpg',
        icon:'X'
    },
    {
        id:'img-04',
        image:'/images/pexels-pic_04.jpg',
        icon:'X'
    },
    {
        id:'img-05',
        image:'/images/pexels-pic_05.jpg',
        icon:'X'
    },
    {
        id:'img-06',
        image:'/images/pexels-pic_06.jpg',
        icon:'X'
    },
    {
        id:'img-07',
        image:'/images/pexels-pic_07.jpg',
        icon:'X'
    },
    {
        id:'img-08',
        image:'/images/pexels-pic_08.jpg',
        icon:'X'
    },
    {
        id:'img-09',
        image:'/images/pexels-pic_09.jpg',
        icon:'X'
    },
    {
        id:'img-10',
        image:'/images/pexels-pic_10.jpg',
        icon:'X'
    },
    {
        id:'img-11',
        image:'/images/pexels-pic_11.jpg',
        icon:'X'
    },
    {
        id:'img-11',
        image:'/images/pexels-pic_12.jpg',
        icon:'X'
    },

]




const ImageContent = () => {

    

  return (
    <div>
        <div className="grid grid-cols-3 pt-6 pb-6">
            {imageInfo &&
            imageInfo.map((item, index)=>(
                <div key={index}>
                
                <ImageContentCss item={item}/>
                
                
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default ImageContent

// export const LargeImgContent = () =>{
//     return(
//         <div className="">
//             {
//                 imageInfo &&
//                 imageInfo.map((item, index)=>(
//                     <LargeImgCss key={index} item={item}/>
//                 ))
//             }
//         </div>
//     )
// }
