import React from "react";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "contexts/ThemeContext";
import GlobalStyles from "styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <h1>Let`s Code</h1>
          {/* <Routes /> */}
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};

export default App;
