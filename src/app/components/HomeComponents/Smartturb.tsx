import Image from 'next/image'
import React from 'react'
import img from "../../../../public/smart-2.png"
import img2 from "../../../../public/proj.png"
import img3 from "../../../../public/staff.png"
import img4 from "../../../../public/exp.png"
import img5 from "../../../../public/happy.png"
import Fan from "../../../../public/Fan.png"

const Smartturb = () => {
    return (
        <div className='smartturb py-24'>
            <div className="smartturb-content w-[80%] mx-auto flex flex-col gap-8">
                <div className='flex justify-center items-center gap-6'>
                    <Image src={img} alt='img' />
                    <p className='text-white text-2xl italic'>SMART TURBINE</p>
                </div>
                <p className='text-white text-lg text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className='flex mobile:flex-col lg:flex-row justify-between mobile:gap-5 lg:gap-0 items-center'>
                    <div className='flex flex-col gap-7'>
                        <div className="card flex items-center bg-white p-8 rounded-xl gap-4">
                            <Image src={img2} alt='img' />
                            <div className="flex flex-col gap-3">
                                <p className='text-5xl font-bold'>110+</p>
                                <p className='text-lg font-medium text-[#898989]'>Project Completed</p>
                            </div>
                        </div>
                        <div className="card flex items-center bg-white p-9 rounded-xl gap-4">
                            <Image src={img4} alt='img' />
                            <div className="flex flex-col gap-3">
                                <p className='text-5xl font-bold'>11+</p>
                                <p className='text-lg font-medium text-[#898989]'>Years Of Experience</p>
                            </div>
                        </div>
                    </div>
                    <Image src={Fan} alt='fan' className='hover:rotate-[1720deg] duration-[2s]'/>
                    <div className='flex flex-col gap-7'>
                        <div className="card flex items-center bg-white p-8 rounded-xl gap-4">
                            <Image src={img3} alt='img' />
                            <div className="flex flex-col gap-3">
                                <p className='text-5xl font-bold'>90+</p>
                                <p className='text-lg font-medium text-[#898989]'>Professional Staff</p>
                            </div>
                        </div>
                        <div className="card flex items-center bg-white p-9 rounded-xl gap-4">
                            <Image src={img5} alt='img' />
                            <div className="flex flex-col gap-3">
                                <p className='text-5xl font-bold'>170+</p>
                                <p className='text-lg font-medium text-[#898989]'>Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Smartturb