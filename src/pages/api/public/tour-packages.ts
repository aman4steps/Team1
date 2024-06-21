import City from "@/models/City";
import Package from "@/models/Package"
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { locationId } = req.query;
        const cities = await City.find({ state: locationId })
        const cityIds = cities.map(city => city._id);
        const packages = await Package.find({ location: { $in: cityIds } })

        return res.status(200).json({ packages, cities });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}