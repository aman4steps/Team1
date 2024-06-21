import PackageMasterCategory from "@/models/package/PackageCategory";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const packageCategories = await PackageMasterCategory.find();

        return res.status(200).json({
            message: 'Categories found successfully',
            data: packageCategories
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}