/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Tu 'content' puede variar y está bien
],
theme: {
    extend: {
      fontFamily: {
        quetzalli: ['Twogether Sans', 'sans-serif'],
      },
      screens: {
        'laptop': '1366px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '4rem',
        },
        screens: {
          '2xl': '1400px',
        },
      },
    },
},
plugins: [],
}