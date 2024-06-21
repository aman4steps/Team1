import "../../../app/globals.css";



const Card3 = () => {
  return (
    <div className="relative flex-shrink-0 max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg my-2">
                <div
                    className=" mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <img className=""
                        src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                        alt="ui/ux review check" />

                </div>
                <div className="px-6 py-4">
                    <div className="flex items-center mb-3">
                        <h5
                            className="block font-sans text-[18px] font-semibold antialiased  leading-snug tracking-normal text-blue-gray-900">
                            Wooden House, Florida
                        </h5>
                        {/*
                        <!-- <p
                        className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="-mt-0.5 h-5 w-5 text-yellow-700">
                            <path fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd"></path>
                        </svg>
                        5.0
                    </p> --> */}
                    </div>
                    <div className=" line-clamp-3">

                    <p
                        className=" block font-sans text-[15px] antialiased font-light leading-relaxed text-gray-700">
                        Enter a freshly updated and thoughtfully furnished peaceful home
                        surrounded by ancient trees, stone walls.
                    </p>
                    </div>
                    <div className="items-center mt-2">

                        <div className="text-right">
                            <p className="text-[14px] leading-5 text-cyan-400 font-semibold">SUPER DEAL PRICE</p>
                            <p className="text-[12px] leading-5">Starts From <span className="text-[22px] font-medium">₹
                                    3,50,000</span></p>
                            <p className="text-[10px] leading-5">per person on twin sharing</p>
                            {/* <p className="text-[14px] leading-5 font-medium underline text-blue-900">from ₹
                                19,423/months</p> */}
                        </div>
                    </div>
                </div>
                <div className="p-4 pt-0">
                    <button
                        className="block w-full bg-navyblack py-3 rounded-md text-white"
                        type="button">
                        View details
                    </button>
                </div>
            </div>
  )
}

export default Card3