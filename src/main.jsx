import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import { Home } from "./pages/Home.jsx";
import { Top } from "./pages/Top.jsx";
import { Why } from "./pages/Why.jsx";
import { WhyNavData } from "./components/WhyNavData.jsx";
import { HowNavData } from "./components/HowNavData.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/top",
    element: <Top />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/why",
    element: <Why />,
  
    children: [
      {
        path: "why/:why",
        element: <WhyNavData />,
      },
      {
        path: "why/:how",
        element: <HowNavData />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
