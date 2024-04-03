/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "work-sans": ['"Work Sans"', "sans-serif"],
      },
      backgroundImage: {
        "desktop-pattern":
          "url('/assets/images/background-pattern-desktop.svg')",
      },
      textColor: {
        "custom-color": "hsl(292, 42%, 14%)",
      },
    },
  },
  plugins: [],
};
