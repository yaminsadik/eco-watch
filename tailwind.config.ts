import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        homefrontbg: "url('/src/assets/front.jpg')",
      },
      colors: {
        "button-primary": "#A5B9A7",
        "button-primary-hover": "#B9CAB8",
      },
    },
  },
  plugins: [],
};

export default config;
