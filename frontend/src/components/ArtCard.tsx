"use client";
import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ArtCardProps {
    id: string;
    title: string;
    image: string;
    artist: { name: string; avatar: string };
    price: number;
    likes: number;
    type: 'Human' | 'AI';
}

const ArtCard: React.FC<ArtCardProps> = ({ id, title, image, artist, price, likes, type }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group relative rounded-2xl overflow-hidden glass hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300"
        >
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white border border-white/10">
                    {type}
                </div>
            </div>

            {/* Content */}
            <div className="p-4 bg-gradient-to-t from-black/90 to-transparent absolute bottom-0 inset-x-0 pt-12">
                <h3 className="text-lg font-bold text-white truncate">{title}</h3>

                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                        <img src={artist.avatar} alt={artist.name} className="w-6 h-6 rounded-full border border-white/20" />
                        <span className="text-sm text-gray-300 truncate max-w-[80px]">{artist.name}</span>
                    </div>
                    <div className="text-indigo-400 font-bold">
                        {price > 0 ? `$${price}` : 'Free'}
                    </div>
                </div>

                <div className="flex items-center gap-4 mt-3 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    <button className="flex items-center gap-1 text-xs text-gray-300 hover:text-pink-500 transition">
                        <Heart size={14} /> {likes}
                    </button>
                    <button className="flex items-center gap-1 text-xs text-gray-300 hover:text-white transition">
                        <MessageCircle size={14} /> Comment
                    </button>
                    <Link href={`/art/${id}`} className="ml-auto bg-white text-black text-xs font-bold px-3 py-1.5 rounded-full hover:bg-indigo-500 hover:text-white transition">
                        View
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default ArtCard;
