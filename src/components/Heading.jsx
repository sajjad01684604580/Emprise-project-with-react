import React from 'react'

const Heading = (props) => {
  return (
    <props.as className={`${props.className} font-poppins font-bold text-heading`}>{props.text}</props.as>
  )
}

export default Heading