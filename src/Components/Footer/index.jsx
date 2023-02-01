import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
//
import { searchModalHandler } from "../../Redux/slices/layoutSlice";
//
import FooterNewsCategories from "./components/FooterNewsCategories";
//
import Logo from "../../doc/img/logo/logo1.png";
import offer1 from "../../doc/img/offers/off2.jpg";
import SearchWidget from "../SearchWidget";

export default function Footer() {
  const dispatch = useDispatch();
  const {
    news: {
      allNews: { entertainment },
      newsPending,
    },
  } = useSelector((state) => state);

  const handleSearchOpen = () => dispatch(searchModalHandler());

  return (
    <div className="footer footer_area3 ">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <div className="single_footer3 mb30">
              <div className="logo">
                <Link to="/">
                  <img src={Logo} alt="logo" />
                </Link>
                <div className="space-10" />
              </div>
              <p>
                <span>Inpressnews</span> Stay informed with our short InPress
                News! <br /> Be among the first to hear and read about the most
                popular worldwide news.
              </p>
              <SearchWidget customClass="mt10 w-75"/>
              {/* <p>
                Explore{" "}
                <Link
                  to="#"
                  onClick={() => handleSearchOpen()}
                  style={{ color: "#FF5555" }}
                >
                  {" "}
                  MORE{" "}
                </Link>{" "}
                news
              </p> */}
            </div>
            {/* <div className="single_footer_nav mb30">
              <FooterNewsCategories />
            </div> */}
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <div className="single_footer_nav mb30">
                  <FooterNewsCategories />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-12">
            <div className="banner_area mt30">
              <Link to="/" style={{ width: "100%" }}>
                <img
                  src={offer1}
                  alt="banner42"
                  style={{ width: "100%" }}
                />
              </Link>
            </div>
          </div> */}
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <p>
                &copy; Copyright {dayjs().format("YYYY")}, All Rights Reserved
              </p>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="copyright_menus text-right">
                <div className="language" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
