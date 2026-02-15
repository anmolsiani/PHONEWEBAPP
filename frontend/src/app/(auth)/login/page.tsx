"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate login for MVP
        console.log("Logging in...", email, password);
        // In real app: call /api/auth/login
        router.push('/');
    };

    return (
        <div className="min-h-screen py-20 px-4 flex items-center justify-center">
            <div className="glass w-full max-w-md p-8 rounded-3xl border border-white/10">
                <h2 className="text-3xl font-bold mb-2 text-center">Welcome Back</h2>
                <p className="text-gray-400 text-center mb-8">Login to manage your portfolio</p>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm text-gray-300 mb-1">Email Address</label>
                        <input
                            type="email"
                            className="w-full bg-black/40 border border-gray-700 rounded-xl px-4 py-3 focus:border-indigo-500 focus:outline-none transition"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-300 mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full bg-black/40 border border-gray-700 rounded-xl px-4 py-3 focus:border-indigo-500 focus:outline-none transition"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 font-bold transition shadow-lg shadow-indigo-600/20"
                    >
                        Log In
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-400">
                    Don't have an account? <Link href="/register" className="text-indigo-400 hover:text-white">Sign up</Link>
                </div>
            </div>
        </div>
    );
}
