import React from 'react'
import Items from './Items'

const NewPhones = () => {
    return (
        <section id='new-phones' className='w-full bg-white py-8 max-w-[1920px]'>
            <h1 className='ml-5 font-semibold text-2xl md:text-4xl'>Top New Awal Phones</h1>
            <Items />
        </section>
    )
}

export default NewPhones