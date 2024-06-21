import Booking from "@/models/Booking";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {

        const { adult, child, infant, singleRoom, twinRoom, tripleRoom, quardRoom, status, packageId } = req.body

        const bookingDetails = await Booking.create({
            packageDetails: packageId,
            adult, child, infant, singleRoom, twinRoom, tripleRoom, quardRoom, status,
        });

        return res.status(201).json(bookingDetails);
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
