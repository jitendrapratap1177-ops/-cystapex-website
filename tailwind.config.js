/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#7c3bed",
        "base-dark": "#05080F",
        "footer-bg": "#030609",
        "card-dark": "#0A1628",
        "alt-dark": "#061A1A",
        "sea-green": "#0D7377",
        "golden": "#E8C84A",
        "sea-blue": "#1E90D4",
      },
      fontFamily: {
        "display": ["Plus Jakarta Sans", "sans-serif"],
        "sans": ["Plus Jakarta Sans", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.75rem",
        "xl": "1rem",
        "full": "9999px"
      },
      maxWidth: {
        '8xl': '1400px',
        'editorial': '720px',
      }
    },
  },
  plugins: [],
}
