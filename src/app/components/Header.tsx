import React from 'react'
import logo from "../../../public/header-logo.png"
import flag from "../../../public/us-flag.png"
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='header w-[90%] mx-auto flex items-start mobile:flex-col  lg:flex-row md:items-center justify-between'>
        <div>
            <Image src={logo} alt='logo'/>
        </div>
        <div>
            <ul className='flex flex-col md:flex-row gap-4 lg:gap-11'>
                <Link href="#"><li>Home</li></Link>
                <Link href="#"><li>About Us &#x25BC;</li></Link>
                <Link href="#"><li>Businesses &#x25BC;</li></Link>
                <Link href="#"><li>Projects &#x25BC;</li></Link>
                <Link href="#"><li>Career</li></Link>
                <Link href="#"><li>Contact</li></Link>
                <Link href="#"><li>Blog</li></Link>
            </ul>
        </div>
        <div className='flex gap-11'>
            <div className='flex gap-2 items-center'>
                <Image src={flag} alt='flag'/>
                <select name="coun" id="">
                    <option value="ENG">ENG</option>
                    <option value="HIN">HIN</option>
                    <option value="GUJ">GUJ</option>
                </select>
            </div>
            <div>
                <button className='text-white text-lg font-semibold bg-[#009846] px-5 py-1 md:px-8 md:py-3 rounded-xl'>
                    Book Now
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header