"use client";
import React, { useEffect, useState } from 'react';
import ArtCard from '../../../components/ArtCard';
import { Filter } from 'lucide-react';

// Mock Data
const MOCK_ARTS = [
    { _id: '1', title: 'Cyberpunk City', imageUrl: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=800&q=80', price: 150, creator: { username: 'NeonArtist', avatar: 'https://i.pravatar.cc/150?u=1' }, type: 'Human' as const, likes: 24 },
    { _id: '2', title: 'Abstract Dreams', imageUrl: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&q=80', price: 300, creator: { username: 'Dreamer', avatar: 'https://i.pravatar.cc/150?u=2' }, type: 'Human' as const, likes: 12 },
    { _id: '3', title: 'Oil Portrait', imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80', price: 500, creator: { username: 'ClassicPainter', avatar: 'https://i.pravatar.cc/150?u=3' }, type: 'Human' as const, likes: 45 },
];

export default function HumanArtPage() {
    const [arts, setArts] = useState<any[]>([]);

    useEffect(() => {
        // In production: fetch(`${process.env.NEXT_PUBLIC_API_URL}/arts?type=Human`)
        setArts(MOCK_ARTS);
    }, []);

    return (
        <div className="min-h-screen pt-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-4xl font-bold mb-2">Human Art Gallery</h1>
                        <p className="text-gray-400">Curated collection of physical and digital artworks.</p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-white/10 transition">
                        <Filter size={18} /> Filter
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {arts.map((art) => (
                        <ArtCard
                            key={art._id}
                            id={art._id}
                            title={art.title}
                            image={art.imageUrl}
                            artist={{ name: art.creator.username, avatar: art.creator.avatar }}
                            price={art.price}
                            likes={art.likes || 0}
                            type={art.type}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
