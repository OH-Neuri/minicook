const size = {
  mobile: "640px",
  tablet: "1007px",
  desktop: "1920px",
};

const theme = {
  colors: {
    mainColor: "#fff7ed",
    color1: "#F4F1EB",
    color2: "#ffe5d9",
    color3: "#ffcad4",
    color4: "#f4acb7",
    color5: "#9d8189",
    color6: "#c79761",
  },
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default theme;
