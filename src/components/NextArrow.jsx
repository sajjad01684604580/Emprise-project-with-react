import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const NextArrow = (props) => {
    const { className,  onClick } = props;
  return (
    <div
    className={` py-[20px] px-[20px] hover:bg-[#28B0A6] hover:text-white hover:border-transparent   border-[#546179] rounded-full border-2 inline-block absolute right-0 top-[-132px] mb-[84px]  ${className}`}
    
    onClick={onClick}
  ><IoIosArrowForward  className='text-[25px] text-[#546179] hover:text-white'/></div>
  )
}

export default  NextArrow