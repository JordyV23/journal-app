import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { purpleTheme,iaTheme } from "./";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={iaTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
