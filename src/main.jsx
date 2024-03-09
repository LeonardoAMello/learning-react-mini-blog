// React libs
import React from "react";
import ReactDOM from "react-dom/client";

// Routing libs
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// App component
import App from "./App.jsx";

// Global CSS
import "./index.css";

// Routes
import { routes } from "./routes/routes.jsx";
import ErrorPage from "./routes/ErrorPage/ErrorPage";

// Routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: routes,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
