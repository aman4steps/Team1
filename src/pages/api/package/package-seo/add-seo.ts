import PackageSeo from "@/models/package/PackageSeo";
import { NextApiRequest, NextApiResponse } from "next";
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { meta_title,meta_keyword,meta_description,canonical_url,custom_url } = req.body
        // console.log("booking schema request body",req.body)
        const packageSeo = await PackageSeo.create({
            // faqheading
            meta_title,
            meta_keyword,
            meta_description,
            canonical_url,
            custom_url
        })
        return res.status(201).json({
            message: 'created new fligh booking packageSeo',
            packageSeo
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}