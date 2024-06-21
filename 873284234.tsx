<form onSubmit={handleSubmit}>
    <div className=' border-l-4 border-red-400 pl-3 -ml-4'>
        <h3 className='font-semibold'>Choose Date</h3>
    </div>
    <div className='pt-4 border-b pb-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='flex flex-col gap-3'>
                <div className='text-para flex flex-col items-baseline'>
                    <label className='text-sm font-semibold' htmlFor="checkIn">Check In</label>
                    <input
                        className='text-sm w-full appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
                        type="date"
                        id="checkIn"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleInputChange}
                    />
                    {formErrors.checkIn && <span className="text-red-500">{formErrors.checkIn}</span>}
                </div>
                <div className='text-para flex flex-col items-baseline'>
                    <label className='text-sm font-semibold' htmlFor="checkOut">Check Out</label>
                    <input
                        className='text-sm w-full appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
                        type="date"
                        id="checkOut"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleInputChange}
                    />
                    {formErrors.checkOut && <span className="text-red-500">{formErrors.checkOut}</span>}
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-col'>
                    <label className='text-sm font-semibold' htmlFor="duration">Duration</label>
                    <select
                        className='text-para w-full appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                    >
                        <option value="">Duration Requirement</option>
                        <option value="">Complete Tour Package</option>
                        <option value="">Only Hotel Requirement</option>
                        <option value="">Only Transport Requirement</option>
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label className='text-sm font-semibold' htmlFor="category">Category</label>
                    <select
                        className='text-para w-full appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                    >
                        <option value="">Room Hotel Category</option>
                        <option value="">Delux</option>
                        <option value="">Budget</option>
                        <option value="">Economy</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
    {/* Add similar sections for other parts of the form */}
    <div className=' border-l-4 border-red-400 pl-3 -ml-4 mt-4 '>
        <h3 className='font-semibold'>Choose Room</h3>
    </div>
    <div className='pt-4 border-b pb-4'>
        {/* Room selection fields here */}
    </div>
    <div className=' border-l-4 border-red-400 pl-3 -ml-4 mt-4 '>
        <h3 className='font-semibold'>Make a Reservation</h3>
    </div>
    <div className='pt-4 pb-4'>
        {/* Reservation fields here */}
    </div>
    <div className='w-36 flex items-center gap-2 justify-end bg-primary text-white py-2 px-4 m-auto rounded-full'>
        <button type="submit">Book Now</button>
        <FaArrowRight />
    </div>
</form>
