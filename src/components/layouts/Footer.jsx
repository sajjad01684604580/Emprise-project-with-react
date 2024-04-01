import React from 'react'
import Container from '../Container'
import Image from '../Image'
import footerone from '../../assets/footerone.png'
import footertwo from '../../assets/footertwo.png'
import Paragraph from '../Paragraph'
import Heading from '../Heading'
import footerthree from '../../assets/footerthree.png'
import List from '../List'
import message from '../../assets/message.png'
import paymenticon from '../../assets/paymenticon.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
        <Container>
            <div className="flex justify-between pb-[41px]">
            <div className="flex gap-16">
                <div className="flex gap-4">
                    <Image src={footerone}/>
                    <Paragraph text="QUICK LINKS" className="font-poppins font-semibold text-[24px] text-[#333]"/>
                </div>
                <div className="">
                    <Paragraph text="Explore more categories" className="font-poppins text-[24px] text-[#546179]"/>
                </div>
            </div>
            <div className="">
                <Paragraph text="0123-456-324-54   |   hello@entrada.com" className="font-poppins text-[24px] text-[#212529]"/>
            </div>
            </div>

            <div className="flex justify-between pt-[24px] pb-[16px] border-y">
            <div className="">
                <Paragraph text="Get in touch" className="text-2xl text-advencolor font-poppins pb-[8px]"/>
                <Heading text="Adventures Calling " as="h3" className="font-poppins font-medium text-[40px]"/>
                <Heading text="You Guys!" as="h3" className="font-poppins font-medium text-[40px]"/>
            </div>
            <div className="flex gap-6">
                <div className="">
                    <Image src={footertwo}/>
                </div>
                <div className="">
                    <Paragraph text="Our Offices" className="font-poppins font-normal text-2xl pb-4"/>
                    <Paragraph text="Nepal, USA, India" className="font-poppins font-medium text-2xl text-black pb-[32px]"/>
                    <Image src={footerthree}/>
                </div>
            </div>
            </div>

            <div className="flex pt-[32px] pb-[120px]">
                <div className="w-[270px]">
                    <Paragraph text="Services"  className="font-poppins font-2xl font-medium text-advencolor pb-[16px]"/>
                    <ul>
                        <Link>
                        <List text="Budget Tours" className="font-poppins font-normal text-base text-[#546179] pb-2"/>
                        </Link>
                        <List text="Expert Insight" className="font-poppins font-normal text-base text-[#546179] pb-2"/>
                        <List text="Independent" className="font-poppins font-normal text-base text-[#546179] pb-2"/>
                        <List text="Luxury Tours" className="font-poppins font-normal text-base text-[#546179] pb-2"/>
                        <List text="Safety Tips" className="font-poppins font-normal text-base text-[#546179] pb-2"/>
                        <List text="Tips n Tricks" className="font-poppins font-normal text-base text-[#546179] pb-2"/>
                    </ul>
                </div>
                <div className="w-[270px]">
                <Paragraph text="Adventures"  className="font-poppins font-2xl font-medium text-advencolor pb-[16px]"/>
                <ul>
                        <List text="Beach Activity" className="font-poppins font-normal text-base text-[#546179] pb-2"/>
                        <List text="Bungee Jump" className="font-poppins font-normal text-base text-[#546179] pb-2"/>
                        <List text="City Tour" className="font-poppins font-normal text-base text-[#546179] pb-2"/>
                        <List text="Hiking Trips" className="font-poppins font-normal text-base text-[#546179] pb-2"/>
                        <List text="Jungle Safari" className="font-poppins font-normal text-base text-[#546179] pb-2"/>
                        <List text="Night City Walk" className="font-poppins font-normal text-base text-[#546179] pb-2"/>
                    </ul>
                </div>
                <div className="w-[412px]">
                <Paragraph text="Country"  className="font-poppins font-2xl font-medium text-advencolor pb-[16px]"/>
                <ul >
                        <List text="USA" className="font-poppins font-normal text-base text-[#546179] pb-2"/>
                        <List text="Australia" className="font-poppins font-normal text-base text-[#546179] pb-2"/>
                        <List text="South Africa" className="font-poppins font-normal text-base text-[#546179] pb-2"/>
                        <List text="West Indies" className="font-poppins font-normal text-base text-[#546179] pb-2"/>
                        <List text="New Zealand" className="font-poppins font-normal text-base text-[#546179] pb-2"/>
                        <List text="Srilanka" className="font-poppins font-normal text-base text-[#546179] pb-2"/>
                    </ul>
                </div>
                <div className="w-[648px]">
                <Paragraph text="Get In Touch"  className="font-poppins font-2xl font-medium text-advencolor pb-[16px]"/>
                <div className="flex gap-7 ">
                
                <Heading text="Let’s Talk" as="h2" className="font-poppins font-medium text-[40px] pb-[40px]"/>
                
                <div className="">
                <Image src={footerthree} className="pt-[25px]"/>
                </div>
                </div>
                <div className="relative">
                    <Image src={message} className="absolute z-10 top-1/2 left-4 -translate-y-1/2 "/>
                    <input type="text" placeholder='Enter your email' className=' outline-none  font-poppins text-[18px] pl-[69px] pr-[230px] py-[31px] drop-shadow-xl'/>
                    <button className='font-poppins text-2xl text-white bg-advencolor py-[26px] px-[32px] absolute right-0 top-[5px] '>Send Now!</button>
                    </div>
                    <Paragraph text="Expect a reply in 2-3 working days" className="font-poppins font-normal text-base pt-[48px]"/>
                </div>
            </div>

            <div className="flex justify-between items-center pb-[24px] border-b">
                <div className="">
                    <Paragraph text="Privacy Policy" className=""/>
                </div>
                <div className="">
                    <ul className='flex gap-5'>
                        <Link to="/">
                        <List text="Linkedin /" className="font-poppins font-normal text-xl"/>
                        </Link>
                        <Link to="/">
                        <List text="Facebook /" className="font-poppins font-normal text-xl"/>
                        </Link>
                        <Link to="/">
                        <List text="Instagram" className="font-poppins font-normal text-xl"/>
                        </Link>
                    </ul>
                </div>
            </div>

            <div className="flex justify-between pt-[24px] pb-[31px]">
                <div className="">
                    <Paragraph text="2016-2021 © Emprise" className="font-poppins text-base"/>
                </div>
                <div className="">
                    <Image src={paymenticon}/>
                </div>
            </div>
        </Container>
    </footer>
  )
}

export default Footer