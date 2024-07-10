/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
}

