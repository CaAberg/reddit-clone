import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-opensans)'],
      }, 
      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundneutral: "var(--background-neutral)",
      },
    },
  },
  plugins: [],
} satisfies Config;
