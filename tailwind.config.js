module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      height: {
        15: "57px",
      },
      zIndex: {
        2: "2",
      },
      padding: {
        66: "66px",
      },
      screens: {
        xs: "450px",
        sm: "600px",
        md: "960px",
        lg: "1280px",
        xl: "1920px",
        "sm-max": { max: "600px" },
        "md-max": { max: "960px" },
        "lg-max": { max: "1280px" },
        "xl-max": { max: "1920px" },
      },
      spacing: {
        "2x": "calc(200%)",
        "3x": "calc(300%)",
        "4x": "calc(400%)",
        "5x": "calc(500%)",
        "6x": "calc(600%)",
        "7x": "calc(700%)",
      },
      backgroundImage: {
        // logo: "url('/src/assets/logo/logo_360.png')",
      },
      colors: {
        primary: "#dbfff1",
        secondary: "#228df3",
        title: "#8E92B8",
        success: "#00AA06",
        warning: "#F1B800",
        error: "#FF0000",
        pinkB: "#061934",
        white: "#ffffff",
      },
      fontSize: {
        tit: "42px",
        baseft: "16px",
      },
    },
  },
  plugins: [],
};
