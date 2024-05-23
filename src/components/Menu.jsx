'use client'
import React, { useState } from 'react'

const Menu = ({ menu, onClick }) => {
    return (
        <div onClick={onClick} className='md:hidden w-5  flex flex-col justify-center items-center gap-1 relative'>
            <div className={`${menu && 'absolute top-[50M] left-0 rotate-45'} transition-all duration-500 w-5 h-[2px] bg-white`}></div>
            <div className={`${menu && 'hidden'} w-5 h-[2px] bg-white`}></div>
            <div className={`${menu && 'absolute top-[50M] left-0 -rotate-45'} transition-all duration-700 w-5 h-[2px] bg-white`}></div>
        </div>
    )
}

export default Menu