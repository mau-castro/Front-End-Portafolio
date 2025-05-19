import "./Styles/index.css";
import { ThemeProvider, createTheme } from "@mui/material";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Estructura from "./Paginas/Estructura/Estructura";
import Index from "./Paginas/Index/Index";


const theme = createTheme({
    palette: {
      primary: {
        light: "#CE0F69",
        main: "#CE0F69",
        dark: "#3d0f31",
      },
      secondary: {
        light: "#CE0F69",
        main: "#FFFFFF",
        dark: "#F2f2f2",
      },
      success: {
        light: "#8dd8cf",
        main: "#3fb6aa",
        dark: "#1c8c7e",
      },
      warning: {
        light: "#8fa1ea",
        main: "#6272d3",
        dark: "#364ba3",
      },
      error: {
        light: "#dd5089",
        main: "#bc2860",
        dark: "#8c1344",
      },
    },
    typography: {
      button: {
        textTransform: "none",
      },
    },
  });

function App() {
  
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <BrowserRouter>
            <Routes>
                <Route ScrollToTop path="/" element={<Estructura />}>
                    <Route index element={<Index />} />


                </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    );
  }
  
  export default App;