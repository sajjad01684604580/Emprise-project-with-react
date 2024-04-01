import React from 'react'

const Paragraph = ({text,className}) => {
  return (
    <p className={` font-poppins font-normal text-2xl text-paracolor ${className}`}>{text}</p>
  )
}

export default Paragraph