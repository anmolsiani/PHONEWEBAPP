import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    username: string;
    email: string;
    password?: string;
    bio?: string;
    avatar?: string;
    role: 'user' | 'admin' | 'developer';
    walletBalance: number;
}

const UserSchema: Schema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String }, // Optional for OAuth
    bio: { type: String, default: 'Art enthusiast.' },
    avatar: { type: String, default: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80' },
    role: { type: String, enum: ['user', 'admin', 'developer'], default: 'user' },
    walletBalance: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model<IUser>('User', UserSchema);
