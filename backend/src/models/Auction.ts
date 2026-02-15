import mongoose, { Schema, Document } from 'mongoose';

export interface IAuction extends Document {
    art: mongoose.Types.ObjectId;
    highestBid: number;
    highestBidder?: mongoose.Types.ObjectId;
    endTime: Date;
    status: 'active' | 'ended';
}

const AuctionSchema: Schema = new Schema({
    art: { type: Schema.Types.ObjectId, ref: 'Art', required: true },
    highestBid: { type: Number, default: 0 },
    highestBidder: { type: Schema.Types.ObjectId, ref: 'User' },
    endTime: { type: Date, required: true },
    status: { type: String, enum: ['active', 'ended'], default: 'active' },
}, { timestamps: true });

export default mongoose.model<IAuction>('Auction', AuctionSchema);
