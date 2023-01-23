import { Link } from "react-router-dom";
import dayjs from "dayjs";
//
import FontAwesome from "../../../Components/FontAwesome";

const DEFFAULT_IMG =
  "https://img.freepik.com/free-photo/hand-holding-megaphone-protest_23-2148296555.jpg?w=2000&t=st=1674505083~exp=1674505683~hmac=3a3747343f632115949a497c3eeaa64361a0ceafd16375c89962b1f639c0c8f6";

export default function WidgetFinanceTwo({ title, data }) {
  return (
    <div className="finance mb30 white_bg border-radious5 shadow7 padding20">
      <div className="heading">
        <h3 className="widget-title">{title}</h3>
      </div>
      {data?.map((item, i) => (
        <div key={i} className="single_post mb30 type18">
          <div className="post_img">
            <div className="img_wrap">
              <Link to="/">
                <img src={item?.image ?? DEFFAULT_IMG} alt="thumb" />
              </Link>
            </div>
            <span className="batch3 date">
              {dayjs(item?.published_at).format("MMMM DD, YYYY")}
            </span>
          </div>
          <div className="single_post_text py0">
            <h4>
              <Link to="/post1">{item?.title}</Link>
            </h4>
            <div className="space-10" />
            <p className="post-p">
              {item?.description
                ? item?.description?.substring(0, 100) + "..."
                : ""}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
