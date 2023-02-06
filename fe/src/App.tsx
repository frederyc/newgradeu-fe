import React, {useState} from 'react';
import {ThemeProvider, Theme, CssBaseline} from "@mui/material";
import {darkTheme, lightTheme} from "./theme";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthenticationPage from "./components/pages/structure/AuthenticationPage";
import BrowsePage from "./components/pages/structure/BrowsePage";

function App() {
  const [theme, setTheme] = useState<Theme>(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path={'/authentication'} element={<AuthenticationPage />} />
          <Route path={'/browse'} element={<BrowsePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
