'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Menu from './Menu'

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const menuHandler = () => {
        setMenu(!menu);
    }
    return (
        <header className='p-5 w-full max-w-[1126px] mx-auto bg-black relative'>
            <nav className='text-white flex justify-between'>
                <Image className='cursor-pointer' src='/awal_logo_white.png' alt='AwalTheck logo' width={44} height={21} />
                <div className='max-md:hidden flex justify-center items-center text-slate-400'>
                    {['Store', 'Features', 'Gallery', 'Support'].map((ele, index) => {
                        return <div key={index} className='px-3 text-sm hover:text-white cursor-pointer transition-all duration-300'>{ele}</div>
                    })}
                </div>
                <div className='text text-sm flex gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20 " viewBox="0 0 50 50">
                        <path className='fill-white' d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                    </svg>
                    <svg height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 483.1 483.1" >
                        <g>
                            <path className='fill-white'
                                d="M434.55,418.7l-27.8-313.3c-0.5-6.2-5.7-10.9-12-10.9h-58.6c-0.1-52.1-42.5-94.5-94.6-94.5s-94.5,42.4-94.6,94.5h-58.6 c-6.2,0-11.4,4.7-12,10.9l-27.8,313.3c0,0.4,0,0.7,0,1.1c0,34.9,32.1,63.3,71.5,63.3h243c39.4,0,71.5-28.4,71.5-63.3 C434.55,419.4,434.55,419.1,434.55,418.7z M241.55,24c38.9,0,70.5,31.6,70.6,70.5h-141.2C171.05,55.6,202.65,24,241.55,24z M363.05,459h-243c-26,0-47.2-17.3-47.5-38.8l26.8-301.7h47.6v42.1c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h141.2v42.1 c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h47.6l26.8,301.8C410.25,441.7,389.05,459,363.05,459z" />
                        </g>
                    </svg>
                </div>
                <Menu menu={menu} onClick={menuHandler} />
                {menu && <div className='md:hidden absolute bg-gradient-to-r from-slate-800 to-black px-4 py-3 top-[100%] left-0 flex flex-col w-full gap-3'>
                    {['Store', 'Features', 'Gallery', 'Support'].map((ele, index) => {
                        return <div key={index} className='px-3 pb-1 text-sm border-b-[1px] border-white/50 hover:text-white cursor-pointer transition-all duration-300'>{ele}</div>
                    })}
                </div>}
            </nav>
        </header>
    )
}

export default Navbar