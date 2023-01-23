import Trending from "./components/Trending";
import Logo from "./components/Logo";
import InfoNav from "./components/InfoNav";

export default function LogoArea() {
  return (
    <div className="logo_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 align-self-center">
            <Logo />
          </div>
          <div className="col-lg-9 align-self-center">
            <div className="row">
              <Trending />
            </div>
            <div className="space-5" />
            <div className="border4" />
            <div className="space-20" />
            <InfoNav />
          </div>
        </div>
      </div>
    </div>
  );
}
