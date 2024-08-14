/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding:'2rem',
        screens: {
          sm: "100%",  // Full width on small screens
          md: "100%",  // Full width on medium screens
          lg: "1024px", // Custom width on large screens
          xl: "1280px", // Custom width on extra-large screens
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}