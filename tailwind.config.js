export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#3E97FF",
        secondary: "#D8D8E5",
        accent: "#2884EF",
        black: "#000",
        "black-light": "#181C32",
        white: "#F9F9F9",
        "white-10": "#FFFFFF1A",
        blue: "#3E97FF",
        "blue-light": "#EEF6FF",
        "blue-20": "#3E97FF33",
        gray: "#A1A5B7",
        "gray-200": "#F1F1F2",
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
