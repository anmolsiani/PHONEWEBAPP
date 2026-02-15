"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, Sparkles } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 glass-nav">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-indigo-500 flex items-center justify-center">
                                <Sparkles className="text-white w-5 h-5" />
                            </div>
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-500">
                                ArtBid Hub
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/human-art" className="text-gray-300 hover:text-white font-medium transition">Human Art</Link>
                        <Link href="/ai-art" className="text-gray-300 hover:text-white font-medium transition">AI Art</Link>
                        <Link href="/auctions" className="text-gray-300 hover:text-white font-medium transition">Auctions</Link>
                        <Link href="/blog" className="text-gray-300 hover:text-white font-medium transition">Blog</Link>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <Link href="/login" className="px-5 py-2 rounded-full border border-gray-600 text-sm font-medium hover:border-white transition">
                            Log In
                        </Link>
                        <Link href="/register" className="px-5 py-2 rounded-full bg-indigo-600 text-sm font-medium hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/20">
                            Sign Up
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden glass border-t border-gray-800">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <Link href="/human-art" className="block px-3 py-2 rounded-md hover:bg-white/10">Human Art</Link>
                        <Link href="/ai-art" className="block px-3 py-2 rounded-md hover:bg-white/10">AI Art</Link>
                        <Link href="/auctions" className="block px-3 py-2 rounded-md hover:bg-white/10">Auctions</Link>
                        <Link href="/blog" className="block px-3 py-2 rounded-md hover:bg-white/10">Blog</Link>
                        <div className="pt-4 flex flex-col gap-2">
                            <Link href="/login" className="w-full text-center px-4 py-2 rounded-full border border-gray-600">Log In</Link>
                            <Link href="/register" className="w-full text-center px-4 py-2 rounded-full bg-indigo-600">Sign Up</Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
