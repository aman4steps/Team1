import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const flightBookingSchema = new mongoose.Schema({
    start: {
        to: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        }
    },
    end: {
        to: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        }
    }
    
},
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
);

const FlightBookingSchema = mongoose.models.FlightBookingSchema || mongoose.model('FlightBookingSchema', flightBookingSchema)

export default FlightBookingSchema;