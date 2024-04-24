import Image from 'next/image'
import React from 'react'
import img from "../../../../public/smart-2.png"
import img2 from "../../../../public/blog1.png"
import img3 from "../../../../public/blog2.png"
import arrow from "../../../../public/Leftarrow.png"
import Link from 'next/link'


const Blog = () => {
    return (
        <div className='blog w-[80%] mx-auto flex justify-center items-center flex-col gap-7 py-24'>
            <div className='flex justify-center items-center gap-5'>
                <Image src={img} alt='img' />
                <p className=' text-2xl italic'>OUR BLOG</p>
            </div>
            <h1 className='text-center text-5xl'>Our Latest <span className='font-bold'>Blog</span></h1>
            <div className='flex mobile:flex-col lg:flex-row gap-7 my-14'>
                <div className='flex mobile:flex-col lg:flex-row gap-7 items-center bg-[#EDEDED] border-[2px] rounded-lg'>
                    <Image src={img2} alt='img' />
                    <div className='flex flex-col mobile:px-3 lg:px-0 gap-6'>
                        <p className='text-[#666666] text-lg'>21, January, 2023</p>
                        <h1 className='text-[#599537] text-2xl font-semibold'>Lorem Ipsum simply</h1>
                        <p className='text-[#666666] text-lg'>It is a long established fact that a reader will be diable content of a page.</p>
                        <Link href="#" className='text-[#1F1F1F] font-medium'>Read More <span>&#8702;</span> </Link>
                    </div>
                    <Image src={arrow} alt='img' className='absolute left-40 hidden lg:block' />

                </div>
                <div className='flex mobile:flex-col lg:flex-row gap-7 items-center bg-[#EDEDED] border-[2px] rounded-lg'>
                    <Image src={img3} alt='img' />
                    <div className='flex flex-col mobile:px-3 lg:px-0 gap-6'>
                        <p className='text-[#666666] text-lg'>21, January, 2023</p>
                        <h1 className='text-[#599537] text-2xl font-semibold'>Hydrogen Energy</h1>
                        <p className='text-[#666666] text-lg'>It is a long established fact that a reader will be diable content of a page.</p>
                        <Link href="#" className='text-[#1F1F1F] font-medium'>Read More <span>&#8702;</span> </Link>
                    </div>
                    <Image src={arrow} alt='img' className='absolute right-40 rotate-180 hidden lg:block' />
                </div>
            </div>
            <div>
                <button className='text-white text-lg font-semibold  bg-[#009846] px-8 py-3 rounded-xl'>
                    Show More
                </button>
            </div>
        </div>
    )
}

export default Blog