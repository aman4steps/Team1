import "../app/globals.css";     
import { IoIosSearch } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { VscCompass } from "react-icons/vsc";
import { BsCakeFill } from "react-icons/bs";
import { FaCarAlt } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { RiLoginCircleFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import Image from "next/image";
import Logo from "../../public/logo.png"
import { IoMdSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";


export default function (){
return(
<>
    <div className=" sticky top-0 pb-4 z-[999]">
        <div className="bg-primary">
            <div className="flex items-center py-1 container-wrapper justify-center gap-5">
                <p className=" capitalize text-white text-xxs">call us for free now</p>
                <p className="bg-navyblack py-[2px] px-4 text-white rounded-badge text-xxs">+44 20 8068 3176</p>
            </div>
        </div>
        {/* */}
        <div className="bg-navyblack ">
            <div className="container-wrapper">
                <div className="flex items-center justify-between gap-5 py-3 ">
                    <img src="/assets/logo.png" alt="Logo" className="w-[150px] md:w-[240px] lg:w-[280px]" />
                    <div className="flex justify-between border-indigo-500 bg-white rounded-full w-full md:w-4/12 px-[8px] border-[2px] overflow-hidden   p-[5px] items-center">
                        <IoIosSearch  size={28}/>
                        <input className="border-none focus:outline-none placeholder:text-sm placeholder-black w-full px-2 text-sm" placeholder="Search Your Next Destination" type="text" name="" id="" />
                        <button className="bg-navyblack text-white text-sm rounded-badge px-4 py-1">Search</button>
                    </div>
                    <div className="hidden md:flex gap-3">
                        <button className="flex items-center gap-2  px-2 py-1 bg-white text-navyblack rounded-lg"><span><RiLoginCircleFill/></span> Login </button>
                        <button className="flex items-center gap-2 border-white border text-white px-2 py-1 rounded-lg"><span><FaUser/></span> Sign up </button>
                    </div>
                    <div className="md:hidden text-white">
                    <FaBars />
                    </div>
                </div>
            </div>
        </div>
            <div className="border-b shadow-sm py-1 bg-white hidden md:block">
                <ul className="container-wrapper flex gap-x-10 text-para">
                    <li className=" capitalize flex items-center gap-1 cursor-pointer text-primary hover:text-primary"><span><FaHome/></span>Home</li>
                    <li className=" capitalize flex items-center gap-1 cursor-pointer hover:text-primary"><span><VscCompass/></span>Destinations</li>
                    <li className=" capitalize flex items-center gap-1 cursor-pointer hover:text-primary"><span><BsCakeFill/></span>Holiday</li>
                    <li className=" capitalize flex items-center gap-1 cursor-pointer hover:text-primary"><span><FaCarAlt/></span>Car Hire</li>
                    <li className=" capitalize flex items-center gap-1 cursor-pointer hover:text-primary"><span><IoDiamondOutline/></span>Speciality Tour</li>
                    <li className=" capitalize flex items-center gap-1 cursor-pointer hover:text-primary"><span><FaHandshake/></span>Deals</li>
                    <li className=" capitalize flex items-center gap-1 cursor-pointer hover:text-primary"><span><IoIosContacts/></span>Contact us</li>
                </ul>
                
            </div>
    </div>
</>
)

}