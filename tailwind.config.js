/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html", 
      "./src/**/*.{js,ts,jsx,tsx}",
      'node_modules/flowbite-react/lib/esm/**/*.js'
    ],
    theme: {
        extend: {
          fontFamily: {
            poppins: ["Poppins", "sans-serif"]
          }
        },
        colors: {
        primary: '#4F98CA',
        secondary: '#60db90',
        dark: '#191e1f',
        paperWhite: '#F5F5F5',
      },
    },
    plugins: [require("flowbite/plugin")]
};
