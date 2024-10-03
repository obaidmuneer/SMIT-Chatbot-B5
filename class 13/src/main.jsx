import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App"
import Contact from "./routes/Contact"
import Profile from "./routes/Profile"
import Root from "./routes/root"
import ErrorPage from "./error"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "profile/:id",
    element: <Profile />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// react ma function(jo html return kare) ko component khaty hyn
