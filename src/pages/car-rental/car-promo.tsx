import "../../app/globals.css";
import { FaUserAlt } from "react-icons/fa";
import { FaRegSnowflake } from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import Header from "@/components/Header";

export default function(){
    return(
        < div className="bg-slate-50 h-[100%]">
        <Header/>            
            <div className="container-wrapper">

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                    <div className="shadow-md rounded bg-white col-span-3 gap-5">
                        <div className=" grid md:grid-cols-4 p-3 rounded gap-1 ">
                            <div className=" col-span-3 md:border-r">
                                <div className="flex sm:flex-row flex-col gap-5">
                                    <div className="">
                                        <img className="w-52 h-40 object-contain" src="https://pngimg.com/uploads/mercedes/mercedes_PNG80135.png" alt="" />
                                    </div>
                                    <div className=" ">
                                        <div className="pb-1 md:pb-3 ">
                                            <p className="font-semibold text-lg">Volkswagen Polo</p>
                                            <p className="text-sm">Or similiar Economy</p>
                                        </div>
                                        <div className="flex sm:block gap-3 items-center">
                                            <div className="flex  gap-3 text-sm text-center">
                                                <p className="bg-primary text-[10px] md:text-para text-white px-1 py-1 rounded">save 10%</p>
                                                <p className="bg-cyan-50 border text-[10px] md:text-para border-cyan-500 text-cyan-600 px-1 py-1 rounded"> Parial Prepayment</p>
                                            </div>
                                            <div className="flex gap-3 items-center py-3">
                                                <div className="flex gap-1 items-center">
                                                    <FaUserAlt/>
                                                    <p className="font-semibold text-sm">0</p>
                                                </div>
                                                <div className="flex gap-1 items-center">
                                                    <FaRegSnowflake/>
                                                    <p className="font-semibold text-sm">0</p>
                                                </div>
                                                <div className="flex gap-1 items-center">
                                                    <GiGearStickPattern/>
                                                    <p className="font-semibold text-sm">0</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr  className="mb-4 hidden md:block"/>
                                <div>
                                    <div className="hidden md:grid grid-cols-2">
                                        <div>
                                            <div className="flex items-center gap-2 pb-3">
                                                <BsFillFuelPumpFill size={22}/>
                                                <div>
                                                    <p className="font-semibold text-para">Fuel policy</p>
                                                    <p className="text-para">Same to Same</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaLocationDot size={22}/>
                                                <div>
                                                    <p className="font-semibold text-para">Pick-up location</p>
                                                    <p className="text-para">Free shutter services</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <FaCheck className="text-cyan-500"/>
                                                <p className="text-para">Lorem, ipsum dolor.</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaCheck className="text-cyan-500"/>
                                                <p className="text-para">Lorem, ipsum dolor.</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaCheck className="text-cyan-500"/>
                                                <p className="text-para">Lorem, ipsum dolor.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="block md:hidden my-4" />
                            </div>
                            <div className=" md:place-self-center">
                                <div className="md:block flex  justify-between  md:text-center ">
                                    <div>
                                        <p>EconomyBooking</p>
                                        <div>
                                            <p className="text-lg font-semibold">Rs. 51,100</p>
                                            <p className="text-xs">Total</p>
                                        </div>
                                        <button className="px-3 py-2 rounded font-semibold text-para bg-gradient-to-r from-primary via-limeyellow  to-test text-white">View Details</button>
                                    </div>
                                    <div className="pt-5">
                                        <div className="flex items-center gap-2">
                                            <FaCheck className="text-cyan-500"/>
                                            <p className="text-para">Lorem, ipsum dolor.</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaCheck className="text-cyan-500"/>
                                            <p className="text-para">Lorem, ipsum dolor.</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaCheck className="text-cyan-500"/>
                                            <p className="text-para">Lorem, ipsum dolor.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="rounded shadow-md bg-white px-5">
                            <div className="pb-5">
                                <p className="text-lg font-semibold">filter</p>
                            </div>
                            <div>
                                <p className="font-semibold text-base underline">Car Type</p>
                                <form className="ml-2 text-para">
                                    <input className="custom-checkbox" type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                    <label for="vehicle1"> I have a bike</label><br/>
                                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                                    <label for="vehicle2"> I have a car</label><br/>
                                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                                    <label for="vehicle3"> I have a boat</label><br/><br/>
                                    
                                </form>
                                
                            </div>
                            <div className="pb-5">
                                <p className="font-semibold text-base underline">Capacity</p>
                                <form className="ml-2 text-para">
                                    <input className="custom-checkbox" type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                    <label for="vehicle1"> 3 to 5 Passenger</label><br/>
                                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                                    <label for="vehicle2"> 6 More</label><br/>
                                </form>
                            </div>
                            <div className="">
                                <p className="font-semibold text-base underline">Price Range</p>
                                <form className="ml-2 text-para">
                                <input type="range" id="vol" name="vol" min="0" max="50"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






        </div>
    )
}