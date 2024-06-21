import "../app/globals.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from "react";

const MAX = 99100;
const MIN = 0;
const marks = [
    {
        value: MIN,
        label: '',
    },
    {
        value: MAX,
        label: '',
    },
];
// tour duration
function valuetext(value: number) {
    return `${value}°C`;
}

export default function ({ onApplyFilter }) {


    const [priceRange, setPriceRange] = useState({ min: 0, max: 9900 });

    const handleApplyFilter = () => {
        onApplyFilter(priceRange);
    };


    // tour duration value
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };
    return (
        <>
            <div>
                <div className="bg-white rounded-md sticky top-2 ">
                    <div className="p-5">
                        <div className="flex justify-between pb-2">
                            <p className="text-[16px] font-semibold">Package Prices</p>
                            <p className="text-[12px] underline text-blue-800 cursor-pointer">Clear All</p>
                        </div>
                        <div>
                            <div>
                                <Box>
                                    <Slider
                                        className='w-full'
                                        marks={marks}
                                        step={100}
                                        value={[priceRange.min, priceRange.max]}
                                        valueLabelDisplay="auto"
                                        min={MIN}
                                        max={MAX}
                                        onChange={(_, newValue) => setPriceRange({ min: newValue[0], max: newValue[1] })}
                                        sx={{ color: "#2A2C41" }}
                                    />
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }} >
                                        <p className='text-para'>{priceRange.min} - {priceRange.max} Packages</p>
                                    </Box>
                                </Box>

                            </div>

                        </div>

                    </div>
                    <div>
                        <div className="border-t p-5 py-0">
                            <div>
                                <p className="text-[16px] font-semibold my-2">Tour Duration</p>
                            </div>
                            <Box sx={{ width: '100%' }}>
                                <Slider
                                    getAriaLabel={() => 'Temperature range'}
                                    value={value}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                    sx={{ color: "#2A2C41" }}
                                />
                            </Box>
                            <div>
                                <div className="flex justify-between mb-4">
                                    <p className="text-[14px]">Min <span>{value[0]} days</span></p>
                                    <p className="text-[14px]">Max <span>{value[1]} days</span></p>
                                </div>
                            </div>

                        </div>
                        <div className="border-b mt-2"></div>
                        <div className="px-5 py-2">
                            <p className="text-[16px] font-semibold my-2">Departure City</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 px-5 pb-2 py-2 ">
                                <input className="cursor-pointer h-5 w-5 rounded-lg accent-navyblack" type="checkbox"
                                    id="vehicle1" name="vehicle1" value="Bike" />
                                <label htmlFor="vehicle1" className="cursor-pointer label-text text-[14px]"> Banglore</label>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 px-5 pb-2 py-2">
                                <input className="cursor-pointer h-5 w-5 rounded-lg accent-navyblack" type="checkbox"
                                    id="vehicle2" name="vehicle1" value="Bike" />
                                <label htmlFor="vehicle2" className="cursor-pointer label-text text-[14px]"> Banglore</label>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 px-5 pb-2 py-2">
                                <input className="cursor-pointer h-5 w-5 rounded-lg accent-navyblack" type="checkbox"
                                    id="vehicle3" name="vehicle1" value="Bike" />
                                <label htmlFor="vehicle3" className="cursor-pointer label-text text-[14px]"> Banglore</label>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 px-5 pb-2 py-2">
                                <input className="cursor-pointer h-5 w-5 rounded-lg accent-navyblack" type="checkbox"
                                    id="vehicle4" name="vehicle1" value="Bike" />
                                <label htmlFor="vehicle4" className="cursor-pointer label-text text-[14px]"> Banglore</label>
                            </div>
                        </div>
                        <div className="border-b mt-5"></div>
                        <div className="pr-5 py-2">
                            <p className="text-[16px] font-semibold my-2 px-5">Package Category</p>
                            <div>
                                <div className="flex items-center gap-2 px-5 pb-2 py-2 ">
                                    <input className="cursor-pointer h-5 w-5 rounded-lg accent-navyblack" type="checkbox"
                                        id="vehicle1" name="vehicle1" value="Bike" />
                                    <label htmlFor="vehicle1" className="cursor-pointer label-text text-[14px]">
                                        Banglore</label>
                                </div>
                                <div className="flex items-center gap-2 px-5 pb-2 py-2 ">
                                    <input className="cursor-pointer h-5 w-5 rounded-lg accent-navyblack" type="checkbox"
                                        id="vehicle1" name="vehicle1" value="Bike" />
                                    <label htmlFor="vehicle1" className="cursor-pointer label-text text-[14px]">
                                        Banglore</label>
                                </div>
                                <div className="flex items-center gap-2 px-5 pb-2 py-2 ">
                                    <input className="cursor-pointer h-5 w-5 rounded-lg accent-navyblack" type="checkbox"
                                        id="vehicle1" name="vehicle1" value="Bike" />
                                    <label htmlFor="vehicle1" className="cursor-pointer label-text text-[14px]">
                                        Banglore</label>
                                </div>
                                <div className="flex items-center gap-2 px-5 pb-2 py-2 ">
                                    <input className="cursor-pointer h-5 w-5 rounded-lg accent-navyblack" type="checkbox"
                                        id="vehicle1" name="vehicle1" value="Bike" />
                                    <label htmlFor="vehicle1" className="cursor-pointer label-text text-[14px]">
                                        Banglore</label>
                                </div>



                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}