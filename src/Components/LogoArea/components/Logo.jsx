import { Link } from "react-router-dom";
import NewsLogo from '../../../doc/img/logo/logo1.png'

export default function Logo() {
  return (
    <div className="logo4">
      <Link to="/home">
        <img
          src={NewsLogo}
          alt="logo"
        />
      </Link>
    </div>
  );
}
