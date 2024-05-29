import React from 'react'
import appsData from '../data/apps.json'
import Image from 'next/image'


const Apps = () => {
    console.log(appsData);
    return (
        <div className='w-full pt-4 grid grid-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
            {appsData.Apps.map((element, index) => {
                return <div key={index} className='relative text-center w-full aspect-square group hover:bg-white hover:shadow-xl hover:text-white transition-all duration-1000'>
                    <Image
                        fill
                        className='object-contain px-2 group-hover:scale-105 transition-all duration-1000'
                        src={element.imgSrc}
                        alt={`${element.name} photo`}
                    />
                    <h3 className='absolute bottom-3 left-0 right-0 text-xl text-white group-hover:text-black font-bold transition-all duration-1000'>{element.name}</h3>
                </div>
            })}
        </div>
    )
}

export default Apps