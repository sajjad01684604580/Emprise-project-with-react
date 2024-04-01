import React from 'react'
import Container from '../../Container'
import Paragraph from '../../Paragraph'
import Image from '../../Image'
import Flex from '../../Flex'
import { CiHeart } from "react-icons/ci";
import Stars from "../../../assets/Stars.png"
import smclock from "../../../assets/smclock.png"
import mark from "../../../assets/mark.png"
import date from '../../../assets/date.png'
import range from '../../../assets/range.png'
import pricerange from '../../../assets/pricerange.png'
import ratingone from '../../../assets/ratingone.png'
import ratingtwo from '../../../assets/ratingtwo.png'
import ratingthree from '../../../assets/ratingthree.png'
import ratingfour from '../../../assets/ratingfour.png'
import ratingfive from '../../../assets/ratingfive.png'
import resultone from '../../../assets/resultone.png'
import resulttwo from '../../../assets/resulttwo.png'
import resultthree from '../../../assets/resultthree.png'
import resultfour from '../../../assets/resultfour.png'
import resultfive from '../../../assets/resultfive.png'
import resultsix from '../../../assets/resultsix.png'
import resultseven from '../../../assets/resultseven.png'
import resulteight from '../../../assets/resulteight.png'
import resultnine from '../../../assets/resultnine.png'
import resultten from '../../../assets/resultten.png'
const Sidebar = () => {
  return (
    <section className='pb-[136px]'>
        <Container>
            <div className="flex justify-between">
                <div className="w-[424px] h-[1725px] border py-[32px] px-[48px] rounded-lg">
                    <div className="pb-[40px]">
                        <Paragraph text="When are you traveling?" className="font-poppins font-medium text-base text-[#546179] pb-[6px]"/>
                        <div className="border rounded-lg flex justify-between items-center pr-[12px] ">
                            <Paragraph text="Select start date" className="font-poppins text-base py-[12px] pl-[16px] "/>
                            <div className="">
                            <Image src={date}/>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <Paragraph text="Popular Tags" className="font-poppins font-medium text-base text-[#546179] pb-[13px]"/>
                        <div className="flex gap-4 pb-[16px]">
                            <input type="checkbox" className='bg-advencolor' />
                            <label htmlFor="Child Friendly" className="font-poppins text-base text-[#212529]">Child Friendly</label>
                        </div>
                        <div className="flex gap-4 pb-[16px]">
                            <input type="checkbox" />
                            <label htmlFor="Child Friendly" className="font-poppins text-base text-[#212529]">Taking extra precautions</label>
                        </div>
                        <div className="flex gap-4 pb-[16px]">
                            <input type="checkbox" />
                            <label htmlFor="Child Friendly" className="font-poppins text-base text-[#212529]">Away from the chaos</label>
                        </div>
                        <div className="flex gap-4 pb-[16px]">
                            <input type="checkbox" />
                            <label htmlFor="Child Friendly" className="font-poppins text-base text-[#212529]">Epic Challenges</label>
                        </div>
                        <div className="flex gap-4 ">
                            <input type="checkbox" />
                            <label htmlFor="Child Friendly" className="font-poppins text-base text-[#212529]">Virtual Experiences</label>
                        </div>
                    </div>

                    <div className="">
                        <Paragraph text="Price Range" className="font-poppins font-medium text-base pt-[42px] pb-[37px]"/>
                        <div className="">
                            <Image src={range} className="pb-[24px]"/>
                            <Image src={pricerange} className="pb-[40px]"/>
                        </div>
                    </div>

                    <div className="pb-[42px]">
                        <Paragraph text="Duration" className="font-poppins font-medium text-base text-[#546179] pb-[13px]"/>
                        <div className="flex gap-4 pb-[16px]">
                            <input type="checkbox" className='bg-advencolor' />
                            <label htmlFor="Child Friendly" className="font-poppins text-base text-[#212529]">Upto 1 Hour</label>
                        </div>
                        <div className="flex gap-4 pb-[16px]">
                            <input type="checkbox" />
                            <label htmlFor="Child Friendly" className="font-poppins text-base text-[#212529]">1 to 4 Hours</label>
                        </div>
                        <div className="flex gap-4 pb-[16px]">
                            <input type="checkbox" />
                            <label htmlFor="Child Friendly" className="font-poppins text-base text-[#212529]">4 Hours to 1 Day</label>
                        </div>
                        <div className="flex gap-4 pb-[16px]">
                            <input type="checkbox" />
                            <label htmlFor="Child Friendly" className="font-poppins text-base text-[#212529]">1 to 3 Days</label>
                        </div>
                        <div className="flex gap-4 ">
                            <input type="checkbox" />
                            <label htmlFor="Child Friendly" className="font-poppins text-base text-[#212529]">3 Days or More</label>
                        </div>
                    </div>
                    
                    <div className="pb-[42px]">
                        <Paragraph text="Tour Rating" className="font-poppins font-medium text-base text-[#546179] pb-[13px]"/>
                        <div className="flex gap-4 pb-[16px]">
                            <input type="checkbox" className='bg-advencolor' />
                            <Image src={ratingone}/>
                        </div>
                        <div className="flex gap-4 pb-[16px]">
                            <input type="checkbox" />
                            <Image src={ratingtwo}/>
                        </div>
                        <div className="flex gap-4 pb-[16px]">
                            <input type="checkbox" />
                            <Image src={ratingthree}/>
                        </div>
                        <div className="flex gap-4 pb-[16px]">
                            <input type="checkbox" />
                            <Image src={ratingfour}/>
                        </div>
                        <div className="flex gap-4 ">
                            <input type="checkbox" />
                            <Image src={ratingfive}/>
                        </div>
                    </div>

                    <div className="pb-[42px]">
                        <Paragraph text="Age Group" className="font-poppins font-medium text-base text-[#546179] pb-[13px]"/>
                        <div className="flex gap-4 pb-[16px]">
                            <input type="checkbox" className='bg-advencolor' />
                            <label htmlFor="Child Friendly" className="font-poppins text-base text-[#212529]">1 & Up</label>
                        </div>
                        <div className="flex gap-4 pb-[16px]">
                            <input type="checkbox" />
                            <label htmlFor="Child Friendly" className="font-poppins text-base text-[#212529]">3 & Up</label>
                        </div>
                        <div className="flex gap-4 pb-[16px]">
                            <input type="checkbox" />
                            <label htmlFor="Child Friendly" className="font-poppins text-base text-[#212529]">7 & Up</label>
                        </div>
                        <div className="flex gap-4 pb-[16px]">
                            <input type="checkbox" />
                            <label htmlFor="Child Friendly" className="font-poppins text-base text-[#212529]">13 & Up</label>
                        </div>
                        <div className="flex gap-4 ">
                            <input type="checkbox" />
                            <label htmlFor="Child Friendly" className="font-poppins text-base text-[#212529]">18 & Up</label>
                        </div>
                    </div>

                    <div className="">
                        <Paragraph text="Specials" className="font-poppins font-medium text-base text-[#546179] pb-[13px]"/>
                        <div className="flex gap-4 pb-[16px]">
                            <input type="checkbox" className='bg-advencolor' />
                            <label htmlFor="Child Friendly" className="font-poppins text-base text-[#212529]">Discounted deals</label>
                        </div>
                        <div className="flex gap-4 pb-[16px]">
                            <input type="checkbox" />
                            <label htmlFor="Child Friendly" className="font-poppins text-base text-[#212529]">Free Cancellations</label>
                        </div>
                        <div className="flex gap-4 pb-[16px]">
                            <input type="checkbox" />
                            <label htmlFor="Child Friendly" className="font-poppins text-base text-[#212529]">Private Groups</label>
                        </div>
                        <div className="flex gap-4 pb-[16px]">
                            <input type="checkbox" />
                            <label htmlFor="Child Friendly" className="font-poppins text-base text-[#212529]">New on Entrada</label>
                        </div>
                        <div className="flex gap-4 ">
                            <input type="checkbox" />
                            <label htmlFor="Child Friendly" className="font-poppins text-base text-[#212529]">Entrada Specials</label>
                        </div>
                    </div>
                    
                </div>





                <div className="w-[1060px] ">
                <div className="flex justify-between pb-[32px]">
                <div className="p-4 border rounded-lg w-[512px] h-[614px]">
                <div className="">
                    <Image src={resultone}/>
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
                <div className="p-4 border rounded-lg w-[512px] h-[614px]">
                <div className="">
                    <Image src={resulttwo}/>
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
            </div>


                <div className="flex justify-between pb-[32px]">
                <div className="p-4 border rounded-lg w-[512px] h-[614px]">
                <div className="">
                    <Image src={resultthree}/>
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
                <div className="p-4 border rounded-lg w-[512px] h-[614px]">
                <div className="">
                    <Image src={resultfour}/>
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
            </div>


                <div className="flex justify-between pb-[32px]">
                <div className="p-4 border rounded-lg w-[512px] h-[614px]">
                <div className="">
                    <Image src={resultfive}/>
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
                <div className="p-4 border rounded-lg w-[512px] h-[614px]">
                <div className="">
                    <Image src={resultsix}/>
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
            </div>


                <div className="flex justify-between pb-[32px]">
                <div className="p-4 border rounded-lg w-[512px] h-[614px]">
                <div className="">
                    <Image src={resultseven}/>
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
                <div className="p-4 border rounded-lg w-[512px] h-[614px]">
                <div className="">
                    <Image src={resulteight}/>
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
            </div>


                <div className="flex justify-between pb-[32px]">
                <div className="p-4 border rounded-lg w-[512px] h-[614px]">
                <div className="">
                    <Image src={resultnine}/>
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
                <div className="p-4 border rounded-lg w-[512px] h-[614px]">
                <div className="">
                    <Image src={resultten}/>
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
            </div>





                </div>
            </div>
        </Container>
    </section>
  )
}

export default Sidebar