import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@fontsource/inter";
import "@fontsource/playfair-display";
import "@fontsource/alice";
import "./index.css";
import SmoothScroll from "./components/common/SmoothScroll";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SmoothScroll />
    <App />
  </React.StrictMode>
);