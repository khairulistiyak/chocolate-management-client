import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./compunent/Home.jsx";
import Main from "./compunent/Main";
import AddProducts from "./compunent/AddProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/products"),
      },

      {
        path: "/addProducts",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/messages",
        element: <p>Messages</p>,
      },
      {
        path: "/bills",
        element: <p>bills</p>,
      },
      {
        path: "/settings",
        element: <p>Settings</p>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
