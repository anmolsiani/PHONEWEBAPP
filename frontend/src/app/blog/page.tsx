"use client";
import React from 'react';

const MOCK_BLOGS = [
    { id: 1, title: 'The Future of AI Art', category: 'AI Trends', date: 'Oct 24, 2024', snippet: 'How generative models are reshaping the creative landscape forever.' },
    { id: 2, title: 'Next.js 15: What is new?', category: 'Development', date: 'Oct 22, 2024', snippet: 'Exploring the latest features in the React framework ecosystem.' },
];

export default function BlogPage() {
    return (
        <div className="min-h-screen pt-10 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4 gradient-text">Developer Blog</h1>
                    <p className="text-gray-400">Insights, tutorials, and community stories.</p>
                </div>

                <div className="space-y-8">
                    {MOCK_BLOGS.map(blog => (
                        <div key={blog.id} className="glass p-8 rounded-3xl hover:border-indigo-500/50 transition cursor-pointer group">
                            <div className="flex items-center gap-4 mb-4 text-xs font-bold uppercase tracking-wider">
                                <span className="text-indigo-400">{blog.category}</span>
                                <span className="text-gray-600">•</span>
                                <span className="text-gray-500">{blog.date}</span>
                            </div>
                            <h2 className="text-3xl font-bold mb-4 group-hover:text-indigo-400 transition">{blog.title}</h2>
                            <p className="text-gray-400 text-lg">{blog.snippet}</p>
                            <div className="mt-8 flex items-center text-sm font-bold text-indigo-400 group-hover:underline">
                                Read Article &rarr;
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
