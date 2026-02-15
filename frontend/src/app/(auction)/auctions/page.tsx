"use client";
import React from 'react';
import { Timer, Gavel } from 'lucide-react';

const MOCK_AUCTIONS = [
    { id: '1', title: 'Golden Cyber Skull', currentBid: 450, endTime: '2h 15m', image: 'https://images.unsplash.com/photo-1633104596395-580a65345719?w=800&q=80', artist: 'CryptoKing' },
    { id: '2', title: 'Ethereal Landscape', currentBid: 1200, endTime: '4h 30m', image: 'https://images.unsplash.com/photo-1614332287897-cdc485faed1d?w=800&q=80', artist: 'DreamWeaver' },
];

export default function AuctionsPage() {
    return (
        <div className="min-h-screen pt-10 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
                    <span className="p-3 bg-amber-500/20 rounded-full text-amber-500"><Gavel /></span>
                    Live Auctions
                </h1>

                <div className="grid md:grid-cols-2 gap-8">
                    {MOCK_AUCTIONS.map(auc => (
                        <div key={auc.id} className="glass rounded-3xl overflow-hidden flex flex-col md:flex-row group">
                            <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                                <img src={auc.image} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6 flex flex-col justify-center w-full md:w-1/2">
                                <h3 className="text-2xl font-bold mb-2">{auc.title}</h3>
                                <p className="text-gray-400 mb-4">by {auc.artist}</p>

                                <div className="flex items-center justify-between mb-6 p-4 bg-black/30 rounded-xl">
                                    <div>
                                        <div className="text-xs text-gray-400 uppercase">Current Bid</div>
                                        <div className="text-2xl font-bold text-green-400">${auc.currentBid}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs text-gray-400 uppercase flex items-center justify-end gap-1"><Timer size={12} /> Ends In</div>
                                        <div className="text-xl font-bold text-amber-500">{auc.endTime}</div>
                                    </div>
                                </div>

                                <button className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition">
                                    Place Bid
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
