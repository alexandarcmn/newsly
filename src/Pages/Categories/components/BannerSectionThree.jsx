import { Link } from "react-router-dom";
//
import offer1 from '../../../doc/img/offers/off2.jpg';

export default function BannerSectionThree() {
  return (
    <div className="padding5050 theme3_bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="banner1 border-radious5">
              <Link to="/">
                <img src={offer1} alt="banner" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
