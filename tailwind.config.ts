/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamiliy: {
          Poppins: ["Poppins", "sans-serif"],
          Paprika: ["Paprika", "cursive"], 
          Inria: ["Inria Serif", "serif"],
        },
        container: {
            center: true,
            padding: "4rem",
        },
        extend: {
            screens: {
                'xl-custom': '1286px', // nuevo breakpoint
            },
            colors: {
                'light-blue': colors.lightBlue,
                cyan: colors.cyan,
                'green': '#0f766e',
                'dark': '#111827',
                'light': '#ffffff',
                'lightest': '#f3f4f6',
                'darkest': '#111827',
            }
        },
    },
    variants: {
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
    plugins: [],
}