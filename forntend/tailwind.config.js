/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#616161",
        "custom-nav-line-gray": "#8A8A8A",
        "custom-search-gray": "#4A4A4A",
        "Homepage-bg": "#F5F5F5",
        "custom-hero-yellow": "#FFF8DB",
        "custom-hero-text-yellow": "#5E4200",
        "custom-hero-blue": "#EAF4FF",
        "custom-button-black": "#303030",
        "global-orange": "#FFF7EE",
        "global-orange-08": "#FFC879",
        "global-orange-04": "#FFEBD5",
      },
      width: {
        21: "100px",
        31: "120px",
        84: "362px",
        99: "490px",
        101.5: "1344px",
        102: "1556px",
      },
      height: {
        21: "100px",
        31: "120px",
        82: "340px",
        84: "362px",
        99: "400px",
        100: "570px",
        101: "880px",

        102: "1556px",
      },
      margin: {
        0.3: "-32px",
        0.4: "-28px",
        0.41: "-20px",
        0.5: "2px",
        27: "95px",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
