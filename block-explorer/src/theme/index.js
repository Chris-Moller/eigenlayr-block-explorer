import PropTypes from "prop-types";
import { useMemo } from "react";
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import palette from "./palette";
import breakpoints from "./breakpoints";
import typography from "./typography";

export default function ThemeProvider({ children }) {

  const themeOptions = useMemo(
    () => ({
      palette: palette.dark,
      breakpoints,
      typography,
    }),
    []
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
