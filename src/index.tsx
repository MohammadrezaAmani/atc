import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "./hooks/themeHook";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider>
          <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
