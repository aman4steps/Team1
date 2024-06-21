import CalendarFunc from "@/components/Calender";
import "../../../app/globals.css";
export default function ({ tourAboutHighlight }) { 
    return (
        <>
            <div className="">
                <div className="flex flex-col gap-4 border rounded-md p-3 relative bg-white h-[480px] overflow-scroll">
                    <div className="">
                        <div className="flex gap-3">
                            <p className="text-base font-bold p-4 text-graytext">1. SELECT DEPARTURE CITY & DATE</p>
                        </div>
                        <hr />
                        <div className="overflow-y-auto ">
                            <div className="flex gap-3 py-4">
                                <div className="font-semibold text-sm border rounded-full py-2 px-3.5">
                                    <span></span>All
                                    departure</div>
                                <div className="font-semibold text-sm border rounded-full py-2 px-3.5"><span></span>
                                    Mumbai
                                </div>
                                <div className="font-semibold text-sm border rounded-full py-2 px-3.5"><span></span>
                                    Joining/Leaving</div>
                            </div>

                            {/* select departure city */}
                            <div className=' relative gap-4  py-4'>
                                <div className='ml-2'>
                                    <CalendarFunc />
                                </div>
                                <div className='ml-2'>
                                    <p className='font-semibold text-base mb-2 mt-1 text-graytext'>About us</p>

                                    
                                    <p className='text-para' dangerouslySetInnerHTML={{__html:tourAboutHighlight?.about}}></p>
                                    
                                </div>

                                <div>
                                    <p className='text-md ml-2 font-semibold my-2 text-graytext'>Highlights</p>
                                    <div>
                                        {tourAboutHighlight?.highlights?.map((highlight) => (
                                            <ol key={highlight._id} className='list-disc   '>
                                                <li className='ml-10 text-para'>{highlight}</li>
                                            </ol>
                                        ))}
                                    </div>
                                </div>




                            </div>
                        </div>

                    </div>
                    
                    <div className="absolute bottom-0 bg-white my-1">
                        <p className="text-sm">View itinerary for the tours you have booked by logging into your
                            account.</p>
                    </div>

                </div>
            </div>
        </>
    )
}