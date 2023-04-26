/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["forest", "emerald"],
  },
  theme: {
    extend: {
      screens: {
        '-md': {'max': '767px'},
        'xsm': {'min': '360px'}
      }
    },
  },
  plugins: [require("daisyui")],  
}
