import PackageSeo from "@/models/package/PackageSeo";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const packageSeo = await PackageSeo.find();

        return res.status(200).json({
            message: 'Package SEO find Successful',
            packageSeo
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}