/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      raleWayFont: ['"Raleway", serif'],
      robotoFont: ['"Roboto", sans-serif'],
    },
    extend: {
      colors: {
        "regal-blue": "#243c5a",
      },
    },
  },
  plugins: [],
};
