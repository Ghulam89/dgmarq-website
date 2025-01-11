/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:'#000000',
        secondary:'#0868F3',
        blue:'#2F82FB',
      },
      backgroundImage:{
        home: "url('./assets/images/home.jpeg')",
        Crypto: "url('./assets/images/crypto_bg.avif')",
        seller_bg: "url('./assets/images/seller-bg.jpg')",
        key_bg: "url('./assets/images/key_bg.avif')",
        software_bg: "url('./assets/images/software_bg.avif')",
        gift_bg: "url('https://images.g2a.com/uiadminimages/1920x958/1x1x1/7b9beccebb1f/8965c8477e00461f81967638')",
        random_keys: "url('https://images.g2a.com/uiadminimages/1920x720/1x1x1/5958f49c30ef/5e910817f32449c2b21a897b')",
        random_bg: "url('https://images.g2a.com/uiadminimages/1170x450/1x1x1/6cd3dd3a8614/9f9db6b2cda3441b8dc8283f')",
        random_bg1: "url('https://images.g2a.com/uiadminimages/1920x710/1x1x1/27d9e9ec050d/c5413b2cb77a4f16ba2f07ea')",
        random_bg2: "url('https://images.g2a.com/uiadminimages/1920x710/1x1x1/29fbcc9858b6/108b41364b484bb0be79369c')",
        random_bg3: "url('https://images.g2a.com/uiadminimages/1920x671/1x1x1/8588d0d8aa07/6c00127e518447d38f2d0845')",
        random_bg4: "url('https://images.g2a.com/uiadminimages/1920x710/1x1x1/cf9dc6512aaa/59a4b129a13a4776baa3870c')",
        software_bg: "url('https://images.g2a.com/uiadminimages/1920x638/1x1x1/424e1260491d/32d41c40ecea484b879bebc6')",
        software_bg1: "url('https://images.g2a.com/uiadminimages/1920x638/1x1x1/424e1260491d/32d41c40ecea484b879bebc6')",
        software_bg2: "url('https://images.g2a.com/uiadminimages/1981x657/1x1x1/16fd854db26b/c68acabdc465457cbf4108d1')",
        discount_bg: "url('./assets/images/discount.avif')",
        Digital: "url('https://images.g2a.com/uiadminimages/1536x266/1x1x1/e5459be94434/a1d955214bc74df1a368645d')",
        Careers_bg: "url('./assets/images/careers/caeers_bg.png')",
        Reliability_bg: "url('./assets/images/reliability/bg.webp')",
        Program_bg: "url('./assets/images/program/program_bg.webp')",
        Flash_bg: "url('./assets/images/flash.webp')",
        deal_bg: "url('https://images.g2a.com/uiadminimages/1920x475/1x1x1/cc084de359bd/3050d51e89ed4abba25301d4')",
        game_bg: "url('https://images.g2a.com/uiadminimages/1920x475/1x1x1/b11bfaa0e370/fd33af599e384df9a7faf2c5')",
        support_bg: "url('./assets/images/support.jpg')",
        activate_bg: "url('./assets/images/activate_product_background.jpg')",
      }
    },
  },
  plugins: [],
}

