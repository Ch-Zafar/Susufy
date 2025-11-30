import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  theme:{
    extends:{
      colors:{
        background:{
          DEFAULT:"#0c313c",
        },
        primary:{
          DEFAULT:"#122531"
        },
        button:{
          DEFAULT:"#fed993"
        },
        button2:{
          DEFAULT:"#e3b870"
        }
      }
    }
  },

  plugins: [react(), tailwindcss(),
  ],
})
