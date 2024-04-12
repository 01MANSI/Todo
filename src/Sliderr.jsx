import React, { useState } from 'react'
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";

function Sliderr() {
    const [number,setNumber] =useState(1)
    const images =[
        {id:1, src:'https://cdn.pixabay.com/photo/2016/08/03/09/03/universe-1566159_1280.jpg'},
        {id:2, src:'https://cdn.pixabay.com/photo/2017/03/25/17/55/colorful-2174045_1280.png'},
        {id:3, src:'https://cdn.pixabay.com/photo/2017/12/28/15/06/geometric-3045402_640.png'},
        {id:4, src:'https://cdn.pixabay.com/photo/2017/02/20/12/26/banner-2082331_640.png'},
        {id:5, src:'https://cdn.pixabay.com/photo/2016/08/03/09/04/universe-1566161_1280.jpg'}
    ]
    const handleNext= ()=>{
        if(number === images.length-1){
            setNumber(0)
        }
        else{
            setNumber(number +1)
        }
    }
    const handlePrev= ()=>{
        if(number === 0){
            setNumber(images.length-1)
        }
        else{
            setNumber(number -1)
        }
    }
  return (
    // <div className='flex items-center justify-center '>
    //     <div className='number-display object-cover  w-1/2 m-36'> <img src={images[number].src} /></div>
    //      <button onClick={handleNext} className='ml-2'><FcNext /></button><br/>
    //      <button onClick={handlePrev} className='mr-2'><FcPrevious /></button><br/>

    //     </div>
    <div className='flex items-center justify-center'>
  <button onClick={handlePrev} className='mr-2'><FcPrevious /></button>
  <div className='number-display object-cover w-1/2 m-36'>
    <img src={images[number].src} />
  </div>
  <button onClick={handleNext} className='ml-2'><FcNext /></button>
</div>
  )
}

export default Sliderr