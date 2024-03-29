import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,stories.js,css}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "var(--border)"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      screens: {
        xs: "400px",
        xsm: "450px"
      },
      transitionDuration: {
        medium: "300ms",
        long: "500ms"
      }
    }
  },
  plugins: [animate]
};
