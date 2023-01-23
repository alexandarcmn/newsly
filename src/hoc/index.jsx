import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
//
import { getAllNewsByCategory } from "../Redux/slices/newsSlice";
//
import LogoArea from "../Components/LogoArea";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Layout() {
  const dispatch = useDispatch();

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
  return (
    <div className="theme-4">
      <LogoArea />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
