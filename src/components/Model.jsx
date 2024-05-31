import React, { useEffect, useRef, useState } from 'react'
import ModelView from './ModelView'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { View } from '@react-three/drei'
import modelsData from '../data/models.json'
import { gsap } from 'gsap'
import { animateWithGsapTimeLine } from './utils/animations'

const Model = () => {
    const [size, setSize] = useState('small')
    const [model, setModel] = useState(modelsData.Models[0])

    const cameraControlSmall = useRef();
    const cameraControlLarge = useRef();
    //model
    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());
    //rotation
    const [smallRotation, setSmallRotation] = useState(0);
    const [largeRotation, setLargeRotation] = useState(0);

    const [eventSource, setEventSource] = useState(null);

    const tl = gsap.timeline();

    useEffect(() => {
        if (typeof document !== 'undefined') {
            setEventSource(document.getElementById('root'));
        }

        if (size === 'large') {
            animateWithGsapTimeLine(tl, small, smallRotation, '#view1', '#view2', {
                transform: 'translateX(-100%)',
                duration: 2
            })
        }
        if (size === 'small') {
            animateWithGsapTimeLine(tl, large, largeRotation, '#view2', '#view1', {
                transform: 'translateX(0)',
                duration: 2
            })
        }

    }, [size,]);
    return (
        <section className='w-full p-4 md:p-8 max-w-[1920px]'>
            <div className='max-w-[1120px] relative overflow-hidden mx-auto'>
                <h1 className='text-white text-xl md:text-2xl'>Take a closer look.</h1>
                <div className='w-full flex-col items-center mx-auto mt-5'>
                    <div className='w-full h-[75vh] md:[90vh] overflow-hidden relative'>
                        <ModelView
                            index={1}
                            groupRef={small}
                            gsapType="view1"
                            controlRef={cameraControlSmall}
                            setRotationState={setSmallRotation}
                            item={model}
                            size={size} />

                        <ModelView
                            index={2}
                            groupRef={large}
                            gsapType="view2"
                            controlRef={cameraControlLarge}
                            setRotationState={setLargeRotation}
                            item={model}
                            size={size} />

                        <Canvas
                            className='w-full h-full'
                            style={{
                                position: 'fixed',
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                overflow: 'hidden'
                            }}
                            eventSource={eventSource}>
                            <View.Port />
                        </Canvas>
                    </div>
                    <div className='mx-auto w-full'>
                        <p className='text-sm font-light text-center text-white mb-5'>{model.title}</p>
                        <div className='w-full flex justify-center items-center'>
                            <ul className='rounded-full flex p-3 gap-2 justify-center items-center bg-slate-800/80 backdrop-blur-sm'>
                                {modelsData.Models.map((item) => {
                                    return <li key={item.id}
                                        className={`w-8 h-8 border-2 gap-2 rounded-full ${model === item ? 'border-black' : 'border-white'} cursor-pointer`}
                                        style={{ backgroundColor: item.color[0] }}
                                        onClick={() => { setModel(item) }}></li>
                                })}
                            </ul>

                            <button className="flex items-center justify-center p-2 rounded-full bg-slate-800/80 backdrop-blur-sm ml-3 gap-1">
                                {modelsData.Sizes.map(({ label, value }) => (
                                    <span key={label} className="w-10 h-10 text-sm flex justify-center items-center bg-white text-black rounded-full transition-all"
                                        style={{ backgroundColor: size === value ? 'white' : 'transparent', color: size === value ? 'black' : 'white' }}
                                        onClick={() => { setSize(value) }}>
                                        {label}
                                    </span>
                                ))}
                            </button>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Model