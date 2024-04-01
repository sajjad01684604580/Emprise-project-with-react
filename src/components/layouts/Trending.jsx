import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Image from '../Image'
import trendone from '../../assets/trendone.png'
import trendtwo from '../../assets/trendtwo.png'
import trendthree from '../../assets/trendthree.png'
import { CiHeart } from "react-icons/ci";
import Flex from "../Flex"
import Stars from "../../assets/Stars.png"
import smclock from "../../assets/smclock.png"
import mark from "../../assets/mark.png"
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import PrevArrow from '../PrevArrow'
import NextArrow from '../NextArrow'
const Trending = () => {

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
                <Heading text="Trending 2021" as="h2" className="pb-4" />
                <Paragraph text="Sost Brilliant reasons Entrada should be your one-stop-shop!" className="pb-[64px]"/>
            </div>

            <Slider {...settings}>
                
            <div className="p-4 border rounded-lg">
                <div className="">
                    <Image src={trendone}/>
                </div>
                <div className="py-8 pr-8 pl-3">
                    <Flex className="justify-between ">
                    <div className="">
                        <Paragraph text="Mountain Hiking Tour" className="font-poppins font-semibold text-2xl text-black pb-2"/>
                        <Paragraph text="Hiking Tour | Stoke on Trent" className="font-poppins text-base text-[#99A3AD] pb-[28px]"/>
                        <Paragraph text="from" className="font-poppins text-sm"/>
                    </div>
                    <div className="pb-[28px]">
                    <CiHeart className='text-[28px] text-[#546179] '/>
                    </div>
                    </Flex>
                    
                    <Flex className="justify-between pb-[40px]">
                        <div className="">
                            
                            <Paragraph text="$895.00" className="font-poppins font-semibold text-[32px] text-black py-3"/>
                            
                            <Paragraph text="*Price varies" className="font-poppins text-sm"/>
                        </div>
                        <div className="">
                            <Image src={Stars}/>
                            <Paragraph text="4.7 (108)" className="font-poppins text-sm pt-2"/>
                        </div>
                    </Flex>

                    <Flex className="gap-3 items-center pb-4">
                        <div className="">
                        <Image src={smclock} className=""/>
                        </div>
                        <div className="">
                            <Paragraph text="7 Days" className="font-poppins font-medium text-base "/>
                        </div>
                    </Flex>

                    <Flex className="gap-5">
                    <div className="">
                    <Flex className="items-center gap-4">
                        <div className="">
                            <Image src={mark}/>
                        </div>
                        <div className="">
                            <Paragraph text="Free Cancellation" className="font-poppins text-base"/>
                        </div>
                    </Flex>

                    </div>
                    <div className="">
                    <Flex className="items-center gap-4">
                        <div className="">
                            <Image src={mark}/>
                        </div>
                        <div className="">
                            <Paragraph text="Free Cancellation" className="font-poppins text-base"/>
                        </div>
                    </Flex>
                    </div>
                    </Flex>

                </div>
            </div>
            
                
            <div className="p-4 border rounded-lg">
                <div className="">
                    <Image src={trendtwo}/>
                </div>
                <div className="py-8 pr-8 pl-3">
                    <Flex className="justify-between ">
                    <div className="">
                        <Paragraph text="Mountain Hiking Tour" className="font-poppins font-semibold text-2xl text-black pb-2"/>
                        <Paragraph text="Hiking Tour | Stoke on Trent" className="font-poppins text-base text-[#99A3AD] pb-[28px]"/>
                        <Paragraph text="from" className="font-poppins text-sm"/>
                    </div>
                    <div className="pb-[28px]">
                    <CiHeart className='text-[28px] text-[#546179] '/>
                    </div>
                    </Flex>
                    
                    <Flex className="justify-between pb-[40px]">
                        <div className="">
                            
                            <Paragraph text="$895.00" className="font-poppins font-semibold text-[32px] text-black py-3"/>
                            
                            <Paragraph text="*Price varies" className="font-poppins text-sm"/>
                        </div>
                        <div className="">
                            <Image src={Stars}/>
                            <Paragraph text="4.7 (108)" className="font-poppins text-sm pt-2"/>
                        </div>
                    </Flex>

                    <Flex className="gap-3 items-center pb-4">
                        <div className="">
                        <Image src={smclock} className=""/>
                        </div>
                        <div className="">
                            <Paragraph text="7 Days" className="font-poppins font-medium text-base "/>
                        </div>
                    </Flex>

                    <Flex className="gap-5">
                    <div className="">
                    <Flex className="items-center gap-4">
                        <div className="">
                            <Image src={mark}/>
                        </div>
                        <div className="">
                            <Paragraph text="Free Cancellation" className="font-poppins text-base"/>
                        </div>
                    </Flex>

                    </div>
                    <div className="">
                    <Flex className="items-center gap-4">
                        <div className="">
                            <Image src={mark}/>
                        </div>
                        <div className="">
                            <Paragraph text="Free Cancellation" className="font-poppins text-base"/>
                        </div>
                    </Flex>
                    </div>
                    </Flex>

                </div>
            </div>
                
            <div className="p-4 border rounded-lg">
                <div className="">
                    <Image src={trendthree}/>
                </div>
                <div className="py-8 pr-8 pl-3">
                    <Flex className="justify-between ">
                    <div className="">
                        <Paragraph text="Mountain Hiking Tour" className="font-poppins font-semibold text-2xl text-black pb-2"/>
                        <Paragraph text="Hiking Tour | Stoke on Trent" className="font-poppins text-base text-[#99A3AD] pb-[28px]"/>
                        <Paragraph text="from" className="font-poppins text-sm"/>
                    </div>
                    <div className="pb-[28px]">
                    <CiHeart className='text-[28px] text-[#546179] '/>
                    </div>
                    </Flex>
                    
                    <Flex className="justify-between pb-[40px]">
                        <div className="">
                            
                            <Paragraph text="$895.00" className="font-poppins font-semibold text-[32px] text-black py-3"/>
                            
                            <Paragraph text="*Price varies" className="font-poppins text-sm"/>
                        </div>
                        <div className="">
                            <Image src={Stars}/>
                            <Paragraph text="4.7 (108)" className="font-poppins text-sm pt-2"/>
                        </div>
                    </Flex>

                    <Flex className="gap-3 items-center pb-4">
                        <div className="">
                        <Image src={smclock} className=""/>
                        </div>
                        <div className="">
                            <Paragraph text="7 Days" className="font-poppins font-medium text-base "/>
                        </div>
                    </Flex>

                    <Flex className="gap-5">
                    <div className="">
                    <Flex className="items-center gap-4">
                        <div className="">
                            <Image src={mark}/>
                        </div>
                        <div className="">
                            <Paragraph text="Free Cancellation" className="font-poppins text-base"/>
                        </div>
                    </Flex>

                    </div>
                    <div className="">
                    <Flex className="items-center gap-4">
                        <div className="">
                            <Image src={mark}/>
                        </div>
                        <div className="">
                            <Paragraph text="Free Cancellation" className="font-poppins text-base"/>
                        </div>
                    </Flex>
                    </div>
                    </Flex>

                </div>
            </div>
                
            <div className="p-4 border rounded-lg">
                <div className="">
                    <Image src={trendthree}/>
                </div>
                <div className="py-8 pr-8 pl-3">
                    <Flex className="justify-between ">
                    <div className="">
                        <Paragraph text="Mountain Hiking Tour" className="font-poppins font-semibold text-2xl text-black pb-2"/>
                        <Paragraph text="Hiking Tour | Stoke on Trent" className="font-poppins text-base text-[#99A3AD] pb-[28px]"/>
                        <Paragraph text="from" className="font-poppins text-sm"/>
                    </div>
                    <div className="pb-[28px]">
                    <CiHeart className='text-[28px] text-[#546179] '/>
                    </div>
                    </Flex>
                    
                    <Flex className="justify-between pb-[40px]">
                        <div className="">
                            
                            <Paragraph text="$895.00" className="font-poppins font-semibold text-[32px] text-black py-3"/>
                            
                            <Paragraph text="*Price varies" className="font-poppins text-sm"/>
                        </div>
                        <div className="">
                            <Image src={Stars}/>
                            <Paragraph text="4.7 (108)" className="font-poppins text-sm pt-2"/>
                        </div>
                    </Flex>

                    <Flex className="gap-3 items-center pb-4">
                        <div className="">
                        <Image src={smclock} className=""/>
                        </div>
                        <div className="">
                            <Paragraph text="7 Days" className="font-poppins font-medium text-base "/>
                        </div>
                    </Flex>

                    <Flex className="gap-5">
                    <div className="">
                    <Flex className="items-center gap-4">
                        <div className="">
                            <Image src={mark}/>
                        </div>
                        <div className="">
                            <Paragraph text="Free Cancellation" className="font-poppins text-base"/>
                        </div>
                    </Flex>

                    </div>
                    <div className="">
                    <Flex className="items-center gap-4">
                        <div className="">
                            <Image src={mark}/>
                        </div>
                        <div className="">
                            <Paragraph text="Free Cancellation" className="font-poppins text-base"/>
                        </div>
                    </Flex>
                    </div>
                    </Flex>

                </div>
            </div>

            </Slider>

            
        </Container>
    </section>
  )
}

export default Trending