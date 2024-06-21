import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const packageMap = new mongoose.Schema({
    mapCode: {
        type: String,
        required: true
    },
},
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
);

const PackageMap = mongoose.models.PackageMap || mongoose.model('PackageMap', packageMap)

export default PackageMap;