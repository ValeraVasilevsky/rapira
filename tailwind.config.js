export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "#000",
        "black-light": "#181C32",
        white: "#F9F9F9",
        "white-10": "#FFFFFF1A",
        blue: "#3E97FF",
        secondary: "#D8D8E5",
        primary: "#3E97FF",
      },

      fontSize: {
        xs: ["13px", "14px"],
        s: ["16px", "16px"],
        m: ["24px", "24px"],
      },

      boxShadow: {
        custom: "0px 0px 0px 2px #3E97FF52",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: ["./src/**/*.{ts,tsx,vue}"],
};
