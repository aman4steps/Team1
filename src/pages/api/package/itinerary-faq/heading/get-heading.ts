import ItineraryFaqHeading from "@/models/package/ItineraryHeading/heading";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const FaqHeading = await ItineraryFaqHeading.find();

        return res.status(200).json({
            message: 'faq heading find Successful',
            FaqHeading
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}