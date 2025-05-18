/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.indigo[900], // #312e81 (más cercano a #2A2F4F)
          light: colors.indigo[700],   // #4338ca
          dark: colors.indigo[950],    // #1e1b4b
        },
        secondary: {
          DEFAULT: colors.sky[700],    // #0369a1 (más cercano a #6096B4)
          light: colors.sky[400],      // #38bdf8
          dark: colors.sky[900],       // #0c4a6e
        },
        accent: {
          DEFAULT: colors.teal[400],   // #2dd4bf (más cercano a #00C9A7)
          light: colors.teal[300],     // #5eead4
          dark: colors.teal[600],      // #0d9488
        },
        background: {
          light: colors.gray[100],         // #f3f4f6 (más cercano a #F5F5F5)
          dark: colors.gray[900],         // #111827 (más cercano a #333333)
        },
        foreground: {
          light: colors.gray[300],         // #374151 (más cercano a #444444)
          dark: colors.gray[700],         // #f3f4f6 (más cercano a #F5F5F5)
        },
        dark: {
          primary: colors.indigo[300],   // #a5b4fc
          secondary: colors.sky[300],    // #7dd3fc
          accent: colors.teal[300],      // #5eead4
          background: colors.gray[800],    // #1f2937
          background: colors.gray[100],    // #f3f4f6
        },
      },
      fontFamily: {
        poppins: ["'Poppins'", "ui-sans-serif", "system-ui"],
        open: ["'Open Sans'", "sans-serif"],
        work: ["'Work Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
}

