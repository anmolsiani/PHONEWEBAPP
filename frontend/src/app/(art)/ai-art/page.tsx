"use client";
import React from 'react';
import ArtCard from '../../../components/ArtCard';
import { Filter } from 'lucide-react';

const MOCK_AI_ARTS = [
    { _id: '101', title: 'Neural Sunset', imageUrl: 'https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=800&q=80', price: 50, creator: { username: 'AI_Genius', avatar: 'https://i.pravatar.cc/150?u=4' }, type: 'AI' as const, likes: 104 },
    { _id: '102', title: 'Glitch Dimension', imageUrl: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80', price: 25, creator: { username: 'BotMaster', avatar: 'https://i.pravatar.cc/150?u=5' }, type: 'AI' as const, likes: 89 },
];

export default function AIArtPage() {
    return (
        <div className="min-h-screen pt-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-4xl font-bold mb-2 gradient-text">AI Art Gallery</h1>
                        <p className="text-gray-400">Stable Diffusion & DALL-E generated masterpieces.</p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-white/10 transition">
                        <Filter size={18} /> Filter
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {MOCK_AI_ARTS.map((art) => (
                        <ArtCard
                            key={art._id}
                            id={art._id}
                            title={art.title}
                            image={art.imageUrl}
                            artist={{ name: art.creator.username, avatar: art.creator.avatar }}
                            price={art.price}
                            likes={art.likes}
                            type={art.type}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
