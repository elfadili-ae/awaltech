import React from 'react'
import Items from './Items'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/all'

gsap.registerPlugin(ScrollToPlugin)

const NewPhones = () => {

    useGSAP(() => {
        gsap.from('.title', {
            x: -200,
            opacity: 0,
            scrollTrigger: '.title',
        })
    })
    return (
        <section id='new-phones' className='w-full bg-white pt-8 pb-2 max-w-[1920px]'>
            <h1 className='title ml-5 font-semibold text-2xl md:text-4xl'>Top New Awal Phones</h1>
            <Items />
        </section>
    )
}

export default NewPhones