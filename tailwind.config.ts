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
        ink: "#1f2a2d",
        graphite: "#3f4a4d",
        mist: "#DDE8E2",
        linen: "#F7F3EA",
        petrol: "#124E59",
        teal: "#0F4C5C",
        sage: "#A8BFA3",
        sand: "#E9DDC7",
        bluegray: "#E6ECEC",
        clay: "#D6C3A5",
        gold: "#B9935A"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(15, 76, 92, 0.11)",
        lift: "0 18px 40px rgba(31, 42, 45, 0.12)"
      },
      borderRadius: {
        subtle: "8px"
      }
    }
  },
  plugins: []
};

export default config;
