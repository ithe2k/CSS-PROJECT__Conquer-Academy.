import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "./",

  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),

        avisoLegal: path.resolve(__dirname, "aviso-legal.html"),
        blog: path.resolve(__dirname, "blog.html"),
        contacto: path.resolve(__dirname, "contacto.html"),

        cursoFullStack: path.resolve(__dirname, "curso_full_stack.html"),
        cursoMobileDev: path.resolve(__dirname, "curso_mobile_dev.html"),
        cursosIndex: path.resolve(__dirname, "cursos.html"),

        login: path.resolve(__dirname, "login.html"),
        noticiaGyxg4: path.resolve(__dirname, "noticia_gyxg4.html"),
        noticiaTesla: path.resolve(__dirname, "noticia_tesla_f1.html"),
        registro: path.resolve(__dirname, "registro.html"),

        quienesSomos: path.resolve(__dirname, "quienes_somos.html"),
      },
    },
  },
});
