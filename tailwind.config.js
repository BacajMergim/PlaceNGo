// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        inter: ["Inter"],
      },
      colors: {
        primary: "#f4f7f9",
        secondary: "#3d2f06",
        blue: {
          default: "#4EAEFF",
          darker: "#121D23",
          dark: "#121D2399",
          light: "#121D231A",
          cyan: "#6B7280",
        },
        textColor: "#d5eec5",
        green: { default: "#008000", light: "#30efa61a", medium: "#30efa6" },
        dark: "#1B1C31",
        "dark-light": "#555555",
      },
      backgroundImage: {},
      screens: {
        sm: { max: "767px" },
        md: { max: "1023px" },
        lg: { min: "1024px", max: "1279px" },
        xlg: { min: "1280px", max: "1479px" },
        xl: { min: "1280px" },
      },
    },
  },
  plugins: [],
};
