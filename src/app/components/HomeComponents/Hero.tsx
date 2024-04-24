import React from 'react'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-content w-[80%] py-[241px] mx-auto flex flex-col items-start gap-16 ">
                <div className='flex flex-col gap-5'>
                    <h1 className='text-white md:text-6xl mobile:text-5xl'>Best Wind Energy Companies <br />
                        In <span className='font-bold'>Tamilnadu India.</span> </h1>
                    <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the industry's standard.</p>
                </div>
                <button className='text-[#009846] bg-white rounded-xl px-7 py-4 text-lg font-semibold'>Read More</button>
            </div>

        </div>
    )
}

export default Hero