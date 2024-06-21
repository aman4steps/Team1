import PackageMap from "@/models/package/PackageMap";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { packageId, mapCode } = req.body;

        // Check if the packageId is provided
        if (!packageId) {
            return res.status(400).json({ message: 'Package ID is required' });
        }

        // Check if a document with the provided packageId already exists
        let packageDocument = await PackageMap.findOne({ _id: packageId });

        if (packageDocument) {
            // If the document exists, update it
            packageDocument.mapCode = mapCode;
            await packageDocument.save();
            return res.status(200).json({ message: 'Updated package map code', package: packageDocument });
        } else {
            // If the document doesn't exist, create a new one
            packageDocument = await PackageMap.create({
                _id: packageId,
                mapCode
            });
            return res.status(201).json({ message: 'Created new package map code', package: packageDocument });
        }
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
