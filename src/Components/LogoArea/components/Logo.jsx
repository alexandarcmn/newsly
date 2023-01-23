import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="logo4">
      <Link to="/home">
        <img
          src="https://preview.colorlib.com/theme/magnews2/images/icons/logo-01.png"
          alt="logo"
        />
      </Link>
    </div>
  );
}
