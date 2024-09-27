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
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      keyframes: {
        netflixLoader: {
          "0%": { left: "-45%" },
          "100%": { left: "100%" },
        },
      },
      animation: {
        netflixLoader: "netflixLoader 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
