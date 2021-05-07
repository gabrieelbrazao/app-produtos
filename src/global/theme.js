import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#FF9800",
    },
  },
  typography: {
    h6: {
      fontWeight: "bold",
      color: "#56707C",
      fontSize: "1.4rem",
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
