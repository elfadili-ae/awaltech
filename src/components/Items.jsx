import React from 'react'
import phonesData from '../data/phones.json'
import OthersData from '../data/others.json'
import Image from 'next/image'


const Items = () => {
    return (
        <div className='w-full mt-9 grid grid-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {phonesData.Phones.map((element, index) => {
                return <div key={index} className='relative text-center w-full aspect-square hover:bg-blue-900 hover:text-white transition-all duration-1000'>
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
                return <div key={index} className='relative text-center w-full aspect-square hover:bg-blue-900 hover:text-white transition-all duration-1000'>
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