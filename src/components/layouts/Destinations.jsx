import React from 'react'
import Container from '../Container'
import Paragraph from '../Paragraph'
import Heading from '../Heading'
import Image from '../Image'
import topone from '../../assets/topone.png'
import toptwo from '../../assets/toptwo.png'
import topthree from '../../assets/topthree.png'
import topfour from '../../assets/topfour.png'
import topfive from '../../assets/topfive.png'
import topsix from '../../assets/topsix.png'
import Flex from '../Flex'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import PrevArrow from '../PrevArrow'
import NextArrow from '../NextArrow'
const Destinations = () => {

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
                <Heading text="Top Destinations" as="h2" className="pb-[16px]"/>
                <Paragraph text="Sost Brilliant reasons Entrada should be your one-stop-shop!" className="pb-[64px]"/>
            </div>

            <Slider {...settings}>
            <div className="w-[33%]">
                <div className="pb-[32px]">
                    <Image src={topone} className="w-full"/>
                </div>
                <div className="">
                    <Image src={toptwo} className="w-full"/>
                </div>
            </div>

            <div className="w-[33%]">
                <Image src={topthree} className="w-full"/>
            </div>

            <div className="w-[33%]">
                <div className="pb-8">
                    <Image src={topfour} className="w-full"/>
                </div>
                <div className="flex gap-8 ">
                    <Image src={topfive} className="w-full"/>
                    <Image src={topsix} className="w-full"/>
                </div>
            </div>
            </Slider>
            
           
            
            

            

         

           
                
                

                

                
               
           
        </Container>
    </section>
  )
}

export default Destinations