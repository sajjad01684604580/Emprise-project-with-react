import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Image from '../Image'
import tourone from '../../assets/tourone.png'
import tourtwo from '../../assets/tourtwo.png'
import Flex from '../Flex'
import List from '../List'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import PrevArrow from '../PrevArrow'
import NextArrow from '../NextArrow'

const Tour = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:<PrevArrow/>,
        nextArrow:<NextArrow/>,
      };
  return (
    <section className='pb-[137px]'>
        <Container>
            <div className="">
                <Heading as="h2" text="Tour Guides" className="pb-[16px] "/>
                <Paragraph text="Sost Brilliant reasons Entrada should be your one-stop-shop!" className="pb-[64px]"/>
            </div>

            <Slider {...settings}>
            <div className="">
                <Flex>
                <div className="pr-[32px]">
                <Image src={tourone}/>
                </div>
                <div className="">
                    <Paragraph text="Adventure Guru" className="font-poppins font-normal text-[24px] text-[#28B0A6] pt-[39px] pb-[16px]"/>
                    <Heading text="Martina" as="h2" className="font-poppins font-medium text-[40px]"/>
                    <Heading text="James Junior" as="h2" className="font-poppins font-medium text-[40px] pb-[96px]"/>
                    <Paragraph text="About" className="font-poppins text-[24px] pb-[16px]"/>
                    <Paragraph text="Check Out Daily Deals and Promotion on hotels. Easy & Fast Booking." className="font-poppins text-[16px] w-[342px] pb-[172px]"/>
                    
                    <ul className='flex gap-8'>
                        <List text="Facebook" className="font-poppins font-normal text-xl"/>
                        <List text="Instagram" className="font-poppins font-normal text-xl"/>
                        <List text="Twitter" className="font-poppins font-normal text-xl"/>
                    </ul>
                </div>
                </Flex>
            </div>
            <div className="">
                <Flex>
                <div className="pr-[32px]">
                <Image src={tourtwo}/>
                </div>
                <div className="">
                    <Paragraph text="Adventure Guru" className="font-poppins font-normal text-[24px] text-[#28B0A6] pt-[39px] pb-[16px]"/>
                    <Heading text="Martina" as="h2" className="font-poppins font-medium text-[40px]"/>
                    <Heading text="James Junior" as="h2" className="font-poppins font-medium text-[40px] pb-[96px]"/>
                    <Paragraph text="About" className="font-poppins text-[24px] pb-[16px]"/>
                    <Paragraph text="Check Out Daily Deals and Promotion on hotels. Easy & Fast Booking." className="font-poppins text-[16px] w-[342px] pb-[172px]"/>
                    
                    <ul className='flex gap-7'>
                        <List text="Facebook"/>
                        <List text="Instagram"/>
                        <List text="Twitter"/>
                    </ul>
                </div>
                </Flex>
            </div>
            </Slider>

            
        </Container>
    </section>
  )
}

export default Tour