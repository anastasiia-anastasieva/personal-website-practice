/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo-gradient': 'linear-gradient(90deg, #FA6E00 0%, #E60026 100%)',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'primary-gradient': 'linear-gradient(94.36deg, #FD6F00 3.1%, #E46400 94.54%)',
      },
    },
    colors: {
      ...colors,
      primary: '#FD6F00',
      secondary: '#E46400',
    },
    fontFamily: {
      'lato': ["Lato", "sans-serif"],
    },
  },
  variants: {},
  plugins: [],
};
