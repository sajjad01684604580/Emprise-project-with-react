import React from 'react'
import Container from '../Container'
import Image from '../Image'
import logo from '../../assets/logo.png'
import List from '../List'
import Flex from  '../Flex'
import { FaSearch } from "react-icons/fa";
import Button from '../Button'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className='py-8'>
        <Container>
            <Flex className="items-center">
            <div className="w-1/4">
                <Link to="/">
                <Image src={logo}/>
                </Link>
            </div>
            <div className="w-1/2 flex items-center gap-12 ">
                <ul className='flex gap-12'>
                    <Link to="/">
                    <List text="Destination" className="font-poppins font-normal text-xl"/>
                    </Link>

                    <Link to="/activities">
                    <List text="Activities" className="font-poppins font-normal text-xl"/>
                    </Link>
                    
                    <Link to="/Specials">
                    <List text="Specials" className="font-poppins font-normal text-xl"/>
                    </Link>
                  
                    
                </ul>
                <FaSearch />
                
            </div>
            <div className="w-1/4 text-right">
                <Button text="Login"/>
                <Button text=" Sign up" className="ml-8"/>
            </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar