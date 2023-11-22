import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/404.jsx";
import Sidebar from "./Sidebar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Ngejournal</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <Sidebar/>
  </React.StrictMode>
);
