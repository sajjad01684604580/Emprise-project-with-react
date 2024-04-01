import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Button from '../Button'

const World = () => {
  return (
    <section className='pb-[134px]'>
        <Container>
            <div className="bg-[#28B0A6] rounded-lg text-center">
                <Heading text="Tour the World from Your Couch with #ExperienceLive!" as="h2" className="font-poppins font-medium text-[56px] text-white pt-[86px] pb-[28px] px-72"/>
                <Paragraph text="To kickstart your digital adventures with Entrada" className="font-poppins font-normal text-[32px] text-[#BCF0EC] pb-[56px] "/>
                <Button text="Check All" className="text-[#28B0A6] hover:bg-green-500 bg-white mb-[42px]"/>
            </div>
        </Container>
    </section>
  )
}

export default World