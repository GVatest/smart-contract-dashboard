import { createTheme, Palette } from "@mui/material";
import background from "static/brand/background.svg";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#20262D",
      light: "rgba(255, 255, 255, 0.07)",
      dark: "#101418",
      contrastText: "#efc947",
    },
    secondary: {
      main: "#877e4b",
    },
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.8)",
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minWidth: "100vw",
          minHeight: "100vh",
          backgroundColor: "#000",
          backgroundImage: `url("${background}")`,
          backgroundRepeat: "no-repeat, repeat",
          backgroundSize: "cover",
        },
      },
    },
  },
});

const {
  breakpoints,
  typography: { pxToRem },
} = defaultTheme;

let theme = createTheme({
  ...defaultTheme,
  typography: (palette: Palette) => ({
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: pxToRem(22),
      color: palette.primary.contrastText,
    },
    h2: {
      fontWeight: 700,
      fontSize: pxToRem(20),
      color: palette.text.secondary,
    },
    h3: {
      fontWeight: 600,
      fontSize: "1rem",
      [breakpoints.down("md")]: {
        fontSize: "0.9rem",
      },
      color: palette.text.primary,
    },
    h4: {
      fontWeight: 500,
      fontSize: "1rem",
      [breakpoints.down("md")]: {
        fontSize: "0.9rem",
      },
      color: palette.text.secondary,
    },
    button: {
      fontSize: pxToRem(18),
      [breakpoints.down("md")]: {
        fontSize: "1rem",
      },
    },
  }),
});

export default theme;
