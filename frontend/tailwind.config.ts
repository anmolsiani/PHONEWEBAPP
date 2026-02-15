import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                accent: {
                    DEFAULT: "#ec4899", // Pink 500
                    hover: "#db2777",
                },
                primary: {
                    DEFAULT: "#6366f1", // Indigo 500
                    hover: "#4f46e5",
                }
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "picsart-gradient": "linear-gradient(to right, #ec4899, #8b5cf6, #3b82f6)",
            },
        },
    },
    plugins: [],
};
export default config;
