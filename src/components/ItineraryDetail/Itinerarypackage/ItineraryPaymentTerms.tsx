import "../../../app/globals.css";

export default function(){
return(
<>

    <div className="my-[10px] mb-[20px]">
        <p className="text-lg font-semibold text-graytext">Payment Terms</p>
        <p className="text-sm italic text-slate-600">Things to consider before the trip!</p>
    </div>
    <div className="lg:block hidden">
        <div className="border-b border-slate-600">
            <div className="lg:flex max-[600px]:block">
                <div className="bg-navyblack flex items-center p-3 rounded-tl-lg">
                    <p className="text-sm text-white w-[180px]"> Cancellation received no. of days prior
                        to
                        departure</p>
                </div>
                <div
                    className="bg-slate- lg:flex justify-between text-xs p-2 items-center w-full rounded-tr-lg border-t border-r border-navyblack max-[600px]:block">
                    <div
                        className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center w-[70px] ">
                        <p>D</p>
                        <p>0 to 5</p>
                    </div>
                    <div
                        className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center lg:w-[70px]">
                        <p>D</p>
                        <p>6 to 15</p>
                    </div>
                    <div
                        className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center lg:w-[70px]">
                        <p>D</p>
                        <p>16 to 30</p>
                    </div>
                    <div
                        className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center lg:w-[70px]">
                        <p>D</p>
                        <p>31 to 45</p>
                    </div>
                    <div
                        className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center lg:w-[70px]">
                        <p>D</p>
                        <p>46 to 60</p>
                    </div>
                    <div
                        className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center lg:w-[70px]">
                        <p>D</p>
                        <p>61 to 90</p>
                    </div>
                    <div
                        className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center lg:w-[70px]">
                        <p>D</p>
                        <p>91 to 120</p>
                    </div>
                    <div
                        className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center lg:w-[70px]">
                        <p>D</p>
                        <p>121 to 900</p>
                    </div>
                </div>
            </div>
        </div>
        {/*
        <!-- --> */}
        <div>
            <div className="flex">
                <div className="bg-navyblack flex items-center p-3 rounded-bl-lg">
                    <p className="text-sm text-white w-[180px]">Cancellation received no. of days prior
                        to
                        departure</p>
                </div>
                <div
                    className="bg-white flex justify-between w-full text-sm p-2 items-center rounded-br-lg border-b border-r border-slate-600">
                    <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                        <p>100%</p>
                    </div>
                    <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                        <p>85%</p>
                    </div>
                    <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                        <p>75%</p>
                    </div>
                    <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                        <p>50%</p>
                    </div>
                    <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                        <p>30%</p>
                    </div>
                    <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                        <p>20%</p>
                    </div>
                    <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                        <p>15%</p>
                    </div>
                    <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                        <p>10%</p>
                    </div>
                </div>
            </div>
        </div>
        {/*
        <!-- --> */}
    </div>
    {/* Small devices */}
    <div className='lg:hidden'>
        <div className='flex  border-b rounded-md'>
            <div className='grow'>
                <div className='bg-navyblack p-3 text-white'>
                    <p className='text-sm'>Cancellation received no. of days prior to departure</p>
                </div>
                <div>
                    <table className='w-full border-r text-sm'>
                        <tbody>

                            <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                <td className='py-2'>Right-0 to 5</td>
                            </tr>
                            <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                <td className='py-2'>D-0 to 5</td>
                            </tr>
                            <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                <td className='py-2'>D-0 to 5</td>
                            </tr>
                            <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                <td className='py-2'>D-0 to 5</td>
                            </tr>

                        </tbody>
                    </table>
                </div>


            </div>
            {/* right */}
            <div className='grow'>
                <div className='bg-navyblack p-3 text-white'>
                    <p className='text-sm'>Cancellation received no. of days prior to departure</p>
                </div>
                <div>
                    <table className='w-full text-sm'>
                        <tbody>

                            <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                <td className='py-2'>New-0 to 5</td>
                            </tr>
                            <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                <td className='py-2'>D-0 to 5</td>
                            </tr>
                            <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                <td className='py-2'>D-0 to 5</td>
                            </tr>
                            <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                <td className='py-2'>D-0 to 5</td>
                            </tr>

                        </tbody>
                    </table>
                </div>


            </div>


        </div>
    </div>

    <div>

        <div className="mt-5">
            <div className="my-[10px]">
                <p className="text-base font-semibold text-graytext">Payment Terms</p>
                <p className="text-para leading-relaxed">Guest can pay by Cheque/ Demand Draft/ Debit card / Credit card/
                    NEFT/ RTGS/ IMPS. For Debit / Credit card payment additional 1.8 % convenience charge
                    will be applicable Cheque / Demand draft should be in favour of "Veena Patil Hospitality
                    Pvt ltd"</p>
            </div>
            <p className="text-[16px] font-semibold leading-9 text-graytext">Remark</p>
            <div className="list-disc ml-[20px] flex flex-col gap-[10px]">
                <p className="text-para leading-relaxed">All meals will be provided by Veena World in case the
                    flight reaches the stipulated destination early morning or leaves destination late in
                    the evening.</p>
                <p className="text-para leading-relaxed">In Case if any sightseeing is not done due to weekly
                    closure, an alternative sightseeing will be done for the same.</p>
                <p className="text-para leading-relaxed">All meals will be provided by Veena World in case the
                    flight reaches the stipulated destination early morning or leaves destination late in
                    the evening.</p>
                <p className="text-para leading-relaxed">In Case if any sightseeing is not done due to weekly
                    closure, an alternative sightseeing will be done for the same.</p>
            </div>

        </div>

    </div>




</>
)
}