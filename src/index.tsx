import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

import { LangProvider } from "./hooks/langHook";
import { ThemeProvider } from "./hooks/themeHook";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <LangProvider>
      <ThemeProvider>
          <App />
      </ThemeProvider>
    </LangProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
