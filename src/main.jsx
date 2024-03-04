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
import ErrorPage from "./routes/ErrorPage/ErrorPage";
import Home from "./routes/Home/Home";
import EditPost from "./routes/EditPost/EditPost";
import Dashboard from "./routes/Dashboard/Dashboard";
import About from "./routes/About/About";
import Login from "./routes/Login/Login";
import Register from "./routes/Register/Register";

// Routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new-post",
        element: <EditPost />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/edit-post/:id",
        element: <EditPost />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
