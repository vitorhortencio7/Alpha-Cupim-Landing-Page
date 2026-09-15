import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        tailwindcss(),
        react(),
        {
          name: 'html-transform',
          transformIndexHtml(html) {
            return html
              .replace(/%VITE_GOOGLE_ADS_ID%/g, env.VITE_GOOGLE_ADS_ID || '');
          },
        },
      ],
      // REMOVIDO: Nenhuma chave secreta ou de API (ex: GEMINI_API_KEY) é injetada no bundle do client
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
