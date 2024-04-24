import Image from 'next/image'
import React from 'react'
import img from "../../../../public/who-img.png"
import img2 from "../../../../public/who-2.png"
import img3 from "../../../../public/culture.png"
import img4 from "../../../../public/product.png"

const Whoarewe = () => {
    return (
        <div className='whoarewe w-[80%] mx-auto flex mobile:flex-col lg:flex-row gap-16 py-24 my-24'>
            <div className='whoarewe-left'>
                <Image src={img} alt='img' />
            </div>
            <div className='whoarewe-right flex flex-col gap-5'>
                <div className='flex'>
                    <Image src={img2} alt='img' />
                    <p>WHO WE ARE</p>
                </div>
                <h1 className='text-5xl font-medium'>The Best Solution Provider <br />
                    For <span className='font-bold'>Green Energy</span></h1>
                    <p className='text-[#787878]'>We have a team of domain experts who strive for excellence in the renewable <br /> energy generation sector...</p>

                    <div className='flex mobile:flex-col md:flex-row gap-12'>
                        <div className='flex flex-col gap-5'>
                            <Image src={img3} alt='img'/>
                            <h1 className='text-2xl font-semibold text-[#1F1F1F]'>1. Our Culture</h1>
                            <p className='text-[#787878]'>Our passion to work with the client <br /> satisfaction is the source of our success. We 100% believe in ethics...</p>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <Image src={img4} alt='img'/>
                            <h1 className='text-2xl font-semibold text-[#1F1F1F]'>2. Our Productivity</h1>
                            <p className='text-[#787878]'>We take pride in successfully executing <br /> 1.30 GW+ and pipelining renewable energy projects of capacity of 1GW in next...</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Whoarewe