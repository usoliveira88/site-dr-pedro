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
        mist: "#f4f7f5",
        linen: "#fbfaf7",
        petrol: "#164a51",
        teal: "#2f7274",
        gold: "#b99a5f"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(22, 74, 81, 0.10)",
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
