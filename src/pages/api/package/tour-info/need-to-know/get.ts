import NeedToKnow from "@/models/package/TourInfo/NeedToKnow";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const NeedToKnowGroupData = await NeedToKnow.find();

        return res.status(200).json({
            message: 'NeedToKnow find Successful',
            NeedToKnowGroupData
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}