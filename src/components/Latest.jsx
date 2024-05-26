import Image from 'next/image';
import React, { useEffect } from 'react'

const Latest = () => {
    useEffect(() => {
        const init = async () => {
            const { Carousel, initTWE } = await import("tw-elements");
            initTWE({ Carousel });
        };
        init();
    }, []);

    return (
        <section id='latest' className='w-full max-w-[1920px] flex flex-col md:flex-row'>
            <div className='flex-1 w-full'>
                <div
                    id="carouselDarkVariant1"
                    className="relative"
                    data-twe-carousel-init
                    data-twe-interval={false}
                    data-twe-ride="carousel">
                    <div
                        className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
                        data-twe-carousel-indicators>
                        <button
                            data-twe-target="#carouselDarkVariant1"
                            data-twe-slide-to="0"
                            data-twe-carousel-active
                            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                            aria-current="true"
                            aria-label="Slide 3"></button>
                        <button
                            data-twe-target="#carouselDarkVariant1"
                            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                            data-twe-slide-to="1"
                            aria-label="Slide 3"></button>
                    </div>

                    <div
                        className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                        <div
                            className="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                            data-twe-carousel-fade
                            data-twe-carousel-item
                            data-twe-carousel-active>
                            <Image
                                width={500}
                                height={500}
                                src="/carousel/Thumbnail1.jpg"
                                className="boject-cover w-full"
                                alt="Flip phone photo" />
                            <div
                                className="absolute left-3 top-3 py-5 text-center text-black">
                                <h2 className="text-white font-bold text-left text-2xl md:text-4xl">Awal X3 Ultra:<br />Official film</h2>
                            </div>
                            <div className='absolute w-12 h-12 md:w-16 md:h-16 flex justify-center items-center top-[45%] right-[45%] z-[1]'>
                                <svg className='w-full h-full border-[4px] rounded-full' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 142.448 142.448">
                                    <path className='fill-white' d="M94.585,67.086L63.001,44.44c-3.369-2.416-8.059-0.008-8.059,4.138v45.293 c0,4.146,4.69,6.554,8.059,4.138l31.583-22.647C97.418,73.331,97.418,69.118,94.585,67.086z" />
                                </svg>
                            </div>
                        </div>
                        <div
                            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                            data-twe-carousel-fade
                            data-twe-carousel-item>
                            <Image
                                width={500}
                                height={500}
                                src="/carousel/Thumbnail2.jpg"
                                className="boject-cover w-full"
                                alt="Flip phone photo" />
                            <div
                                className="absolute left-3 top-3 py-5 text-center text-black">
                                <h2 className="text-white font-bold text-left text-2xl md:text-4xl">Awal New Lenses:<br />Colors Never Seen Before</h2>
                            </div>
                        </div>
                    </div>

                    <button
                        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                        type="button"
                        data-twe-target="#carouselDarkVariant1"
                        data-twe-slide="prev">
                        <span className="inline-block h-8 w-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </span>
                        <span
                            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Previous</span
                        >
                    </button>
                    <button
                        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                        type="button"
                        data-twe-target="#carouselDarkVariant1"
                        data-twe-slide="next">
                        <span className="inline-block h-8 w-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                        <span
                            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Next</span
                        >
                    </button>
                </div>
            </div>
            <div className='flex-1 w-full'>
                <div
                    id="carouselDarkVariant2"
                    className="relative"
                    data-twe-carousel-init
                    data-twe-interval={false}
                    data-twe-ride="carousel">
                    <div
                        className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
                        data-twe-carousel-indicators>
                        <button
                            data-twe-target="#carouselDarkVariant2"
                            data-twe-slide-to="0"
                            data-twe-carousel-active
                            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                            aria-current="true"
                            aria-label="Slide 2"></button>
                        <button
                            data-twe-target="#carouselDarkVariant2"
                            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                            data-twe-slide-to="1"
                            aria-label="Slide 2"></button>
                    </div>

                    <div
                        className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                        <div
                            className="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                            data-twe-carousel-fade
                            data-twe-carousel-item
                            data-twe-carousel-active>
                            <Image
                                width={500}
                                height={500}
                                src="/carousel/Thumbnail3.jpg"
                                className="boject-cover w-full"
                                alt="Flip phone photo" />
                            <div
                                className="absolute right-3 top-3 py-5 text-right text-black">
                                <h2 className="text-white font-bold tex-right text-2xl md:text-4xl">Meet FlipX:<br />Pocket's Friend</h2>
                            </div>
                        </div>
                        <div
                            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                            data-twe-carousel-fade
                            data-twe-carousel-item>
                            <Image
                                width={500}
                                height={500}
                                src="/carousel/Thumbnail4.jpg"
                                className="boject-cover w-full"
                                alt="Flip phone photo" />
                            <div
                                className="absolute right-3 top-3 py-5 text-right text-black">
                                <h2 className="text-white font-bold tex-right text-2xl md:text-4xl">MokaBook Series:<br />AI Assisted Laptops</h2>
                            </div>
                        </div>
                    </div>

                    <button
                        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                        type="button"
                        data-twe-target="#carouselDarkVariant2"
                        data-twe-slide="prev">
                        <span className="inline-block h-8 w-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </span>
                        <span
                            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Previous</span
                        >
                    </button>
                    <button
                        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                        type="button"
                        data-twe-target="#carouselDarkVariant2"
                        data-twe-slide="next">
                        <span className="inline-block h-8 w-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                        <span
                            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Next</span
                        >
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Latest