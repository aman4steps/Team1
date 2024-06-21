import websiteSchemaModel from "@/models/website-function/websiteSchema";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const websiteSchema = await websiteSchemaModel.find();

        return res.status(200).json({
            message: 'website Schema find Successful',
            websiteSchema
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}