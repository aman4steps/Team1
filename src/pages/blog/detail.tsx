import { ClassNames } from "@emotion/react";
import "../../app/globals.css";

export default function () {
    return (
        <div className="bg-slate-100">
            <div className="container-wrapper py-10">
                <div className="grid grid-cols-1 lg:grid-cols-[3fr,1fr] gap-5">
                    <div className=" rounded bg-white">
                        <h1>Hello i am content</h1>
                    </div>
                    {/* sidebar content is here down */}
                    <div className="">
                        <div className="relative rounded-t-lg overflow-hidden">
                            <img className="w-full  " src="https://images.unsplash.com/photo-1476297820623-03984cf5cdbb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <span className="absolute top-0 right-0 rounded-badge px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
                            <div className="border rounded-b-lg px-2 bg-white">
                                <div className="flex mt-3 gap-3 mb-3">
                                    <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
                                    <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
                                    <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>

                                </div>
                                <div className=" line-clamp-3 my-2">
                                    <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
                                    <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* banner */}
            <div className="container-wrapper">
                <img className="w-full h-72 object-cover rounded-lg" src="https://images.unsplash.com/photo-1447746249824-4be4e1b76d66?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            </div>
            {/* suggested card is here */}
            <div className="container-wrapper pt-10">
                <p className="font-semibold text-[38px]">Related Post</p>
            </div>
            <div className="container-wrapper flex gap-5 py-5">
                <div className="relative rounded-t-lg overflow-hidden">
                    <img className="w-full  " src="https://images.unsplash.com/photo-1476297820623-03984cf5cdbb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <span className="absolute top-0 right-0 rounded-badge px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
                    <div className="border rounded-b-lg px-2 bg-white">
                        <div className="flex mt-3 gap-3 mb-3">
                            <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
                            <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
                            <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>

                        </div>
                        <div className=" line-clamp-3 my-2">
                            <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
                            <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
                        </div>

                    </div>
                </div>
                {/* repeat */}
                <div className="relative rounded-t-lg overflow-hidden">
                    <img className="w-full  " src="https://images.unsplash.com/photo-1476297820623-03984cf5cdbb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <span className="absolute top-0 right-0 rounded-badge px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
                    <div className="border rounded-b-lg px-2 bg-white">
                        <div className="flex mt-3 gap-3 mb-3">
                            <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
                            <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
                            <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>

                        </div>
                        <div className=" line-clamp-3 my-2">
                            <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
                            <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
                        </div>

                    </div>
                </div>
                {/* repeat */}
                <div className="relative rounded-t-lg overflow-hidden">
                    <img className="w-full  " src="https://images.unsplash.com/photo-1476297820623-03984cf5cdbb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <span className="absolute top-0 right-0 rounded-badge px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
                    <div className="border rounded-b-lg px-2 bg-white">
                        <div className="flex mt-3 gap-3 mb-3">
                            <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
                            <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
                            <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>

                        </div>
                        <div className=" line-clamp-3 my-2">
                            <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
                            <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
                        </div>

                    </div>
                </div>
                {/* repeat */}
                <div className="relative rounded-t-lg overflow-hidden">
                    <img className="w-full  " src="https://images.unsplash.com/photo-1476297820623-03984cf5cdbb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <span className="absolute top-0 right-0 rounded-badge px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
                    <div className="border rounded-b-lg px-2 bg-white">
                        <div className="flex mt-3 gap-3 mb-3">
                            <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
                            <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
                            <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>

                        </div>
                        <div className=" line-clamp-3 my-2">
                            <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
                            <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
                        </div>

                    </div>
                </div>
                {/* repeat */}
            </div>
            {/* smaple card */}
            <div className="py-10 container-wrapper flex">
                <div className="bg-white p-5 rounded-md overflow-hidden w-1/4 shadow-sm">
                    <div className="relative ">

                        <div className="  w-60 h-36 bg-red-600 -rotate-3"></div>
                        <img className="absolute top-0 w-60 h-36" src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className=" rounded-b-lg px-2 bg-white">
                        <div className="flex mt-3 gap-3 mb-3">
                            <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
                            <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
                            <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>

                        </div>
                        <div className=" line-clamp-3 my-2">
                            <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
                            <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
                        </div>
                        <div>
                            <p className="text-sm hover:underline text-indigo-800 cursor-pointer font-semibold">Read More > </p>
                        </div>
                        <div className="flex justify-end mt-5">
                            <span className="text-sm  text-slate-400">2 March 2024</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}