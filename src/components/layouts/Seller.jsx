import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Button from '../Button'
import Image from '../Image'
import sellerone from '../../assets/sellerone.png'
import sellertwo from '../../assets/sellertwo.png'
import sellerthree from '../../assets/sellerthree.png'
const Seller = () => {
  return (
    <section className='pb-[136px]'>
        <Container>
            <div className="">
                <Heading text="Best Seller" as="h2" className="pb-[16px]"/>
                <Paragraph text="Sost Brilliant reasons Entrada should be your one-stop-shop!" className="pb-[64px]"/>
            </div>
           <div className="relative">
                <Button text="Check All" className="absolute top-[-130px] right-0"/>
            </div>

            <div className="flex justify-between">

            <div className="w-[512px]">
                <div className="">
                    <Image src={sellerone}/>
                </div>
                <div className="pt-[32px] px-[52px] text-center">
                    <Paragraph text="Train Tour Skyline" className="font-poppins font-medium text-[24px] pb-[16px]"/>
                    <Paragraph text="Check Out Daily Deals and Promotion on Hotels. Easy & Fast Booking" className="font-poppins text-base text-[#99A3AD]"/>

                </div>
            </div>
            
            <div className="w-[512px]">
                <div className="">
                    <Image src={sellertwo}/>
                </div>
                <div className="pt-[32px] px-[52px] text-center">
                    <Paragraph text="Train Tour Skyline" className="font-poppins font-medium text-[24px] pb-[16px]"/>
                    <Paragraph text="Check Out Daily Deals and Promotion on Hotels. Easy & Fast Booking" className="font-poppins text-base text-[#99A3AD]"/>

                </div>
            </div>
            <div className="w-[512px]">
                <div className="">
                    <Image src={sellerthree}/>
                </div>
                <div className="pt-[32px] px-[52px] text-center">
                    <Paragraph text="Train Tour Skyline" className="font-poppins font-medium text-[24px] pb-[16px]"/>
                    <Paragraph text="Check Out Daily Deals and Promotion on Hotels. Easy & Fast Booking" className="font-poppins text-base text-[#99A3AD]"/>

                </div>
            </div>

            </div>
            
        </Container>
    </section>
  )
}

export default Seller