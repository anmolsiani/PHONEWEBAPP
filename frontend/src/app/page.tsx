"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Palette, Cpu, Gavel } from 'lucide-react';

export default function Home() {
    // Use explicit tailwind classes instead of dynamic interpolation to ensure they are included in build
    const categories = [
        { title: "Human Made", desc: "Digital & Physical Artworks", icon: "🎨", href: "/human-art", bgClass: "bg-gradient-to-br from-pink-500 to-rose-500" },
        { title: "AI Generated", desc: "Stable Diffusion Masterpieces", icon: "🤖", href: "/ai-art", bgClass: "bg-gradient-to-br from-blue-500 to-cyan-500" },
        { title: "Live Auctions", desc: "Bid on Exclusive Items", icon: "🔨", href: "/auctions", bgClass: "bg-gradient-to-br from-amber-500 to-orange-500" }
    ];

    return (
        <div className="relative overflow-hidden">

            {/* Hero Section */}
            <section className="relative px-4 py-32 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -z-10" />

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
                >
                    Discover & Collect <br />
                    <span className="gradient-text">Extraordinary Art</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-gray-400 max-w-2xl mb-10"
                >
                    The world's first hybrid marketplace merging Human Creativity with Artificial Intelligence.
                    Bid, Buy, Sell, and Collaborate.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Link href="/human-art" className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-100 transition flex items-center justify-center gap-2">
                        Explore Human Art <Palette size={20} />
                    </Link>
                    <Link href="/ai-generator" className="px-8 py-4 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition flex items-center justify-center gap-2 backdrop-blur-md">
                        Try AI Generator <Cpu size={20} />
                    </Link>
                </motion.div>
            </section>

            {/* Categories */}
            <section className="max-w-7xl mx-auto px-4 py-20">
                <h2 className="text-3xl font-bold mb-10">Browse Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map((cat, i) => (
                        <Link key={i} href={cat.href}>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className={`h-64 rounded-3xl p-8 relative overflow-hidden glass group cursor-pointer border-0`}
                            >
                                <div className={`absolute inset-0 ${cat.bgClass} opacity-10 group-hover:opacity-20 transition duration-500`} />
                                <div className="absolute top-0 right-0 p-8 text-6xl opacity-20 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition">{cat.icon}</div>
                                <div className="relative z-10 h-full flex flex-col justify-end">
                                    <h3 className="text-3xl font-bold mb-2">{cat.title}</h3>
                                    <p className="text-gray-400 group-hover:text-gray-200 transition">{cat.desc}</p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Featured Art Loop (Mock) */}
            <section className="py-20 bg-black/20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <h2 className="text-3xl font-bold">Trending Now</h2>
                            <p className="text-gray-400">Top picks from the community</p>
                        </div>
                        <Link href="/human-art" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1">View All <ArrowRight /></Link>
                    </div>
                    {/* Simple Grid for now */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((n) => (
                            <div key={n} className="aspect-square rounded-2xl bg-slate-800 animate-pulse glass" />
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
