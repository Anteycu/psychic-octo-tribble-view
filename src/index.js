import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import App from "./App";

const Global = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: "Apercu Arabic Pro", "Open Sans", sans-serif;
}
ul {
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}`;

const theme = {
  media: {
    phone: "(max-width: 768px)",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
