import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/404.jsx";
import Dashboard from "./pages/Admin/Dashboard.jsx";
import Users from "./pages/Admin/Users.jsx";
import Category from "./pages/Admin/Category.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Ngejournal</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/category",
    element: <Category />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
