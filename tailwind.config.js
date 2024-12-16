/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      manreg: ["'Inter', sans-serif"],
      manmed: ["'Inter', sans-serif"],
      manbold: ["'Inter', sans-serif"],
      mansemibold: ["'Inter', sans-serif"],
      inter:["'Inter', sans-serif"]
    },
    colors: {
      prime: "#005dff",
    },
    extend: {},
  },
  plugins: [],
};
