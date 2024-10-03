import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App"


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// react ma function(jo html return kare) ko component khaty hyn
