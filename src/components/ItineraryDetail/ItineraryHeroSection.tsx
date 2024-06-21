import "../../app/globals.css";
import { MdOutlineWhatsapp } from "react-icons/md";
import { Link as ScrollLink } from 'react-scroll';
import Addguest from "@/components/addguest";
import { useState } from "react";
import CustomiseTour from "./CustomiseTour";
import Slider from "react-slick";

export default function ({ tourPackage }) {
    const [isData, setData] = useState([])

    const getData = (data) => {
        setData(data);
    }
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
    };

    return (
        <>
            <div>
                <div className="container-wrapper grid grid-cols-1 xl:grid-cols-[2fr,1fr]  gap-4 ">
                    <div className="">
                        <div className="slider-container xl:hidden">
                            <Slider {...settings}>
                                <div>
                                    <img className=" w-full object-cover h-[40vh]" src="https://images.unsplash.com/photo-1505832018823-50331d70d237?q=80&w=1508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                </div>
                                <div>
                                    <img className=" w-full object-cover h-[40vh]"  src="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
                                </div>
                                <div>
                                    <img className=" w-full object-cover h-[40vh]" src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                </div>
                                
                            </Slider>
                        </div>
                        <img className="rounded-md h-[350px] object-cover w-full hidden xl:flex"
                            src="https://images.unsplash.com/photo-1505832018823-50331d70d237?q=80&w=1508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>

                    <div className="justify-end flex-col gap-y-4 md:justify-center w-full hidden xl:flex ">
                        <div className="">
                            <img className="rounded-md h-[167px] w-full object-cover"
                                src="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className="">
                            <img className="rounded-md h-[167px] max-md-full w-full object-cover"
                                src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="flex justify-between my-2">
                                <h1 className="  text-xl font-semibold">{tourPackage?.name}</h1>
                                <div className="flex items-center justify-center border rounded-full w-6 h-6">
                                    <img className=" p-1 " src="https://www.svgrepo.com/show/13666/heart.svg" alt="" />
                                </div>
                            </div>
                            <div className='stick top-1'>
                                <div className="flex flex-wrap gap-2 text-xxs font-semibold text-white">
                                    <button className=' rounded-badge bg-navyblack py-1 px-2'>8 Days / 7 Nights</button>
                                    <button className=' rounded-badge py-1 px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 capitalize'>Early bird sales!</button>

                                </div>
                                <div className="flex justify-between mt-2">
                                    <div className="flex flex-wrap gap-1 items-center">
                                        
                                        <p className='text-md '>Start & City: <span className='font-semibold text-graytext'>Mumbai</span></p>
                                    </div>
                                    <div className="flex gap-2 items-center ">
                                        <div>
                                            <MdOutlineWhatsapp size={25} className='cursor-pointer' />
                                        </div>


                                        <div>
                                            <ScrollLink
                                                to="ItinerarySection" 
                                                spy={true}
                                                smooth={true}
                                                offset={0} 
                                                duration={500}
                                            >
                                                <p className="hidden md:block text-sm underline text-blue font-medium cursor-pointer">View Iternery Page</p>
                                            </ScrollLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="hidden xl:flex gap-1">
                            <div className="text-right flex flex-col items-end justify-center ">
                                <p className="text-base leading-5 text-green-600 font-semibold uppercase">best deal price</p>
                                <div className='flex gap-1 items-end'>
                                    <p className='text-sm line-through'>₹20,000</p>
                                    <button className='uppercase text-xxs text-white bg-navyblack px-1 py-1 rounded-sm text-center'>37% Off</button>
                                </div>
                                <p className="text-sm leading-5">Starts From <span className="text-lg text-graytext font-medium">₹
                                    {tourPackage?.price}</span>
                                </p>
                                <p className="text-xxs leading-5">per person on twin sharing</p>

                            </div>
                            <div className="flex flex-col align-middle my-auto pl-2 gap-2">
                                <Addguest getData={getData}>
                                    <p className="cursor-pointer bg-primary px-5 py-2 rounded-md text-white text-center text-para"><span>Book Now</span></p>
                                </Addguest>
                                <CustomiseTour>
                                    <p className="border px-5 py-2 rounded-md text-center text-para"><span>Customise</span></p>
                                </CustomiseTour>
                            </div>
                        </div>
                    </div>

                    {/* 3images */}


                </div>
            </div>
        </>
    )
}