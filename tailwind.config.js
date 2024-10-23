/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'ibmPlexMono':"IBM Plex Mono"
    },
  },
  plugins: [],
}