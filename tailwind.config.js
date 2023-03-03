/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#2AB3B1",
        emerald: "#C0DF33",
        lightGreen: "#4BBFBC",
        gray: "#E6EFF5",
        darkGray: "#9AA7BE",
      },
      boxShadow: {
        button: "0 10px 10px rgba(0, 0, 0, 0.0973011)",
      },
    },
  },
  plugins: [],
}
