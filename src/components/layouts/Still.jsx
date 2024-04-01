import React from 'react'
import Container from '../Container'
import Heading from '../../components/Heading'
import Paragraph from '../../components/Paragraph'
import Image from '../Image'
import stillone from '../../assets/stillone.png'
import stilltwo from '../../assets/stilltwo.png'
const Still = () => {
  return (
    <section className='pb-[136px]'>
      <Container>
        <div className="text-center pb-[72px]">
          <Heading text="Still have a question?" as="h3" className="font-poppins font-bold text-[40px]"/>
          <Paragraph text="The Brilliant reasons Entrada should be your one-stop-shop!" className="font-poppins font-normal text-[24px]"/>
        </div>
        <div className="flex justify-center">
          <div className="flex gap-8">
            <div className="w-[648px] bg-advencolor pt-[72px] pb-[56px] text-center rounded-lg hover:bg-[#1D293F] duration-500">
              <Image src={stillone} className="inline-block pb-[56px]"/>
              <Paragraph text="For Sales" className="font-poppins font-medium text-[32px] text-white pb-[24px]"/>
              <Paragraph text="The Brilliant reasons Entrada be your one-stop-shop!" className="text-[#BCF0EC] font-poppins text-[24px] px-32 font-normal pb-[48px]"/>
              <Paragraph text="sales@entrada.com"  className="font-poppins font-medium text-2xl text-white"/>
              <Paragraph text="+977(985) 456-32-12"  className="font-poppins font-medium text-2xl text-white"/>
            </div>
            <div className="w-[648px] bg-advencolor pt-[72px] pb-[56px] text-center rounded-lg hover:bg-[#1D293F] duration-500">
              <Image src={stilltwo} className="inline-block pb-[56px]"/>
              <Paragraph text="For Sales" className="font-poppins font-medium text-[32px] text-white pb-[24px]"/>
              <Paragraph text="The Brilliant reasons Entrada be your one-stop-shop!" className="text-[#BCF0EC] font-poppins text-[24px] px-32 font-normal pb-[48px]"/>
              <Paragraph text="sales@entrada.com"  className="font-poppins font-medium text-2xl text-white"/>
              <Paragraph text="+977(985) 456-32-12"  className="font-poppins font-medium text-2xl text-white"/>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Still