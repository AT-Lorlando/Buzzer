// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"], // Utilisation de Tailwind CSS pour le style
  css: ["@/assets/css/tailwind.css"], // Ajout du fichier CSS de Tailwind
});
