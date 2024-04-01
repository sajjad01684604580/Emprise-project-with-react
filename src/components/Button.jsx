import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`${className} py-3.5 px-6 border rounded-full hover:text-white hover:bg-[#28B0A6] hover:border-transparent font-poppins font-normal text-xl`}>{text}</button>
  )
}

export default Button