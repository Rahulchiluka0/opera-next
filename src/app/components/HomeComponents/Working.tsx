import React from 'react'
import img from "../../../../public/smart-2.png"
import consult from "../../../../public/consult.png"
import generate from "../../../../public/generate.png"
import store from "../../../../public/store.png"
import flexibly from "../../../../public/flexibly.png"
import arrows from "../../../../public/work-bg.png"
import Image from 'next/image'


const Working = () => {
    return (
        <div className='working w-[80%] mx-auto flex flex-col gap-7 py-24'>
            <div className='flex justify-center items-center gap-6'>
                <Image src={img} alt='img' />
                <p className=' text-2xl italic'>WORKING PROCESS</p>
            </div>
            <h1 className='text-center text-5xl'>4 Way To Achive <span className='font-bold'>Results</span></h1>
            <p className='text-[#787878] text-lg text-center'>Nature driven choice of energy generation is only a way ahead for overturning damage <br /> made due to climate change.</p>

            <div className='flex mobile:flex-col mobile:gap-5 lg:gap-0 lg:flex-row relative'>
                <div className="working-card flex flex-col items-center mobile:gap-4 lg:gap-20 mobile:border-[2px] lg:border-none">
                    <p className='text-2xl font-medium'><span className='text-5xl font-bold'>1</span>Step</p>
                    <div className="flex flex-col items-center gap-5">
                        <Image src={consult} alt='img' />
                        <h1 className='text-2xl font-semibold'>Consult With Us</h1>
                        <p className='text-[#787878] text-lg text-center'>Either we or you may approach for consultation for chosen services in the energy sector.</p>
                    </div>
                </div>
                <div className="working-card flex flex-col items-center mobile:gap-4 lg:gap-20 mobile:border-[2px] lg:border-none">
                    <div className="flex flex-col items-center gap-5">
                        <h1 className='text-2xl font-semibold'> Generate Power</h1>
                        <p className='text-[#787878] text-lg text-center'>Extra Ordinary efforts and in depth knowledge for power generation process makes us different.</p>
                    </div>
                        <Image src={generate} alt='img' />
                    <p className='text-2xl font-medium'><span className='text-5xl font-bold'>2</span>Step</p>
                </div>
                <div className="working-card flex flex-col items-center mobile:gap-4 lg:gap-20 mobile:border-[2px] lg:border-none">
                    <p className='text-2xl font-medium'><span className='text-5xl font-bold'>3</span>Step</p>
                    <div className="flex flex-col items-center gap-5">
                        <Image src={store} alt='img' />
                        <h1 className='text-2xl font-semibold'>Store The Power</h1>
                        <p className='text-[#787878] text-lg text-center'>Storage and distribution of the power in a state of the art way can help you to grow fast.</p>
                    </div>
                </div>
                <div className="working-card flex flex-col items-center mobile:gap-4 lg:gap-20 mobile:border-[2px] lg:border-none">
                    <div className="flex flex-col items-center gap-5">
                        <h1 className='text-2xl font-semibold'> Use It Flexibly</h1>
                        <p className='text-[#787878] text-lg text-center'>Our expertize of generating and regenerating energy with process driven usage guidelines is best.</p>
                    </div>
                        <Image src={flexibly} alt='img' />
                    <p className='text-2xl font-medium'><span className='text-5xl font-bold'>4</span>Step</p>
                </div>
                <Image src={arrows} alt='img' className='absolute top-14 hidden lg:block' />
            </div>
        </div>
    )
}

export default Working