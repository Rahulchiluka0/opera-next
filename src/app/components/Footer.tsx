import React from 'react'
import logo from "../../../public/header-logo.png"
import map from "../../../public/map.png"
import call from "../../../public/call.png"
import mail from "../../../public/mail.png"
import right from "../../../public/right.png"
import Facebook from "../../../public/facebook.png"
import Twitter from "../../../public/twitter.png"
import LinkedIn from "../../../public/linkedin.png"
import Instagram from "../../../public/instagram.png"
import Youtube from "../../../public/youtube.png"
import Image from 'next/image'

const Footer = () => {
    return (
        <>

            <div className='footer bg-[#1F1F1F] pb-10 pt-28 relative'>
                <div className="footer-content w-[75%] mx-auto flex mobile:flex-col mobile:gap-5 lg:gap-0 lg:flex-row justify-between lg:items-end">
                    <div className="footer-left flex flex-col gap-6">
                        <Image src={logo} alt='logo' />
                        <div className='flex gap-4 items-start'>
                            <Image src={map} alt='map' />
                            <p className='text-[#898989] text-lg'>Shreeji plaza, 201, Main Rd,<br /> Valkeshwari, Park Colony, Jamnagar,<br /> Gujarat 361008</p>
                        </div>
                        <div className='flex gap-4 items-start'>
                            <Image src={call} alt='map' />
                            <p className='text-[#898989] text-lg'>(+91) 89802 30024</p>
                        </div>
                        <div className='flex gap-4 items-start'>
                            <Image src={mail} alt='map' />
                            <p className='text-[#898989] text-lg'>info@operaenergy.in</p>
                        </div>
                    </div>
                    <div className='footer-middle flex flex-col gap-3'>
                        <h1 className='text-white text-2xl font-semibold'>Quick Link</h1>
                        <div className='flex mobile:flex-col lg:flex-row lg:gap-24'>
                            <div>
                                <ul>
                                    <li className="flex gap-3">
                                        <Image src={right} alt='right' />
                                        <p className="text-[#898989] text-lg">About</p>
                                    </li>
                                    <li className="flex gap-3">
                                        <Image src={right} alt='right' />
                                        <p className="text-[#898989] text-lg">Turn Key EPC Services</p>
                                    </li>
                                    <li className="flex gap-3">
                                        <Image src={right} alt='right' />
                                        <p className="text-[#898989] text-lg">Executed Project</p>
                                    </li>
                                    <li className="flex gap-3">
                                        <Image src={right} alt='right' />
                                        <p className="text-[#898989] text-lg">Captive / Group Captive</p>
                                    </li>
                                    <li className="flex gap-3">
                                        <Image src={right} alt='right' />
                                        <p className="text-[#898989] text-lg">Career</p>
                                    </li>
                                    <li className="flex gap-3">
                                        <Image src={right} alt='right' />
                                        <p className="text-[#898989] text-lg">Blog</p>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className="flex gap-3 ">
                                        <Image src={right} alt='right' className='flex items-center' />
                                        <p className="text-[#898989] text-lg">Capex (EPC Model)</p>
                                    </li>
                                    <li className="flex gap-3">
                                        <Image src={right} alt='right' />
                                        <p className="text-[#898989] text-lg">Captive Project Pipeline</p>
                                    </li>
                                    <li className="flex gap-3">
                                        <Image src={right} alt='right' />
                                        <p className="text-[#898989] text-lg">Energy Storage</p>
                                    </li>
                                    <li className="flex gap-3">
                                        <Image src={right} alt='right' />
                                        <p className="text-[#898989] text-lg">Third-Party Power Sale</p>
                                    </li>
                                    <li className="flex gap-3">
                                        <Image src={right} alt='right' />
                                        <p className="text-[#898989] text-lg">Our Clients</p>
                                    </li>
                                    <li className="flex gap-3">
                                        <Image src={right} alt='right' />
                                        <p className="text-[#898989] text-lg">Privacy Policy</p>
                                    </li>
                                    <li className="flex gap-3">
                                        <Image src={right} alt='right' />
                                        <p className="text-[#898989] text-lg">Contact Us</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='footer-right'>
                        <ul className='flex flex-col gap-3'>
                            <li className="flex gap-4">
                                <Image src={Facebook} alt='Facebook' />
                                <p className="text-[#898989] text-lg">Facebook</p>
                            </li>
                            <li className="flex gap-4">
                                <Image src={Twitter} alt='Twitter' />
                                <p className="text-[#898989] text-lg">Twitter</p>
                            </li>
                            <li className="flex gap-4">
                                <Image src={LinkedIn} alt='LinkedIn' />
                                <p className="text-[#898989] text-lg">LinkedIn</p>
                            </li>
                            <li className="flex gap-4">
                                <Image src={Instagram} alt='Instagram' />
                                <p className="text-[#898989] text-lg">Instagram</p>
                            </li>
                            <li className="flex gap-4">
                                <Image src={Youtube} alt='Youtube' />
                                <p className="text-[#898989] text-lg">Youtube</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-top mobile:hidden w-[75%] mx-auto bg-[#D8F6CF] lg:flex lg:justify-between rounded-[40px] py-10 px-10 items-center absolute -top-16 right-56">
                    <p className='text-5xl font-medium'>We Value Our <span className='font-bold'> Customers</span></p>
                    <button className='text-white text-lg font-semibold bg-[#009846] px-8 py-4 rounded-xl'>
                        Get The Quote
                    </button>
                </div>
            </div>
            <div className="footer-bottom bg-[#009846]">
                <p className='text-white text-center py-5'>Copyright © 2022 <span className='underline'>Operaenergy.</span>  All Rights Reserved.Powered by <span className='underline'>Sauratech</span></p>
            </div>
        </>
    )
}

export default Footer