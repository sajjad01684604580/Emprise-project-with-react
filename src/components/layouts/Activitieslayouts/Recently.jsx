import React from 'react'
import Container from '../../Container'
import Heading from '../../Heading'
import Paragraph from '../../Paragraph'

import Image from '../../Image'
import sellerone from '../../../assets/sellerone.png'
import sellertwo from '../../../assets/sellertwo.png'
import sellerthree from '../../../assets/sellerthree.png'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import PrevArrow from '../../PrevArrow'
import NextArrow from '../../NextArrow'
const Recently = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:<PrevArrow/>,
        nextArrow:<NextArrow/>,
      };
  return (
    <section className='pb-[136px]'>
        <Container>
        <div className="">
                <Heading text="Recently Viewed" as="h2" className="pb-[16px]"/>
                <Paragraph text="Sost Brilliant reasons Entrada should be your one-stop-shop!" className="pb-[64px]"/>
            </div>

            <Slider {...settings}>
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
    </Slider>
           

           

            

            
        </Container>
    </section>
  )
}

export default Recently