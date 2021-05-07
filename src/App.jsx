import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Completion from "./pages/completion";
import "./global/styles/index.css";
import theme from "./global/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Completion />
    </ThemeProvider>
  );
}
