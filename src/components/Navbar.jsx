'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Items from './Items';
import Campaigns from './Campaigns';
import Events from './Events';
import Apps from './Apps';

const Navbar = ({ menuHandler }) => {
    const [sliderPosition, setSliderPosition] = useState(0);
    const [currentTab, setCurrentTab] = useState(0);
    const tabWith = [76, 95, 58, 45];
    const [sliderWidth, setSliderWidht] = useState(76);
    const tabsRef = useRef([]);

    useEffect(() => {
        tabsRef.current = tabsRef.current.slice(0, 4);
    }, []);

    const handleHoverOrClick = (index) => {
        if (tabsRef.current[index]) {
            setSliderWidht(tabWith[index]);
            let newPosition = 0
            if (index > 0) {
                for (let i = 0; i < index; i++) {
                    newPosition += tabWith[i] + 36;
                }
            }
            setSliderPosition(newPosition);
        }
    };
    return (
        <header className='absolute z-30 max-w-[1920px] w-full h-screen mx-auto bg-black/80 backdrop-blur-md'>
            <nav className='h-32 md:h-20 bg-black max-md:pt-6 px-3 text-white flex flex-col items-center md:gap-8 md:flex-row relative transition-all duration-1000'>
                <div className='w-11 h-5'>
                    <Image className='cursor-pointer' src='/awal_logo_white.png' alt='AwalTheck logo' width={44} height={21} />
                </div>
                <div className="h-full text-white text-lg flex w-full items-center justify-between max-w-sm relative">
                    <div
                        id="slider"
                        className={`absolute h-2 bottom-0 bg-blue-600 transition-all duration-300 ease-in-out`}
                        style={{ width: `${sliderWidth}px`, left: `${sliderPosition}px` }}
                    ></div>
                    <button
                        ref={(el) => (tabsRef.current[0] = el)}
                        onMouseEnter={() => handleHoverOrClick(0)}
                        onMouseLeave={() => handleHoverOrClick(currentTab)}
                        onClick={() => { handleHoverOrClick(0); setCurrentTab(0) }}
                    >
                        Products
                    </button>
                    <button
                        ref={(el) => (tabsRef.current[1] = el)}
                        onMouseEnter={() => handleHoverOrClick(1)}
                        onMouseLeave={() => handleHoverOrClick(currentTab)}
                        onClick={() => { handleHoverOrClick(1); setCurrentTab(1) }}
                    >
                        Campaigns
                    </button>
                    <button
                        ref={(el) => (tabsRef.current[2] = el)}
                        onMouseEnter={() => handleHoverOrClick(2)}
                        onMouseLeave={() => handleHoverOrClick(currentTab)}
                        onClick={() => { handleHoverOrClick(2); setCurrentTab(2) }}
                    >
                        Events
                    </button>
                    <button
                        ref={(el) => (tabsRef.current[3] = el)}
                        onMouseEnter={() => handleHoverOrClick(3)}
                        onMouseLeave={() => handleHoverOrClick(currentTab)}
                        onClick={() => { handleHoverOrClick(3); setCurrentTab(3) }}
                    >
                        Apps
                    </button>
                </div>
                <svg id='searchButton' className='absolute top-6 max-md:left-6 md:right-16 cursor-pointer transform transition-all duration-300' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50">
                    <path className='fill-white' d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                </svg>
                <div onClick={() => { menuHandler(false) }}
                    className={`absolute top-6 right-6 w-7 h-7 flex justify-center items-center text-white cursor-pointer`}>
                    <div className='absolute w-full h-[2px] bg-white transform rotate-45'></div>
                    <div className='absolute w-full h-[2px] bg-white transform -rotate-45'></div>
                </div>
            </nav>

            <div className='w-full h-[calc(100vh-80px)] overflow-y-auto'>
                {currentTab == 0 && <>
                    <Items />
                    <div className='h-20 w-full bg-black text-center text-white '>
                        AWALTECH
                    </div>
                </>}
                {currentTab == 1 && <Campaigns />}
                {currentTab == 2 && <Events />}
                {currentTab == 3 && <Apps />}
            </div>
        </header>
    )
}

export default Navbar
