import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'ArtBid Hub - Create, Collect, & Collaborate',
    description: 'The ultimate platform for Human & AI Art.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={outfit.className}>
                <Navbar />
                <main className="pt-16 min-h-screen">
                    {children}
                </main>
            </body>
        </html>
    );
}
