import React, { useRef } from 'react'
import phonesData from '../data/phones.json'
import OthersData from '../data/others.json'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Items = () => {
    const gridRef = useRef();

    useGSAP(() => {
        const gridItems = gsap.utils.toArray(gridRef.current.children);

        gridItems.forEach((item) => {
            gsap.to(item, {
                delay: 0.5,
                duration: 0.5,
                opacity: 1,
                rotate: 360,
                scrollTrigger: item,
            })
        })
    }, [])
    return (
        <div ref={gridRef} className='w-full mt-9 grid grid-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-b-[1px] border-slate-400'>
            {phonesData.Phones.map((element, index) => {
                return <div key={index} className='opacity-0 relative text-center w-full aspect-square hover:bg-blue-900 hover:text-white transition-all duration-1000'>
                    <Image
                        fill
                        className='object-contain'
                        src={element.imgSrc}
                        alt={`${element.name} photo`}
                    />
                    <h3 className='absolute bottom-3 left-0 right-0 text-xl font-bold'>{element.name}</h3>
                </div>
            })}
            {OthersData.Others.map((element, index) => {
                return <div key={index} className='opacity-0 relative text-center w-full aspect-square hover:bg-blue-900 hover:text-white transition-all duration-1000'>
                    <Image
                        fill
                        className='object-contain'
                        src={element.imgSrc}
                        alt={`${element.name}`}
                    />
                    <h3 className='absolute bottom-3 left-0 right-0 text-xl font-bold'>{element.name}</h3>
                </div>
            })}

        </div>
    )
}

export default Items