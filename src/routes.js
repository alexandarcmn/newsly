import { lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
//
import Layout from "./hoc/index";
//
const Home = lazy(() => import("./Pages/Home"));

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: (
        <Suspense fallback={<p>Loading....</p>}>
          <Layout />
        </Suspense>
      ),
      children: [
        { path: "/", element: <Navigate to="/home" /> },
        { path: "/home", element: <Home /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
