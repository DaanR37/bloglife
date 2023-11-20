/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        backGround: "#FAFAFA",
        light: "#FFFFFF",
        customBtn: "#F27623",
        customLine: "#E95E30",
        nextPage: "#F27623",
        blogHeading: "#262626",
        blogText: "#868686",
        headerText: "#2B2B2B",
        labelText: "#404040",
        inputText: "#C5C5C5",
      },
      dropShadow: {
        'l': '0 0 0 5vw rgba(0, 0, 0, 0.25)',
        'xl': '1px 1px 1px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '8px -5px 15px rgba(51, 51, 51, 0.75)',
        ]
      },
    },
    screens: {
      "9xl": { max: "5120px" },
      // => @media (max-width: 1921px) { ... }
      "8xl": { max: "4096px" },
      // => @media (max-width: 1921px) { ... }
      "7xl": { max: "3072px" },
      // => @media (max-width: 1921px) { ... }
      "6xl": { max: "2880px" },
      // => @media (max-width: 1921px) { ... }
      "5xl": { max: "2560px" },
      // => @media (max-width: 1921px) { ... }
      "4xl": { max: "2304px" },
      // => @media (max-width: 1921px) { ... }
      "3xl": { max: "1921px" },
      // => @media (max-width: 1921px) { ... }
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
    gridTemplateColumns: {
      '12-71px': 'repeat(12, 71px)',
      '2-1fr': 'repeat(2, 1fr)',
    },
  },
  plugins: [],
}
