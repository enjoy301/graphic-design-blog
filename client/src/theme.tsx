const size = {
  mobile: "480px",
  desktop: "1024px",
};

const theme = {
  mainColor: "#4748C6",
  subColor: "#1B1B1B",
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.mobile}) and (max-width: ${size.desktop})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default theme;
