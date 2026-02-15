import mongoose, { Schema, Document } from 'mongoose';

export interface IArt extends Document {
    title: string;
    description: string;
    imageUrl: string;
    creator: mongoose.Types.ObjectId;
    owner: mongoose.Types.ObjectId;
    type: 'Human' | 'AI';
    price: number;
    forSale: boolean;
    category: string;
    likes: mongoose.Types.ObjectId[];
}

const ArtSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String, required: true },
    creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, enum: ['Human', 'AI'], required: true },
    price: { type: Number, default: 0 },
    forSale: { type: Boolean, default: false },
    category: { type: String, default: 'General' },
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

export default mongoose.model<IArt>('Art', ArtSchema);
