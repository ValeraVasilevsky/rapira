export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#F9F9F9",
        "white-10": "#FFFFFF1A",
        blue: "#3E97FF",
      },

      fontSize: {
        s: ["16px", "16px"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: ["./src/**/*.{ts,tsx,vue}"],
};
