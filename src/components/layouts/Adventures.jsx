import React from 'react'
import Container from '../Container'
import Image from '../Image'
import advenone from '../../assets/advenone.png'
import Paragraph from '../Paragraph'
import Heading from '../Heading'
import message from '../../assets/message.png'
import Flex from '../Flex'
const Adventures = () => {
  return (
    <section className='pb-[136px]'>
        <Container>
            <div className="flex justify-between">
                <div className="w-1/2">
                    <Image src={advenone}/>
                </div>
                <div className="w-1/2 ">
                    <Paragraph text="Subscribe For Offers" className="font-poppins font-normal text-2xl text-advencolor pt-[38px] pb-[8px]"/>
                    <Heading text="Adventures Calling You Guys!" as="h3" className="pb-[24px] font-poppins font-semibold text-[48px] pr-64 "/>
                    <Paragraph text="The Brilliant reasons Entrada should be your one-stop-shop!" className="font-poppins font-normal text-[24px] pr-72 pb-[72px]"/>
                   
                  
                    <div className="relative">
                    <Image src={message} className="absolute z-10 top-1/2 left-4 -translate-y-1/2 "/>
                    <input type="text" placeholder='Enter your email' className=' outline-none  font-poppins text-[18px] pl-[69px] pr-[230px] py-[31px] drop-shadow-xl'/>
                    <button className='font-poppins text-2xl text-white bg-advencolor py-[26px] px-[32px] absolute right-[166px] top-[5px] '>Send Now!</button>
                    </div>
                    <Paragraph text="Expect a reply in 2-3 working days" className="font-poppins font-normal text-base pt-[48px]"/>
                </div>
                    
                </div>
                
           
        </Container>
    </section>
  )
}

export default Adventures