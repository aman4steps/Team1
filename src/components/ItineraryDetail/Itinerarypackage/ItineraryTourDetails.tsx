import { useState } from "react";
import "../../../app/globals.css";

export default function(){
    const[activeTab,setActiveTab]=useState('tab1')

    const handleTabClick = (tour_details:string) => {
        setActiveTab(tour_details);
        // console.log(tour_details)
      };
    return(
        <>
            <div id="TourDetailsSection">
                <div className="mt-12">
                    <p className="text-lg font-semibold text-graytext">Tour Details</p>
                    <p className="text-sm italic text-slate-600">Best facilities with no added cost.</p>
                </div>
                <div className="flex justify-between mt-5 gap-2 border-b-2 border-navyblack">
                    <div onClick={() => handleTabClick('tab1')} className={`cursor-pointer rounded-t-lg py-2 grow text-center text-[16px]   ${activeTab === 'tab1' ? 'bg-navyblack text-white' : 'text-slate-400 border-x-[1px] border-t-[1px] border-navyblacklite  bg-slate-200'}`}>
                        <p className='text-sm  '>Akhf Details </p>
                    </div>
                    <div onClick={() => handleTabClick('tab2')} className={`cursor-pointer rounded-t-lg py-2   grow text-center text-[16px]   ${activeTab === 'tab2' ? 'bg-navyblack text-white' : 'text-slate-400 border-x-[1px] border-t-[1px] border-navyblacklite  bg-slate-200'}`}>
                        <p className='text-sm '>Flight Details </p>
                    </div>
                    <div onClick={() => handleTabClick('tab3')} className={`cursor-pointer rounded-t-lg py-2   grow text-center text-[16px]   ${activeTab === 'tab3' ? 'bg-navyblack text-white' : 'text-slate-400 border-x-[1px] border-t-[1px] border-navyblacklite bg-slate-200'}`}>
                        <p className='text-sm '>Flight Details </p>
                    </div>

                </div>
                <div className="border rounded-b-lg  overflow-hidden">
                    <div className={`md:p-5 xs:p-0 xs:overflow-x-auto list-disc mx-5 ${activeTab === 'tab1' ? 'block' : 'hidden'}`}>
                        <div>
                            <div className='mb-5'>
                                <p className='text-sm font-semibold text-graytext'>Departure & Arrival</p>
                            </div>
                            <div className='flex'>
                                <div className='grow'>
                                    <p className='text-base font-semibold text-graytext'>Mumbai</p>
                                    <p className='text-sm '>03 March 06:20 AM</p>
                                </div>
                                <div className='grow flex flex-col justify-center items-center' >
                                    <div >
                                        <img className='w-20' src="https://seeklogo.com/images/I/indigo-airlines-logo-B3BBFD5004-seeklogo.com.png" alt="" />
                                    </div>
                                    <div className='flex relative items-center mt-2'>
                                        
                                        <hr className=' w-10' />
                                        
                                        <div className='border px-7 rounded-full flex'>
                                            <span className='text-[10px]' >-:-</span>
                                        </div>
                                        <hr className=' w-10' />
                                    </div>
                                </div>
                                <div className='grow text-right'>
                                    <p className='text-base font-semibold text-graytext'>Mumbai</p>
                                    <p className='text-sm '>03 March 06:20 AM</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    {/* use this tour informatio ref veena world */}
                    {/* <ul className={`p-5 list-disc ml-[20px] ${activeTab === 'tab1' ? 'block' : 'hidden'}`}>
                        <li className="leading-8 text-[15px]"><span></span>Tab 1</li>
                        <li className="leading-8 text-[15px]"><span></span>Tab 1</li>
                        <li className="leading-8 text-[15px]"><span></span>Tab 1</li>
                        <li className="leading-8 text-[15px]"><span></span>Tab 1</li>
                        <li className="leading-8 text-[15px]"><span></span>Tab 1</li>
                        <li className="leading-8 text-[15px]"><span></span>Tab 1</li>
                        
                    </ul> */}
                    <div className={`py-5 list-disc  ${activeTab === 'tab2' ? 'block' : 'hidden'}`}>
                        <div className=''>
                            <table className='w-full'>
                                <tbody>
                                    <tr className='flex justify-between '>
                                        <td className='grow text-base font-semibold text-center'>City - Country</td>
                                        <td className='grow text-base font-semibold text-center'>Hotel</td>
                                        <td className='grow text-base font-semibold  text-center'>Check In - Check Out</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className=''>
                            <table className='w-full'>
                                <tbody>
                                    <tr className='flex justify-between even:bg-white odd:bg-slate-100 text-center'>
                                        <td className='grow text-sm py-2  text-center'>City - Country</td>
                                        <td className='grow text-sm py-2  text-center'>Hotel</td>
                                        <td className='grow text-sm py-2  text-center'>Check In - Check Out</td>
                                    </tr>
                                    <tr className='flex justify-between even:bg-white odd:bg-slate-100 text-center'>
                                        <td className='grow text-sm py-2  text-center'>City - Country</td>
                                        <td className='grow text-sm py-2  text-center'>Hotel</td>
                                        <td className='grow text-sm py-2  text-center'>Check In - Check Out</td>
                                    </tr>
                                    <tr className='flex justify-between even:bg-white odd:bg-slate-100 text-center'>
                                        <td className='grow text-sm py-2  text-center'>City - Country</td>
                                        <td className='grow text-sm py-2  text-center'>Hotel</td>
                                        <td className='grow text-sm py-2  text-center'>Check In - Check Out</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                    <div className={` ${activeTab === 'tab3' ? 'block' : 'hidden'}`}>
                        <div className='grid grid-cols-[0.9fr,,2fr] border-b-2'>
                            <div className=' bg-slate-100 px-5  pt-3 pb-2 '>
                                <p className='leading-7 text-sm'>Guest type</p>
                                <p className='leading-7 text-sm'>reporting time</p>
                                <p className='leading-7 text-sm'>dropping time</p>
                            </div>
                            <div className='px-5 pt-3 pb-2'>
                                <p className='leading-7 text-sm'>shkjs shfj sjh</p>
                                <p className='leading-7 text-sm'>lorem sdfsdfsf</p>
                                <p className='leading-7 text-sm'>sdfev rtr er slorem</p>
                            </div>
                            
                        </div>
                        <div className='grid grid-cols-[0.9fr,,2fr]'>
                            <div className=' bg-slate-100 px-5  pt-3 pb-2 '>
                                <p className='leading-7 text-sm'>Guest type</p>
                                <p className='leading-7 text-sm'>reporting time</p>
                                <p className='leading-7 text-sm '>dropping time</p>
                            </div>
                            <div className='px-5 pt-3 pb-2'>
                                <p className='leading-7 text-sm'>shkjs shfj sjh</p>
                                <p className='leading-7 text-sm'>lorem sdfsdfsf</p>
                                <p className='leading-7 text-sm'>sdfev rtr er slorem</p>
                            </div>
                            
                        </div>
                        
                        
                        
                    </div>

                </div>

            </div>
        </>
    )
}