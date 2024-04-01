import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Button from '../Button'
import Image from '../Image'
import Beach from '../../assets/Beach.png'
import Beachtwo from '../../assets/Beachtwo.png'
import Beachthree from '../../assets/Beachthree.png'
import Beachfour from '../../assets/Beachfour.png'
import "slick-carousel/slick/slick.css";

import Slider from "react-slick";
import PrevArrow from '../PrevArrow';
import NextArrow from '../NextArrow'

const Category = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>,
      };
  return (
    <section className='pb-[163px]'>
        <Container>
            <div className="">
                <Heading text="Select Category" as="h2" className="pb-[16px]"/>
                <Paragraph text="Sost Brilliant reasons Entrada should be your one-stop-shop!" className="pb-[64px]"/>
            </div>

            <Slider {...settings}>
            <div className=" border-[2px] border-[#DCE5EB] py-[36px] px-[32px] rounded-md">
                <div className="text-right">
                <Button text="4.9" className="text-[#F5A623] bg-[#FEF2DE] py-2 px-4 rounded-full font-poppins font-medium text-lg mb-[49px]"/>
                </div>
                <Image src={Beach} className="pb-[20px]"/>
                <Heading text="Beach Activity" as="h4" className="font-poppins font-medium text-[24px] pb-[16px]"/>
                <Paragraph text="196 Activities" className="font-poppins text-[16px]"/>
            </div>
            <div className=" border-[2px] border-[#DCE5EB] py-[32px] px-[32px] rounded-md">
                <div className="text-right">
                <Button text="4.9" className="text-[#F5A623] bg-[#FEF2DE] py-2 px-4  rounded-full font-poppins font-medium text-lg mb-[49px]"/>
                </div>
                <Image src={Beachtwo} className="pb-[20px]"/>
                <Heading text="Bungee Jump" as="h4" className="font-poppins font-medium text-[24px] pb-[16px]"/>
                <Paragraph text="196 Activities" className="font-poppins text-[16px]"/>
            </div>
            <div className=" border-[2px] border-[#DCE5EB] py-[32px] px-[32px] rounded-md">
                <div className="text-right">
                <Button text="4.9" className="text-[#F5A623] bg-[#FEF2DE] py-2 px-4  rounded-full font-poppins font-medium text-lg mb-[49px]"/>
                </div>
                <Image src={Beachthree} className="pb-[20px]"/>
                <Heading text="City Tours" as="h4" className="font-poppins font-medium text-[24px] pb-[16px]"/>
                <Paragraph text="196 Activities" className="font-poppins text-[16px]"/>
            </div>
            <div className=" border-[2px] border-[#DCE5EB] py-[32px] px-[32px] rounded-md">
                <div className="text-right">
                <Button text="4.9" className="text-[#F5A623] bg-[#FEF2DE] py-2 px-4  rounded-full font-poppins font-medium text-lg mb-[49px]"/>
                </div>
                <Image src={Beachfour} className="pb-[20px]"/>
                <Heading text="Hiking trips" as="h4" className="font-poppins font-medium text-[24px] pb-[16px]"/>
                <Paragraph text="196 Activities" className="font-poppins text-[16px]"/>
            </div>
            <div className=" border-[2px] border-[#DCE5EB] py-[32px] px-[32px] rounded-md">
                <div className="text-right">
                <Button text="4.9" className="text-[#F5A623] bg-[#FEF2DE] py-2 px-4  rounded-full font-poppins font-medium text-lg mb-[49px]"/>
                </div>
                <Image src={Beachfour} className="pb-[20px]"/>
                <Heading text="Hiking trips" as="h4" className="font-poppins font-medium text-[24px] pb-[16px]"/>
                <Paragraph text="196 Activities" className="font-poppins text-[16px]"/>
            </div>
            </Slider>

            
            
            
        </Container>
    </section>
  )
}

export default Category