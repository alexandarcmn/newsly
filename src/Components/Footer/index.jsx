import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//
import FooterNewsCategories from "./components/FooterNewsCategories";
import FooterMoreNewsTwo from "./components/FooterMoreNewsTwo";
//
import banner4 from "../../doc/img/bg/banner4.png";

export default function Footer() {
  const {
    news: {
      allNews: { entertainment },
      newsPending,
    },
  } = useSelector((state) => state);

  return (
    <div className="footer footer_area3 ">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <div className="single_footer3 mb30">
              <div className="logo">
                <Link to="/home-three">
                  <img
                    src="https://preview.colorlib.com/theme/magnews2/images/icons/logo-01.png"
                    alt="logo"
                  />
                </Link>
                <div className="space-10" />
              </div>
              <p>
                <span>Inpressnews</span> Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ullam consequuntur iste maxime voluptate fuga
                similique dicta ut, blanditiis, aliquid ad cumque! Vitae veniam
                harum tempore!
              </p>
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
          <div className="col-12">
            <div className="banner_area mt30">
              <Link to="/" style={{ width: '100%' }}>
                <img
                  src="https://preview.colorlib.com/theme/magnews2/images/banner-01.jpg"
                  alt="banner42"
                  style={{ width: '100%' }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <p>&copy; Copyright 2020, All Rights Reserved</p>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="copyright_menus text-right">
                <div className="language" />
                <div className="copyright_menu inline">
                  <ul>
                    {/* <li>
                      <Link to="/">Home</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
