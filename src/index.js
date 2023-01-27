import React from "react";
import { createRoot } from "react-dom/client";
import "./scss/index.scss";
import App from "./components/App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
