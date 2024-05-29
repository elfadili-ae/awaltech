import Image from 'next/image'
import React from 'react'

const Campaigns = () => {
    return (
        <div className='w-full p-2 grid grid-row grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
            <div className='w-full h-52 object-contain relative group'>
                <Image
                    className='object-cover'
                    src='/campaign.jpg'
                    alt='campaign image'
                    layout='fill'
                    objectFit='cover'
                />
                <div className='absolute w-full h-full flex flex-col items-center justify-center text-center top-0 left-0 text-white p-3'>
                    <h3 className='text-xl font-bold shadow-md'>Why AWALTECH</h3>
                    <p className='text-sm'>The future Of Communication</p>
                </div>
                <div className='absolute w-full h-full opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center top-0 left-0 bg-black/70 backdrop-blur-sm transition-opacity duration-500'>
                    <svg className='fill-white w-20 h-20' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 455">
                        <polygon points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5 
	455,242.5 "/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Campaigns