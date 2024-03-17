// src/theme.ts
"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#183548",
    },
    secondary: {
      main: "#6c757d",
    },
  },
});

export default theme;
