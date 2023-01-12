import React from "react";
import Navbar from "../features/navbar/Navbar";
import AppRoutes from "./AppRoutes";
import theme from "../features/MUI-Theme/MuiTheme";
import { ThemeProvider } from "@mui/material/styles";
import AllProducts from "../features/allProducts/allProducts";

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Navbar />
        <AppRoutes />
        <AllProducts />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
