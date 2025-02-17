import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'navy': {
          800: '#1a1f2c',
          900: '#0f172a',
          950: '#0a0f1c',
        },
        'electric-blue': {
          400: '#4dabf7',
          500: '#228be6',
          600: '#1971c2',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
