import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#069DDF",
    },
    secondary: {
      main: "#FF9800",
    },
  },
  typography: {
    h1: {
      fontWeight: 400,
      color: "#56707C",
      fontSize: "1.4rem",
    },
    h2: {
      fontWeight: "bold",
      color: "#56707C",
      fontSize: "1.2rem",
    },
    h3: {
      fontWeight: 400,
      color: "#56707C",
      fontSize: "1rem",
    },
    h4: {
      color: "#9AA9B0",
      fontSize: "0.8rem",
      lineHeight: "1.2rem",
    },
    subtitle1: {
      fontWeight: "bold",
      color: "#56707C",
      fontSize: "1rem",
      lineHeight: "1.2rem",
    },
    subtitle2: {
      fontWeight: "bold",
      color: "#069DDF",
      fontSize: "1.1rem",
      lineHeight: "1.2rem",
    },
  },
});

export default theme;
