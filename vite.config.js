import { defineConfig } from 'vite'
import { AppBar } from "./node_modules/@mui/material";
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
