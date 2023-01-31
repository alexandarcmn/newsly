import { Link } from "react-router-dom";
import dayjs from "dayjs";
//
import offer1 from "../../../doc/img/offers/off5.jpg";

export default function InfoNav() {
  return (
    <div className="row justify-content-end">
      <div className="col-xs-12 col-lg-6 align-self-center">
        <div className="v3datentemp justify-content-end">
          <div className="date4">
            <h5>
              {dayjs().format("dddd")}{" "}
              <span>{dayjs().format("MMMM DD, YYYY")}</span>
            </h5>
          </div>
          {/* <div className="temp d-none d-lg-block">
            <div className="temp_wap">
              <div className="temp_icon">
                <img src={tempIcon} alt="icon" />
              </div>
              <h3 className="temp_count">13</h3>
              <p>San Francisco</p>
            </div>
          </div> */}
        </div>
      </div>
      <div className="col-lg-6 d-none d-lg-block align-self-center fix_width_social">
        <div className="banner1">
          <Link to="#">
            <img
              src={offer1}
              alt="banner"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
