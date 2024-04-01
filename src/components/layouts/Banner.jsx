import React, { useEffect ,useState} from 'react'
import Container from '../Container'
import Image from '../Image'
import banner from '../../assets/Hero.png'
import {Link} from "react-router-dom"
import Paragraph from '../Paragraph'
import { IoLocationOutline } from "react-icons/io5";
import axios from 'axios';
import bannericon from '../../assets/bannericon.png'
import { BsCalendarDateFill } from "react-icons/bs";
import { TbCircleDot } from "react-icons/tb";
const Banner = () => {
  let [all, allset] = useState([])
  useEffect(()=>{
    async function all(){
      let data = await axios.get("https://restcountries.com/v3.1/all")
      allset(data.data)
    }
    all()
  },[])
  return (
    
    <section className='pt-14 pb-[136px]'>
        <Container>
            
            <div className="relative">
            <Link to="">
            <Image src={banner}/>
            </Link>
            <div className="w-[1328px] bg-white drop-shadow-xl py-[32px] px-[72px] flex rounded-lg absolute bottom-[-90px] right-[134px] ">
              <div className="w-[330px] border-r">
                <Paragraph text="Location" className="font-poppins font-semibold text-[28px] text-[#212529] pb-[16px]"/>
                <div className="flex gap-8 items-center">
                <select name="" id="" className='bg-white font-poppins font-normal text-[18px] text-[#99A3AD] border-b-2'>
                <option value="">Enter your destination</option>
                  {all.map((item)=>
                  <option>{item.region}</option>
                  )}
                  
                </select>
                <IoLocationOutline className='text-[20px]'/>
                </div>
              </div>

              <div className="w-[330px] border-r pl-[64px]">
              <Paragraph text="Activity" className="font-poppins font-semibold text-[28px] text-[#212529] pb-[16px]"/>
                <div className="flex gap-8 items-center">
                <select name="" id="" className='bg-white font-poppins font-normal text-[18px] text-[#99A3AD] border-b-2'>
                <option value="">Bungee jump</option>
                  
                </select>
                <TbCircleDot className='text-[20px]'/>
              
                </div>
              </div>

              <div className="w-[530px] pl-[64px] flex justify-between">
              <div className="">
              <Paragraph text="Date" className="font-poppins font-semibold text-[28px] text-[#212529] pb-[16px]"/>
                <div className="flex gap-8 items-center">
                <select name="" id="" className='bg-white font-poppins font-normal text-[18px] text-[#99A3AD] border-b-2'>
                <option value="">Set date</option>
                  
                </select>
                <BsCalendarDateFill className='text-[20px]'/>
                
                </div>
              </div>
              <div className="">
                <Image src={bannericon}/>
              </div>
              </div>
            </div>
            </div>
        </Container>
    </section>
  )
}

export default Banner