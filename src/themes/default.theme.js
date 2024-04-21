import { createTheme } from "@mui/material";
import { amber } from "@mui/material/colors";

// default theme for auto complete box
export default createTheme({
    palette: {
        primary: {
            main: amber[500], // Amber color for primary buttons and highlights
        },
        secondary: {
            main: '#f44336', // Red color for secondary buttons and highlights
        },
    },
});