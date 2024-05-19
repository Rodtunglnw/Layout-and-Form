import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LayoutPage from "./Page/LayoutPage";
import HomePage from "./Page/HomePage";
import "./i18n";
import FormPage from "./Page/FormPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/layout",
    element: <LayoutPage />,
  },
  {
    path: "/layout/:lang",
    element: <LayoutPage />,
  },
  {
    path: "/form",
    element: <FormPage />,
  },
  {
    path: "/form/:lang",
    element: <FormPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
