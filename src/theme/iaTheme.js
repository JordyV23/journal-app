import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const iaTheme = createTheme({
  palette: {
    "primary-100": { main: "#2563eb" }, //Azul
    "primary-200": { main: "#598EF3" }, //Celeste
    "primary-300": { main: "#D3E6FE" }, //Celeste claro
    "accent-100": { main: "#d946ef" }, //Lavanda o rosa
    "accent-200": { main: "#fae8ff" }, //Blanco
    "text-100": { main: "#cbd5e1" }, // Ice Blue
    "text-200": { main: "#94a3b8" }, //Gris azulado
    "bg-100": { main: "#1e293b" }, //Azul Oscuro
    "bg-200": { main: "#334155" }, //Gris
    "bg-300": { main: "#475569" }, //Gris claro 
    error: {
      main: red.A400,
    },
  },
});
