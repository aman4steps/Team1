import React, { useRef, useEffect } from 'react';
import '../../app/globals.css'; // Import the custom CSS file
import { IoIosArrowForward } from "react-icons/io";

const Carousel = () => {
    const carouselRef = useRef(null);

    const scrollNext = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: carouselRef.current.clientWidth, behavior: 'smooth' });
        }
    };

    const scrollPrev = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -carouselRef.current.clientWidth, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                // Enable mouse scroll for small devices
                carouselRef.current.style.overflowX = 'scroll';
            } else {
                // Disable mouse scroll for medium and larger devices
                carouselRef.current.style.overflowX = 'hidden';
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initialize on mount

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="carousel-container relative container-wrapper">
            <div className="carousel gap-5" ref={carouselRef}>
                {/* start is here code  */}
                <div className="carousel-item w-60 md:w-80  rounded-md">
                    <div className=" cursor-pointer px-2">
                        <figure className="rounded border bg-slate-50 relative">
                            <img className="w-full  object-contain" src="https://img.freepik.com/free-vector/white-convertible-car-isolated-white-vector_53876-66815.jpg?w=900&t=st=1710935345~exp=1710935945~hmac=98c1fad0986c746d5845469bce6bb1c3596beb9fa2c0e1938a0ab54c648bf20d"
                                alt="Shoes" />
                            {/* <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-gray-500/40'></div> */}
                        </figure>
                        <div className="py-3">
                            <div className="flex gap-3 items-center">
                                <h2 className="text-lg font-semibold">Small Car</h2>
                                <div className="badge bg-yellow-600 text-white">NEW</div>
                            </div>
                            <p className=" font-extralight text-lg">Rs 20,902</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item w-60 md:w-80  rounded-md">
                    <div className=" cursor-pointer px-2">
                        <figure className="rounded border bg-slate-50 relative">
                            <img className="w-full  object-contain" src="https://img.freepik.com/free-vector/white-convertible-car-isolated-white-vector_53876-66815.jpg?w=900&t=st=1710935345~exp=1710935945~hmac=98c1fad0986c746d5845469bce6bb1c3596beb9fa2c0e1938a0ab54c648bf20d"
                                alt="Shoes" />
                            {/* <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-gray-500/40'></div> */}
                        </figure>
                        <div className="py-3">
                            <div className="flex gap-3 items-center">
                                <h2 className="text-lg font-semibold">Small Car</h2>
                                <div className="badge bg-yellow-600 text-white">NEW</div>
                            </div>
                            <p className=" font-extralight text-lg">Rs 20,902</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item w-60 md:w-80  rounded-md">
                    <div className=" cursor-pointer px-2">
                        <figure className="rounded border bg-slate-50 relative">
                            <img className="w-full  object-contain" src="https://img.freepik.com/free-vector/white-convertible-car-isolated-white-vector_53876-66815.jpg?w=900&t=st=1710935345~exp=1710935945~hmac=98c1fad0986c746d5845469bce6bb1c3596beb9fa2c0e1938a0ab54c648bf20d"
                                alt="Shoes" />
                            {/* <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-gray-500/40'></div> */}
                        </figure>
                        <div className="py-3">
                            <div className="flex gap-3 items-center">
                                <h2 className="text-lg font-semibold">Small Car</h2>
                                <div className="badge bg-yellow-600 text-white">NEW</div>
                            </div>
                            <p className=" font-extralight text-lg">Rs 20,902</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item w-60 md:w-80  rounded-md">
                    <div className=" cursor-pointer px-2">
                        <figure className="rounded border bg-slate-50 relative">
                            <img className="w-full  object-contain" src="https://img.freepik.com/free-vector/white-convertible-car-isolated-white-vector_53876-66815.jpg?w=900&t=st=1710935345~exp=1710935945~hmac=98c1fad0986c746d5845469bce6bb1c3596beb9fa2c0e1938a0ab54c648bf20d"
                                alt="Shoes" />
                            {/* <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-gray-500/40'></div> */}
                        </figure>
                        <div className="py-3">
                            <div className="flex gap-3 items-center">
                                <h2 className="text-lg font-semibold">Small Car</h2>
                                <div className="badge bg-yellow-600 text-white">NEW</div>
                            </div>
                            <p className=" font-extralight text-lg">Rs 20,902</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item w-60 md:w-80  rounded-md">
                    <div className=" cursor-pointer px-2">
                        <figure className="rounded border bg-slate-50 relative">
                            <img className="w-full  object-contain" src="https://img.freepik.com/free-vector/white-convertible-car-isolated-white-vector_53876-66815.jpg?w=900&t=st=1710935345~exp=1710935945~hmac=98c1fad0986c746d5845469bce6bb1c3596beb9fa2c0e1938a0ab54c648bf20d"
                                alt="Shoes" />
                            {/* <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-gray-500/40'></div> */}
                        </figure>
                        <div className="py-3">
                            <div className="flex gap-3 items-center">
                                <h2 className="text-lg font-semibold">Small Car</h2>
                                <div className="badge bg-yellow-600 text-white">NEW</div>
                            </div>
                            <p className=" font-extralight text-lg">Rs 20,902</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item w-60 md:w-80  rounded-md">
                    <div className=" cursor-pointer px-2">
                        <figure className="rounded border bg-slate-50 relative">
                            <img className="w-full  object-contain" src="https://img.freepik.com/free-vector/white-convertible-car-isolated-white-vector_53876-66815.jpg?w=900&t=st=1710935345~exp=1710935945~hmac=98c1fad0986c746d5845469bce6bb1c3596beb9fa2c0e1938a0ab54c648bf20d"
                                alt="Shoes" />
                            {/* <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-gray-500/40'></div> */}
                        </figure>
                        <div className="py-3">
                            <div className="flex gap-3 items-center">
                                <h2 className="text-lg font-semibold">Small Car</h2>
                                <div className="badge bg-yellow-600 text-white">NEW</div>
                            </div>
                            <p className=" font-extralight text-lg">Rs 20,902</p>
                        </div>
                    </div>
                </div>
                {/* end is here code */}
                
            </div>
            <div className=" hidden md:block absolute top-2/4 -translate-y-[60px] justify-between w-full">
                <div className=' justify-between flex pl-2 '>

                    <button onClick={scrollPrev} className="rounded-full bg-black/50 hover:bg-black p-2 text-white rotate-180"><IoIosArrowForward size={20} /></button>
                    <button onClick={scrollNext} className="rounded-full bg-black/50 hover:bg-black p-2 text-white"><IoIosArrowForward size={20} /></button>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
