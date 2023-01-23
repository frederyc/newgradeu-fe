import React, {useState} from 'react';
import {ThemeProvider, Theme, CssBaseline} from "@mui/material";
import {lightTheme, darkTheme} from "./theme";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthenticationPage from "./components/pages/AuthenticationPage";

function App() {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path={'/authentication'} element={<AuthenticationPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
