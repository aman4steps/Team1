import Package from "@/models/Package"
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }
        // const { packageId,packageList_id } = req.body;
        // await Package.findByIdAndDelete(packageId,packageList_id)
        const { packageId,packageList_id } = req.body;
        await Package.findByIdAndDelete(packageId,packageList_id)
        return res.status(200).json({ message: 'Package deleted' });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}