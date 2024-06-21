import Package from "@/models/Package";
import PackageHighlight from "@/models/package/PackageHighlight";
import PackageDayWise from "@/models/package/PackageDayWise";
import PackagePrice from "@/models/package/PackagePrice";
import Inclusion from "@/models/package/TourInfo/Inclusion";
import Exclusion from "@/models/package/TourInfo/Exclusion";
import Cancellation from "@/models/package/TourInfo/Cancellation";
import PaymentTerm from "@/models/package/TourInfo/PaymentTerm";
import NeedToKnow from "@/models/package/TourInfo/NeedToKnow";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, query, body } = req;

    switch (method) {
        case 'GET':
            try {
                const packageDetails = await Package.findOne({ url: query.packageUrl });
                console.log("Package detail", packageDetails);

                if (!packageDetails) {
                    return res.status(404).json({ message: 'Package not found.' });
                }

                const highlightDetails = await PackageHighlight.findOne({ package: packageDetails._id }, 'highlights');
                const dayDetails = await PackageDayWise.findOne({ package: packageDetails._id }, 'days');
                const priceDetails = await PackagePrice.findOne({ package: packageDetails._id });
                const inclusionDetails = await Inclusion.findOne({ package: packageDetails._ids });
                const exclusionDetails = await Exclusion.findOne({ package: packageDetails._ids });
                const cancellationDetails = await Cancellation.findOne({ package: packageDetails._ids });
                const paymentTermDetails = await PaymentTerm.findOne({ package: packageDetails._ids });
                const needToKnowDetails = await NeedToKnow.findOne({ package: packageDetails._ids });

                packageDetails._doc.highlights = highlightDetails ? highlightDetails.highlights : [];
                packageDetails._doc.days = dayDetails ? dayDetails.days : [];
                packageDetails._doc.prices = priceDetails;
                packageDetails._doc.inclusion = inclusionDetails || {};
                packageDetails._doc.exclusion = exclusionDetails || {};
                packageDetails._doc.cancellation = cancellationDetails || {};
                packageDetails._doc.paymentTerm = paymentTermDetails || {};
                packageDetails._doc.needToKnow = needToKnowDetails || {};

                return res.status(200).json(packageDetails);
            } catch (error) {
                console.error('Error handling GET request:', error);
                return res.status(500).json({ message: 'Internal Server Error' });
            }
        case 'POST':
            try {
                const packageDetails = await Package.findOne({ url: query.packageUrl });

                if (!packageDetails) {
                    return res.status(404).json({ message: 'Package not found.' });
                }

                const { inclusion, exclusion, cancellation, paymentTerm, needToKnow } = body;

                packageDetails.inclusion = inclusion;
                packageDetails.exclusion = exclusion;
                packageDetails.cancellation = cancellation;
                packageDetails.paymentTerm = paymentTerm;
                packageDetails.needToKnow = needToKnow;

                await packageDetails.save();

                return res.status(200).json({ message: 'Package information updated successfully.' });
            } catch (error) {
                console.error('Error handling POST request:', error);
                return res.status(500).json({ message: 'Internal Server Error' });
            }
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            return res.status(405).json({ message: `Method ${method} not allowed` });
    }
}
