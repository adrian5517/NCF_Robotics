import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss()],
  extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        mrsSheppards: ['Mrs Sheppards', 'cursive'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
    },
})
