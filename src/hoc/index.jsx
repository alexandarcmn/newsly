import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
//
import { getAllNewsByCategory } from "../Redux/slices/newsSlice";
//
import LogoArea from "../Components/LogoArea";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Layout() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    [
      "general",
      "business",
      "entertainment",
      "health",
      "science",
      "sports",
      "technology",
    ].forEach((el) => {
      dispatch(getAllNewsByCategory(el));
    });
  }, []);

  const renderOutletWrapper = () => {
    if (pathname === "/home") {
      return (
        <div className="wrapper_welcome">
          <Header className="home4menu" />
          <Outlet />
        </div>
      );
    } else {
      return (
        <>
          <Header />
          <Outlet />
        </>
      );
    }
  };

  return (
    <div className="theme-4">
      <LogoArea />
      {renderOutletWrapper()}
      <Footer />
    </div>
  );
}
