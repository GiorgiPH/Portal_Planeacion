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
    },
},
plugins: [],
}