module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        epcot: "#94779b",
        "magic-kingdom": "#d6644f",
        "hollywood-studios": "#419683",
        "animal-kingdom": "#788133"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
