/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:'#000000',
        secondary:'#0868F3'
      },
      backgroundImage:{
        home: "url('./assets/images/home.webp')",
        Crypto: "url('./assets/images/crypto_bg.avif')",
        seller_bg: "url('./assets/images/seller-bg.jpg')",
        key_bg: "url('./assets/images/key_bg.avif')",
        software_bg: "url('./assets/images/software_bg.avif')",
      }
    },
  },
  plugins: [],
}

