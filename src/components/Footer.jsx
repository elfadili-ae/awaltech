import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <section id='footer' className='w-full relative bg-white py-4 max-w-[1920px] flex flex-col px-4 md:px-6 max-md:pb-10'>
            <div className='flex gap-3 items-center'>
                <p className='text-slate-600 italic'>Share</p>
                <svg className='w-6 h-6 group' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path className='fill-slate-500 group-hover:fill-blue-600' d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z"></path>
                </svg>
                <svg className='w-6 h-6 group' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                    <path className='fill-slate-500 group-hover:fill-blue-600' d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                </svg>
                <svg className='w-6 h-6 group' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path className='fill-slate-500 group-hover:fill-blue-600' d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>
            </div>
            <div className='mt-4 flex flex-col md:flex-row gap-6'>
                <div className='w-11 h-5'>
                    <Image className='cursor-pointer' src='/awal_logo_black.png' alt='AwalTheck logo' width={44} height={21} />
                </div>
                <p>ALL CONTENTS COPYRIGHT © AWALTECH CO., LTD.</p>
            </div>
            <div className='flex flex-wrap gap-4 md:absolute md:top-4 md:right-2 max-md:mt-3'>
                <select className='border-[1px] border-slate-700'>
                    <option className='uppercase text-sm'>High bandwidth mode</option>
                    <option className='uppercase text-sm'>Low bandwidth mode</option>
                </select>
                <Link href='/' className='uppercase border-[1px] border-slate-700 py-[1px] px-[2px]'>
                    <span>Site Map</span>
                    <svg className='inline ml-1 -translate-y-[2px] fill-black w-2 h-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330">
                        <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z" />
                    </svg>
                </Link>
                <Link href='/' className='uppercase border-[1px] border-slate-700 py-[1px] px-[2px]'>
                    <span>Global AwalTech</span>
                    <svg className='inline ml-1 -translate-y-[2px] fill-black w-2 h-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330">
                        <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z" />
                    </svg>
                </Link>
            </div>
        </section>
    )
}

export default Footer