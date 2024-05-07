import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "rgba(92, 102, 240, 1)",
        sidebar: "rgba(38, 35, 35, 0.6)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  fontSize: {
    xs: ["10px", "12px"],
    sm: ["11px", "15px"],
    base: ["14px", "16px"],
    lg: ["16px", "18px"],
    xl: ["18px", "20px"],
    "2xl": ["20px", "22px"],
    "3xl": ["22px", "24px"],
  },
  plugins: [],
};
export default config;
