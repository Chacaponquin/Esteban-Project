/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EE5A24",
      },
      fontFamily: {
        fontBold: "Montserrat Bold",
        fontRegular: "Montserrat Regular",
        fontBlack: "Montserrat Black",
        fontLight: "Montserrat Light",
        fontItalicBold: "Montserrat Italic Bold",
        fontItalicBlack: "Montserrat Italic Black",
      },
    },
  },
  plugins: [],
};
