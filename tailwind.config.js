/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgNavbar: "#212c627a",
        bgListNavbarfrist: "#B10AAB",
        bgListNavbarSecond: "#162967",
      },
    },
  },
  plugins: [],
};
