import { defineConfig } from "vite";

export default defineConfig({
    base: "./", //para el uso de enlaces relativos en enlaces generados en el html
    server: {
    // Esto es lo que le dice a Vite que abra el navegador al arrancar
    open: true, 
  }
})

