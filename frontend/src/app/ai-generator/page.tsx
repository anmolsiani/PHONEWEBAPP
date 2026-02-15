"use client";
import React, { useState } from 'react';
import { Wand2, Download, Save } from 'lucide-react';

export default function AIGeneratorPage() {
    const [prompt, setPrompt] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [result, setResult] = useState<string | null>(null);

    const handleGenerate = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsGenerating(true);
        // Mock generation for 2 seconds
        setTimeout(() => {
            setResult("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"); // Abstract AI-like image
            setIsGenerating(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen px-4 py-10 flex flex-col items-center">
            <div className="w-full max-w-4xl text-center mb-10">
                <h1 className="text-5xl font-bold mb-4 gradient-text">AI Art Studio</h1>
                <p className="text-gray-400">Turn your imagination into reality with Stable Diffusion.</p>
            </div>

            <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8">
                {/* Controls */}
                <div className="glass p-8 rounded-3xl">
                    <form onSubmit={handleGenerate} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-300 mb-2">Prompt</label>
                            <textarea
                                className="w-full h-32 bg-black/30 border border-gray-700 rounded-xl p-4 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition resize-none"
                                placeholder="A futuristic city with flying cars, neon lights, cyberpunk style..."
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                            />
                        </div>

                        <button
                            disabled={isGenerating || !prompt}
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-600 font-bold text-white hover:shadow-lg hover:shadow-indigo-500/25 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isGenerating ? <div className="animate-spin text-xl">💫</div> : <Wand2 />}
                            {isGenerating ? 'Dreaming...' : 'Generate Artwork'}
                        </button>
                    </form>

                    <div className="mt-8">
                        <h3 className="text-sm font-bold text-gray-400 mb-4">Style Presets</h3>
                        <div className="grid grid-cols-3 gap-2">
                            {['Cyberpunk', 'Realistic', 'Anime', 'Oil Painting', '3D Render', 'Sketch'].map(style => (
                                <button key={style} onClick={() => setPrompt(prev => prev + `, ${style}`)} className="px-2 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium border border-white/10 transition">
                                    {style}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Preview */}
                <div className="glass rounded-3xl p-2 min-h-[400px] flex items-center justify-center relative overflow-hidden group">
                    {result ? (
                        <>
                            <img src={result} alt="Generated AI" className="w-full h-full object-cover rounded-2xl" />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4 backdrop-blur-sm">
                                <button className="p-3 rounded-full bg-white text-black hover:scale-110 transition"><Download /></button>
                                <button className="p-3 rounded-full bg-indigo-600 text-white hover:scale-110 transition"><Save /></button>
                            </div>
                        </>
                    ) : (
                        <div className="text-center text-gray-500/50">
                            <div className="text-6xl mb-4">🎨</div>
                            <p>Your masterpiece will appear here</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
