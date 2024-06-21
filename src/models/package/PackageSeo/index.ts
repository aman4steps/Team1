import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const packageSeo = new mongoose.Schema({
    meta_title: {
        type:"string",
        required:true
    },
    meta_keyword: {
        type:"string",
        required:true
    },
    meta_description: {
        type:"string",
        required:true
    },
    canonical_url: {
        type:"string",
        required:true
    },
    custom_url: {
        type:"string",
        required:true
    }
},
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
);

const PackageSeo = mongoose.models.PackageSeo || mongoose.model('PackageSeo', packageSeo)

export default PackageSeo;