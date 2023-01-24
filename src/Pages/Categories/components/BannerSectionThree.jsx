import { Link } from "react-router-dom";

export default function BannerSectionThree() {
  return (
    <div className="padding5050 theme3_bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="banner1 border-radious5">
              <Link to="/">
                <img src="https://preview.colorlib.com/theme/magnews2/images/banner-01.jpg" alt="banner" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
