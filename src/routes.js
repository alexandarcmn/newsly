import { lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
//
import Layout from "./hoc/index";
// import LoadingScreen from "./Components/LoadingScreen";
//
const Home = lazy(() => import("./Pages/Home"));
const Categories = lazy(() => import("./Pages/Categories"));
const SingleNews = lazy(() => import("./Pages/SingleNews"));

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: (
        <Suspense fallback={<></>}>
          <Layout />
        </Suspense>
      ),
      children: [
        { path: "/", element: <Navigate to="/home" /> },
        { path: "/home", element: <Home /> },
        { path: "/categories/:category", element: <Categories /> },
        { path: "/news/:slug", element: <SingleNews /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
