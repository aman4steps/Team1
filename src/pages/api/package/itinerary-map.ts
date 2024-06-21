import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const { itineraryMap } = req.body;

    return res.status(400).json({ message: 'Package ID is required' });
}