import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
      include: '**/*.svg?react',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-progress', '@radix-ui/react-select', '@radix-ui/react-slot', '@radix-ui/react-tabs'],
          'chart-vendor': ['apexcharts', 'react-apexcharts'],
          'map-vendor': ['@react-jvectormap/core', '@react-jvectormap/world', 'react-simple-maps'],
          'calendar-vendor': ['@fullcalendar/core', '@fullcalendar/daygrid', '@fullcalendar/interaction', '@fullcalendar/list', '@fullcalendar/react', '@fullcalendar/timegrid'],
          'utils-vendor': ['axios', 'date-fns', 'classnames', 'clsx', 'tailwind-merge'],
          'form-vendor': ['react-dropzone', 'react-flatpickr', 'flatpickr'],
          'dnd-vendor': ['react-dnd', 'react-dnd-html5-backend'],
          'swiper-vendor': ['swiper'],
          'helmet-vendor': ['react-helmet', 'react-helmet-async'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  publicDir: 'public',
  define: {
    global: 'globalThis',
  },
  optimizeDeps: {
    exclude: ['@react-jvectormap/core', '@react-jvectormap/world'],
  },
}) 