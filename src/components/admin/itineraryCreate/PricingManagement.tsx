import React, { useEffect, useState } from 'react';
import { LiaRupeeSignSolid } from 'react-icons/lia';

const PricingManagement = ({ itinerary }) => {
    const [pricingData, setPricingData] = useState({
        singleRoom: '',
        twinSharingRoom: '',
        tripleSharingRoom: '',
        quadSharingRoom: '',
        infantSharingRoom: '',
        childUnderFive: '',
        adults: "",
        childOverFive: '',
        packageId: ""
    });

    const [itineraryPriceApi, setItineraryPriceApi] = useState({
        singleRoom: '',
        twinSharingRoom: '',
        tripleSharingRoom: '',
        quadSharingRoom: '',
        infantSharingRoom: '',
        childUnderFive: '',
        adults: "",
        childOverFive: '',
        packageId: ""
    });

    useEffect(() => {
        if (itinerary && itinerary.prices) {
            const { singleRoom, twinSharingRoom, tripleSharingRoom, quadSharingRoom, infantSharingRoom, childUnderFive, adults, childOverFive } = itinerary.prices;
            setPricingData({
                singleRoom: singleRoom || '',
                twinSharingRoom: twinSharingRoom || '',
                tripleSharingRoom: tripleSharingRoom || '',
                quadSharingRoom: quadSharingRoom || '',
                infantSharingRoom: infantSharingRoom || '',
                childUnderFive: childUnderFive || '',
                adults: adults || '',
                childOverFive: childOverFive || '',
                packageId: itinerary._id || ''
            });
        }
    }, [itinerary]);



    console.log("itineray data show is here pricing management", itineraryPriceApi);


    const [errors, setErrors] = useState({});

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setPricingData({ ...pricingData, [name]: value });
    // };
    const handleChange = (event) => {
        const { name, value } = event.target;
        
        if (value >= 0 || value === '') {
            setPricingData({ ...pricingData, [name]: value });
        } else {
            setPricingData({ ...pricingData, [name]: '' });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        let errors = {};
        let hasError = false;
        setPricingData({ ...pricingData, packageId: itinerary?._id, })

        // Check for empty fields
        Object.keys(pricingData).forEach((key) => {
            if (pricingData[key] === '') {
                errors[key] = 'This field is required';
                hasError = true;
                console.log("key data ", key);
                console.log("pricing  data ", pricingData);

            }
        });

        // Validate numeric fields
        // const numericFields = ['singleRoom', 'twinSharingRoom', 'tripleSharingRoom', 'quadSharingRoom', 'infantSharingRoom', 'childUnderFive', 'childOverFive'];
        // numericFields.forEach((field) => {
        //     if (isNaN(pricingData[field])) {
        //         errors[field] = 'Please enter a valid number';
        //         hasError = true;
        //     }
        // });

        // If there are errors, set them in state and prevent form submission
        if (hasError) {
            setErrors(errors);
        } else {
            // If no errors, proceed with form submission
            console.log("your data is now on console", pricingData);
            try {
                const res = await fetch('/api/package/price', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(pricingData)
                })
                const data = await res.json();

                console.log("Highlight & About data show is here", pricingData)

            } catch (error) {
                console.log(error);
            }
            // Reset errors
            setErrors({});
        }
    };

    return (
        <>
            <div className="p-2 rounded-md">
                <div className="border bg-white rounded-md p-4">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="text-para flex flex-col sm:flex-row items-baseline mb-5">
                            <label className="font-semibold w-40" htmlFor="">
                                Single Room :
                            </label>
                            <div className="flex gap-1 items-center">
                                <LiaRupeeSignSolid size={18} />
                                <input
                                    onChange={handleChange}
                                    className="h-8 appearance-none bg-white border px-4 py-2 pr-8 rounded leading-tight focus:outline"
                                    name="singleRoom"
                                    // defaultValue={itinerary?.prices?.singleRoom}
                                    value={pricingData.singleRoom}
                                    type="number"
                                />
                            </div>
                            {errors.singleRoom && <p className="text-red-500 text-sm ml-2">{errors.singleRoom}</p>}
                        </div>
                        {/* Repeat similar structure for other fields */}
                        <div className="text-para flex flex-col sm:flex-row items-baseline mb-5">
                            <label className="font-semibold w-40" htmlFor="">
                                Twin Sharing Room :
                            </label>
                            <div className="flex gap-1 items-center">
                                <LiaRupeeSignSolid size={18} />
                                <input
                                    onChange={handleChange}
                                    className="h-8 appearance-none bg-white border px-4 py-2 pr-8 rounded leading-tight focus:outline"
                                    name="twinSharingRoom"
                                    // defaultValue={itinerary?.prices?.twinSharingRoom}
                                    value={pricingData.twinSharingRoom}
                                    type="number"
                                />
                            </div>
                            {errors.twinSharingRoom && <p className="text-red-500 text-sm ml-2">{errors.twinSharingRoom}</p>}
                        </div>
                        {/* Repeat similar structure for other fields */}
                        <div className="text-para flex flex-col sm:flex-row items-baseline mb-5">
                            <label className="font-semibold w-40" htmlFor="">
                                Triple Sharing Room :
                            </label>
                            <div className="flex gap-1 items-center">
                                <LiaRupeeSignSolid size={18} />
                                <input
                                    onChange={handleChange}
                                    className="h-8 appearance-none bg-white border px-4 py-2 pr-8 rounded leading-tight focus:outline"
                                    name="tripleSharingRoom"
                                    // defaultValue={itinerary?.prices?.tripleSharingRoom}
                                    value={pricingData.tripleSharingRoom}
                                    type="number"
                                />
                            </div>
                            {errors.tripleSharingRoom && <p className="text-red-500 text-sm ml-2">{errors.tripleSharingRoom}</p>}
                        </div>
                        {/* Repeat similar structure for other fields */}
                        <div className="text-para flex flex-col sm:flex-row items-baseline mb-5">
                            <label className="font-semibold w-40" htmlFor="">
                                Quad Sharing Room :
                            </label>
                            <div className="flex gap-1 items-center">
                                <LiaRupeeSignSolid size={18} />
                                <input
                                    onChange={handleChange}
                                    className="h-8 appearance-none bg-white border px-4 py-2 pr-8 rounded leading-tight focus:outline"
                                    name="quadSharingRoom"
                                    // defaultValue={itinerary?.prices?.quadSharingRoom}
                                    value={pricingData.quadSharingRoom}
                                    type="number"
                                />
                            </div>
                            {errors.quadSharingRoom && <p className="text-red-500 text-sm ml-2">{errors.quadSharingRoom}</p>}
                        </div>
                        {/* Repeat similar structure for other fields */}
                        <div className="text-para flex flex-col sm:flex-row items-baseline mb-5">
                            <label className="font-semibold w-40" htmlFor="">
                                Infant Sharing Room :
                            </label>
                            <div className="flex gap-1 items-center">
                                <LiaRupeeSignSolid size={18} />
                                <input
                                    onChange={handleChange}
                                    className="h-8 appearance-none bg-white border px-4 py-2 pr-8 rounded leading-tight focus:outline"
                                    name="infantSharingRoom"
                                    // defaultValue={itinerary?.prices?.infantSharingRoom}
                                    value={pricingData.infantSharingRoom}
                                    type="number"
                                />
                            </div>
                            {errors.infantSharingRoom && <p className="text-red-500 text-sm ml-2">{errors.infantSharingRoom}</p>}
                        </div>
                        {/* Repeat similar structure for other fields */}
                        <div className="text-para flex flex-col sm:flex-row items-baseline mb-5">
                            <label className="font-semibold w-40" htmlFor="">
                                Child (2 ~ 5) :
                            </label>
                            <div className="flex gap-1 items-center">
                                <LiaRupeeSignSolid size={18} />
                                <input
                                    onChange={handleChange}
                                    className="h-8 appearance-none bg-white border px-4 py-2 pr-8 rounded leading-tight focus:outline"
                                    name="childUnderFive"
                                    // defaultValue={itinerary?.prices?.childUnderFive}
                                    value={pricingData.childUnderFive}
                                    type="number"
                                />
                            </div>
                            {errors.childUnderFive && <p className="text-red-500 text-sm ml-2">{errors.childUnderFive}</p>}
                        </div>
                        {/* Repeat similar structure for other fields */}
                        <div className="text-para flex flex-col sm:flex-row items-baseline mb-5">
                            <label className="font-semibold w-40" htmlFor="">
                                Adults :
                            </label>
                            <div className="flex gap-1 items-center">
                                <LiaRupeeSignSolid size={18} />
                                <input
                                    onChange={handleChange}
                                    className="h-8 appearance-none bg-white border px-4 py-2 pr-8 rounded leading-tight focus:outline"
                                    name="adults"
                                    // defaultValue={itinerary?.prices?.childUnderFive}
                                    value={pricingData.adults}
                                    type="number"
                                />
                            </div>
                            {errors.adults && <p className="text-red-500 text-sm ml-2">{errors.adults}</p>}
                        </div>
                        {/* Repeat similar structure for other fields */}
                        <div className="text-para flex flex-col sm:flex-row items-baseline mb-5">
                            <label className="font-semibold w-40" htmlFor="">
                                Child (5 - 11) :
                            </label>
                            <div className="flex gap-1 items-center">
                                <LiaRupeeSignSolid size={18} />
                                <input
                                    onChange={handleChange}
                                    className="h-8 appearance-none bg-white border px-4 py-2 pr-8 rounded leading-tight focus:outline"
                                    name="childOverFive"
                                    // defaultValue={itinerary?.prices?.childOverFive}
                                    value={pricingData.childOverFive}
                                    type="number"
                                />
                            </div>
                            {errors.childOverFive && <p className="text-red-500 text-sm ml-2">{errors.childOverFive}</p>}
                        </div>
                        <div className="mt-5">
                            <button type="submit" className="bg-navyblack text-white rounded px-10 py-1">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default PricingManagement;
