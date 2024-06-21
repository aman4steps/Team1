import "../../../app/globals.css";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function FlightBookingForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOn, setIsOn] = useState(false);
    const [file, setFile] = useState(null);
    const [flightBooking, setFlightBooking] = useState({
        start: { to: "", time: "" },
        end: { to: "", time: "" }
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const [flightBookingList, setFlightBookingList] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);
    const [validationErrors, setValidationErrors] = useState({
        start: { to: "", time: "" },
        end: { to: "", time: "" }
    });

    const toggleModal = () => setIsOpen(!isOpen);
    const toggleSwitch = () => setIsOn(!isOn);

    const handleChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const handleFlightBooking = (e) => {
        const { name, value } = e.target;
        const [location, property] = name.split(".");
        setFlightBooking(prev => ({
            ...prev,
            [location]: { ...prev[location], [property]: value }
        }));
    };

    const validateForm = () => {
        const { start, end } = flightBooking;
        let valid = true;
        let errors = {
            start: { to: "", time: "" },
            end: { to: "", time: "" }
        };

        if (!start.to.trim()) {
            errors.start.to = "This field is required";
            valid = false;
        }
        if (!start.time.trim()) {
            errors.start.time = "This field is required";
            valid = false;
        }
        if (!end.to.trim()) {
            errors.end.to = "This field is required";
            valid = false;
        }
        if (!end.time.trim()) {
            errors.end.time = "This field is required";
            valid = false;
        }

        setValidationErrors(errors);
        setIsFormValid(valid);
        return valid;
    };

    const handleSubmitflightBooking = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        try {
            const method = editMode ? 'PUT' : 'POST';
            const endpoint = editMode ? `/api/package/flight-create/update-flight/${editId}` : '/api/package/flight-create/add-flight';
            const response = await fetch(endpoint, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(flightBooking),
            });
            if (response.ok) {
                fetchflightBooking();
                resetForm();
            } else {
                console.error('Failed to submit flight booking');
            }
        } catch (error) {
            console.error('Error during form submission:', error);
        }
    };

    const fetchflightBooking = async () => {
        try {
            const response = await fetch('/api/package/flight-create/get-flight');
            const data = await response.json();
            setFlightBookingList(data.flightBooking || []);
        } catch (error) {
            console.error('Error fetching flight booking:', error);
        }
    };

    const flightBookingDelete = async (flightBooking_id) => {
        try {
            const response = await fetch(`/api/package/flight-create/delete-flight`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ flightBooking_id })
            });
            if (response.ok) {
                fetchflightBooking();
            } else {
                console.error('Failed to delete flight booking');
            }
        } catch (error) {
            console.error('Error deleting flight booking:', error);
        }
    };

    const handleEdit = (item) => {
        setFlightBooking(item);
        setEditMode(true);
        setEditId(item._id);
    };

    const handleDelete = async (flightBooking_id) => {
        toggleModal();
        await flightBookingDelete(flightBooking_id);
    };

    const handleSubmitNext = () => {
        if (flightBookingList.length === 0) {
            alert("At least one booking must be made");
        } else {
            // Implement your logic to switch to the next tab
            setActiveTab("Tab3");
        }
    };

    const resetForm = () => {
        setFlightBooking({
            start: { to: "", time: "" },
            end: { to: "", time: "" }
        });
        setEditMode(false);
        setEditId(null);
        setValidationErrors({
            start: { to: "", time: "" },
            end: { to: "", time: "" }
        });
    };

    useEffect(() => {
        fetchflightBooking();
    }, []);

    return (
        <>
            <div className="flex items-center gap-1">
                <button
                    onClick={toggleSwitch}
                    className={`px-4 py-2 rounded-full focus:outline-none ${isOn ? 'bg-green-500' : 'bg-gray-300'}`}
                >
                    <span className={`${isOn ? 'block' : 'hidden'}`}>On</span>
                    <span className={`${isOn ? 'hidden' : 'block'}`}>Off</span>
                </button>
                <div>
                    <p className={`${isOn ? 'text-black' : 'text-slate-300'}`}>Flight</p>
                </div>
            </div>

            <div className="bg-white rounded p-3">
                <div>
                    <p className="font-semibold text-base">Flight</p>
                </div>
                <div className="p-5 rounded border">
                    <form onSubmit={handleSubmitflightBooking}>
                        <div className="md:flex justify-between">
                            <div className="block md:flex gap-5 items-center">
                                <div className="flex md:flex-col gap-3">
                                    <div className="flex flex-col">
                                        <label htmlFor="start.to" className="text-para font-semibold">To :</label>
                                        <input
                                            name="start.to"
                                            value={flightBooking.start.to}
                                            onChange={handleFlightBooking}
                                            className="h-8 px-2 rounded border text-para"
                                            type="text"
                                        />
                                        {validationErrors.start.to && (
                                            <span className="text-red-500 text-sm">{validationErrors.start.to}</span>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="start.time" className="text-para font-semibold">Start Date/Time :</label>
                                        <input
                                            name="start.time"
                                            value={flightBooking.start.time}
                                            onChange={handleFlightBooking}
                                            className="h-8 px-2 rounded border text-para"
                                            type="text"
                                        />
                                        {validationErrors.start.time && (
                                            <span className="text-red-500 text-sm">{validationErrors.start.time}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="flex md:flex-col gap-3 md:border-l md:pl-3">
                                    <div className="flex flex-col">
                                        <label htmlFor="end.to" className="text-para font-semibold">From :</label>
                                        <input
                                            name="end.to"
                                            value={flightBooking.end.to}
                                            onChange={handleFlightBooking}
                                            className="h-8 px-2 rounded border text-para"
                                            type="text"
                                        />
                                        {validationErrors.end.to && (
                                            <span className="text-red-500 text-sm">{validationErrors.end.to}</span>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="end.time" className="text-para font-semibold">End Date/Time :</label>
                                        <input
                                            name="end.time"
                                            value={flightBooking.end.time}
                                            onChange={handleFlightBooking}
                                            className="h-8 px-2 rounded border text-para"
                                            type="text"
                                        />
                                        {validationErrors.end.time && (
                                            <span className="text-red-500 text-sm">{validationErrors.end.time}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="my-10">
                                    <div className="w-2/3">
                                        <img className="w-20 shadow-md" src={file} alt="Flight" />
                                    </div>
                                    <input type="file" onChange={handleChange} className="object-cover" />
                                </div>
                            </div>
                        </div>
                        <div className="my-3">
                            <button type="submit" className="bg-navyblack text-white rounded px-10 py-1">
                                {editMode ? 'Update Booking' : 'Add Booking'}
                            </button>
                        </div>
                    </form>
                    <hr className="my-10 mb-5" />
                    <div className="text-[14px]">
                        <ul>
                            {flightBookingList.map((item, index) => (
                                <li key={item._id}>
                                    <div className='flex justify-between even:bg-slate-50 px-5'>
                                        <div className="flex justify-between gap-5 items-center">
                                            <p className='capitalize flex gap-2 leading-8'>
                                                <span>{index + 1}.</span>
                                                <span>To: {item.start.to} {item.start.time}</span>
                                                <span> | </span>
                                                <span>From: {item.end.to} {item.end.time}</span>
                                            </p>
                                            <div className="w-10">
                                                <img className="object-cover" src="https://1000logos.net/wp-content/uploads/2021/07/IndiGo-Logo-500x314.png" alt="Airline Logo" />
                                            </div>
                                        </div>
                                        <div className='flex gap-2'>
                                            <FaEdit
                                                size={20}
                                                className='mt-1 hover:text-red-500 cursor-pointer'
                                                onClick={() => handleEdit(item)}
                                            />
                                            <div>
                                                {isOpen && (
                                                    <div className="fixed inset-0 flex items-center justify-center z-50">
                                                        <div className="absolute inset-0 bg-black opacity-50"></div>
                                                        <div className="bg-white p-8 rounded shadow-lg z-50">
                                                            <h2 className="text-xl font-bold mb-4">Delete Item</h2>
                                                            <p>Are you sure you want to delete this item?</p>
                                                            <div className="flex justify-end mt-4">
                                                                <button onClick={toggleModal} className="mr-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                                                                    Cancel
                                                                </button>
                                                                <button onClick={() => handleDelete(item._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                <MdDeleteForever onClick={toggleModal} size={24} className='mt-1 hover:text-red-500 cursor-pointer' />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <button onClick={handleSubmitNext} className="w-full rounded py-2 bg-black text-white">
                Save
            </button>
        </>
    );
}
