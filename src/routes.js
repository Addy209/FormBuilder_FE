import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/Dashboard/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "forms", element: <h1>Forms</h1> },
      { path: "entries", element: <h1>Entries</h1> },
    ],
  },
]);
