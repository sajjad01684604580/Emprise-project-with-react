import React from 'react'
import Container from '../../Container'
import Paragraph from '../../Paragraph'

const Search = () => {
  return (
    <section className='py-[40px] '>
        <Container>
            <div className="w-[100%] border py-[30px] rounded-lg pl-[24px] pr-[56px] flex justify-between">
                <div className="">
                    <Paragraph text="Showing 1 - 10 of 2037 results for “cultural”" className="font-poppins font-medium text-lg"/>
                </div>
                <div className="flex gap-4">
                    <Paragraph text="Sort by:" className="font-poppins font-normal text-lg"/>
                    <select name="" id="" className='bg-white font-poppins font-semibold text-lg'>
                        <option value="" className="bg-white">Most Popular</option>
                        <option value="" className="bg-white">Most Popular</option>
                        <option value="" className="bg-white">Most Popular</option>
                        <option value="" className="bg-white">Most Popular</option>
                    </select>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Search