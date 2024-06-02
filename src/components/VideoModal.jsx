import React from 'react'

const VideoModal = ({ handleVideo }) => {
    return (
        <div className="absolute w-full h-full max-w-[1920px] top-0 left-0 flex justify-center z-30 bg-black/95 mx-auto">
            <div className='fixed w-full h-screen flex justify-center items-center'>
                <div
                    onClick={() => { handleVideo(false) }}
                    className={`absolute top-10 right-10 z-[31] w-7 h-7 flex justify-center items-center text-white cursor-pointer`}>
                    <div className='absolute w-full h-[2px] bg-white transform rotate-45'></div>
                    <div className='absolute w-full h-[2px] bg-white transform -rotate-45'></div>
                </div>
                <iframe
                    className='w-full max-w-[720px] aspect-video'
                    src="https://www.youtube.com/embed/jRxHAlgLvw8"
                    title="Fold5"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}

export default VideoModal