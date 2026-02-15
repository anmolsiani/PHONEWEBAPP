"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Globe } from 'lucide-react';

export default function About() {
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="max-w-4xl w-full space-y-12 text-center">

                {/* Header */}
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-tr from-pink-500 to-indigo-500 p-1">
                        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-5xl font-bold text-white">IK</div>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold gradient-text">Ish Kumar</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Developing autonomous digital systems and hyper-fluid interfaces. Bridging the gap between mathematical logic and creative intuition.
                    </p>

                    <div className="flex justify-center gap-6">
                        <a href="https://github.com/anmolsiani" target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-white/20 transition hover:scale-110"><Github /></a>
                        <a href="https://www.linkedin.com/in/ish-kumar-475aaa337/" target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-blue-600 transition hover:scale-110"><Linkedin /></a>
                        <a href="https://x.com/Ish_kumar_" target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-sky-500 transition hover:scale-110"><Twitter /></a>
                        <a href="https://www.instagram.com/kiinda.ishh/" target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-pink-600 transition hover:scale-110"><Instagram /></a>
                        <a href="https://ishdev.online" target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-emerald-500 transition hover:scale-110"><Globe /></a>
                    </div>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: "HTML5", val: "93%" },
                        { label: "CSS3", val: "70%" },
                        { label: "JavaScript", val: "85%" },
                        { label: "WordPress", val: "95%" }
                    ].map((stat, idx) => (
                        <div key={idx} className="glass p-6 rounded-2xl">
                            <div className="text-3xl font-bold text-indigo-400">{stat.val}</div>
                            <div className="text-sm text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Experience */}
                <div className="text-left space-y-8 glass p-8 rounded-3xl">
                    <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-4">Experience</h2>
                    <div>
                        <h3 className="text-xl font-bold text-white">Web Designing Intern</h3>
                        <p className="text-gray-400 mt-2">Built and customized responsive websites using modern frontend tools and WordPress. Managed layout design, UI improvements, and performance fixes.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">Social Media Handler</h3>
                        <p className="text-gray-400 mt-2">Managed content posting, branding consistency, and audience engagement.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
