import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

const PrevArrow = (props) => {
    const { className,  onClick } = props;
  return (
    <div
    className={` py-[20px] px-[20px] hover:bg-[#28B0A6] hover:text-white hover:border-transparent   border-[#546179] rounded-full border-2 inline-block absolute right-[84px] top-[-132px] ${className}`}
    
    onClick={onClick}
  ><IoIosArrowBack className='text-[25px] text-[#546179] hover:text-white'/></div>
  )
}

export default PrevArrow