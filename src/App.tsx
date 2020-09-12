import React from "react";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "contexts/ThemeContext";
import GlobalStyles from "styles/GlobalStyles";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};

export default App;
