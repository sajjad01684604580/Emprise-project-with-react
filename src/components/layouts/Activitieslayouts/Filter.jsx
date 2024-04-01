import React from 'react'
import Container from '../../Container'
import Image from '../../Image'
import filterone from '../../../assets/filterone.png'
import filtertwo from '../../../assets/filtertwo.png'
import filterthree from '../../../assets/filterthree.png'
import filterfour from '../../../assets/filterfour.png'
import filterfive from '../../../assets/filterfive.png'
import filtersix from '../../../assets/filtersix.png'
import Paragraph from '../../Paragraph'
const Filter = () => {
  return (
    <section className='pb-[48px]'>
        <Container>
            <div className="flex justify-between">
                <div className="w-[240px] py-[16px] px-[18px] border rounded-lg flex items-center gap-3">
                    <Image src={filterone}/>
                    <Paragraph text="Discounted Deals" className="font-poppins text-base"/>
                </div>
                
                <div className="w-[240px] py-[16px] px-[18px] border rounded-lg flex items-center gap-3">
                    <Image src={filtertwo}/>
                    <Paragraph text="Discounted Deals" className="font-poppins text-base"/>
                </div>

                <div className="w-[240px] py-[16px] px-[18px] border rounded-lg flex items-center gap-3">
                    <Image src={filterthree}/>
                    <Paragraph text="Discounted Deals" className="font-poppins text-base"/>
                </div>

                <div className="w-[240px] py-[16px] px-[18px] border rounded-lg flex items-center gap-3">
                    <Image src={filterfour}/>
                    <Paragraph text="Discounted Deals" className="font-poppins text-base"/>
                </div>

                <div className="w-[240px] py-[16px] px-[18px] border rounded-lg flex items-center gap-3">
                    <Image src={filterfive}/>
                    <Paragraph text="Discounted Deals" className="font-poppins text-base"/>
                </div>

                <div className="w-[240px] py-[16px] px-[18px] border rounded-lg flex items-center gap-3">
                    <Image src={filtersix}/>
                    <Paragraph text="Discounted Deals" className="font-poppins text-base"/>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Filter