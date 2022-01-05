module.exports = {
  mode:'jit',
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        backdrop:'#121212',
        primary:'#1db954',
        active:'#282828',
        link:'#b3b3b3',
        footer:'#181818'
      },
      boxShadow:{
        spotify:'0 2px 4px 0 rgb(0.0.0.1)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}