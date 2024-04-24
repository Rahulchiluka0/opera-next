import Image from 'next/image'
import React from 'react'
import client1 from "../../../../public/client1.png"
import client2 from "../../../../public/client2.png"
import client3 from "../../../../public/client3.png"
import client4 from "../../../../public/client4.png"
import client5 from "../../../../public/client5.png"
import client6 from "../../../../public/client6.png"
import client7 from "../../../../public/client7.png"
import client8 from "../../../../public/client8.png"
import client9 from "../../../../public/client9.png"
import client10 from "../../../../public/client10.png"
import client11 from "../../../../public/client11.png"
import client12 from "../../../../public/client12.png"
import client13 from "../../../../public/client13.png"
import client14 from "../../../../public/client14.png"
import client15 from "../../../../public/client15.png"

const Client = () => {
    return (
        <div className='client bg-[#009846] flex flex-col gap-7 py-24'>
            <p className='text-white text-5xl font-medium text-center'>Our <span className='font-bold'>Client</span></p>
            <div className='grid mobile:grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-3 justify-around'>
                <div className="bg-white px-7  rounded-xl flex items-center justify-center">
                    <Image src={client1} alt='client' />
                </div>
                <div className="bg-white px-7  rounded-xl flex items-center justify-center">
                    <Image src={client2} alt='client' />
                </div>
                <div className="bg-white px-7  rounded-xl flex items-center justify-center">
                    <Image src={client3} alt='client' />
                </div>
                <div className="bg-white px-7  rounded-xl flex items-center justify-center">
                    <Image src={client4} alt='client' />
                </div>
                <div className="bg-white px-7  rounded-xl flex items-center justify-center">
                    <Image src={client5} alt='client' />
                </div>
                <div className="bg-white px-7  rounded-xl flex items-center justify-center">
                    <Image src={client6} alt='client' />
                </div>
                <div className="bg-white px-7  rounded-xl flex items-center justify-center">
                    <Image src={client7} alt='client' />
                </div>
            </div>
            <div className='grid mobile:grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-7 justify-between'>
                <div className="bg-white px-7 rounded-xl flex items-center justify-center">
                    <Image src={client8} alt='client' />
                </div>
                <div className="bg-white px-7 rounded-xl flex items-center justify-center">
                    <Image src={client9} alt='client' />
                </div>
                <div className="bg-white px-7 rounded-xl flex items-center justify-center">
                    <Image src={client10} alt='client' />
                </div>
                <div className="bg-white px-7 rounded-xl flex items-center justify-center">
                    <Image src={client11} alt='client' />
                </div>
                <div className="bg-white px-7 rounded-xl flex items-center justify-center">
                    <Image src={client12} alt='client' />
                </div>
                <div className="bg-white px-7 rounded-xl flex items-center justify-center">
                    <Image src={client13} alt='client' />
                </div>
                <div className="bg-white px-7 rounded-xl flex items-center justify-center">
                    <Image src={client14} alt='client' />
                </div>
                <div className="bg-white px-7 rounded-xl flex items-center justify-center">
                    <Image src={client15} alt='client' />
                </div>
            </div>
        </div>
    )
}

export default Client