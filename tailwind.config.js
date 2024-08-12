/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
      },
      colors: {
        primary: {
          Orange: "hsl(25, 97%, 53%)",
        },
        neutral: {
          White: "hsl(0, 0%, 100%)",
          LightGrey: "hsl(217, 12%, 63%)",
          DarkBlue: "hsl(213, 19%, 18%)",
          VeryDarkBlue: "hsl(216, 12%, 8%)",
        },
      },
      fontFamily: {
        'young-serif': ['Young Serif', 'sans-serif'], // Match with the font-family in @font-face
        'outfit': ['Outfit', 'sans-serif'], // Match with the font-family in @font-face
      },
      screens: {
        'xs': '375px',
        'xxl': '1440px',
      }
    },
  },
  plugins: [],
}
