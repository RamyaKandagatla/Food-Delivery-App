/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shimmer: "#e0e0e0",
      },
      minHeight: {
        '120': '30rem',
        '144': '32rem',
      },
    },
    fontFamily: {
      signature: ["Great Vibes"]
    }
  },
  plugins: [],
}

