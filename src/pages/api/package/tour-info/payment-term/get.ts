import PaymentTerm from "@/models/package/TourInfo/PaymentTerm";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const PaymentTermGroupData = await PaymentTerm.find();

        return res.status(200).json({
            message: 'PaymentTerm find Successful',
            PaymentTermGroupData
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}