import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#11181B",
        graphite: "#283439",
        mist: "#EEF3F1",
        linen: "#FAFAF7",
        petrol: "#02253D",
        deep: "#02253D",
        teal: "#02253D",
        sage: "#A8BFA3",
        sand: "#F1E8D8",
        bluegray: "#E6ECEC",
        pearl: "#F6F8F7",
        gold: "#B9935A"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(2, 37, 61, 0.10)",
        lift: "0 22px 48px rgba(2, 37, 61, 0.15)",
        glow: "0 24px 80px rgba(185, 147, 90, 0.18)"
      },
      borderRadius: {
        subtle: "8px"
      }
    }
  },
  plugins: []
};

export default config;
