import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    // Ensure any other top-level directories using Tailwind are included if necessary
  ],
  darkMode: 'class', // Assuming theme switching is done via class (as seen in ThemeContext)
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#007bff', // Example primary blue
          DEFAULT: '#007bff',
          dark: '#3395ff',
        },
        secondary: {
          light: '#6c757d', // Example secondary gray
          DEFAULT: '#6c757d',
          dark: '#8c959d',
        },
        background: {
          light: '#ffffff',
          DEFAULT: '#ffffff',
          dark: '#121212',
        },
        text: {
          light: '#212529',
          DEFAULT: '#212529',
          dark: '#e0e0e0',
        }
      },
      fontFamily: {
        // Assuming Poppins and Work Sans are primary fonts from the fonts.css
        poppins: ['Poppins', 'sans-serif'],
        work: ['Work Sans', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
      },
      // Add any other theme extensions from the original project if known
      // e.g., backgroundImage, spacing, etc.
    },
  },
  plugins: [],
};
export default config;
