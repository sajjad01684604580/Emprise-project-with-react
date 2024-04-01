import React from 'react'
import Container from '../Container'
import Image from '../Image'
import alllogo from '../../assets/alllogo.png'
const Travel = () => {
  return (
    <section className='pb-[136px]'>
        <Container>
            <div className="text-center">
                <Image src={alllogo}/>
            </div>
        </Container>
    </section>
  )
}

export default Travel