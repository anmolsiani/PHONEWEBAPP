import { Request, Response } from 'express';
import Art from '../models/Art';
import { AuthRequest } from '../middleware/auth';

export const getArts = async (req: Request, res: Response) => {
    try {
        const { type } = req.query;
        const filter = type ? { type } : {};
        const arts = await Art.find(filter).populate('creator', 'username avatar').sort({ createdAt: -1 });
        res.json(arts);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const createArt = async (req: Request, res: Response) => {
    try {
        // In a real app, handle file upload here via Multer/Cloudinary middleware before this
        const { title, description, imageUrl, type, price, category } = req.body;

        // Cast req to AuthRequest to access user
        const userId = (req as AuthRequest).user?.id;

        if (!userId) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const art = await Art.create({
            title, description, imageUrl, type, price, category,
            creator: userId,
            owner: userId
        });
        res.status(201).json(art);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
