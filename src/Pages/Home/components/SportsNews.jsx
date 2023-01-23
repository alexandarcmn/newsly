import { Fragment } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
//
import FontAwesome from "../../../Components/FontAwesome";

const DEFAULT_IMG =
  "https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=1800&t=st=1674507045~exp=1674507645~hmac=a2dfe730efa32c59a78344ae2e07d28f584cdb4f69f71580495edf267127ac28";

export default function SportsNews({ data }) {
  return (
    <div className="sports_wrap mb30 white_bg border-radious5 shadow7 padding20">
      <div className="finance ">
        <div className="heading">
          <h3 className="widget-title">Sports</h3>
        </div>
        <div className="single_post type18">
          <div className="post_img">
            <div className="img_wrap">
              <Link to="/">
                <img src={data[0]?.image ?? DEFAULT_IMG} alt="sports41" />
              </Link>
            </div>
            <span className="batch3 date">
              {dayjs(data[0]?.published_at).format("MMMM DD, YYYY")}
            </span>
          </div>
          <div className="single_post_text py0">
            <h4>
              <Link to="/post1">{data[0]?.title}</Link>
            </h4>
            <div className="space-10" />
            <p className="post-p">
              {data[0]?.description
                ? data[0]?.description?.substring(0, 100) + "..."
                : ""}
            </p>
          </div>
        </div>
        <div className="space-30" />
        <div className="border4" />
        <div className="space-30" />
      </div>
      <div className="sport_buttom">
        {data?.slice(1)?.map((item, i) => (
          <Fragment key={i}>
            <div className="single_post type10 type16 widgets_small mb15">
              <div className="post_img">
                <div className="img_wrap">
                  <Link to="/">
                    <img src={item.image ?? DEFAULT_IMG} alt="thumb" />
                  </Link>
                </div>
              </div>
              <div className="single_post_text">
                <h4>
                  <Link to="/">{item?.title}</Link>
                </h4>
                <ul className="like_cm">
                  <li>
                    <Link to="/">
                      <FontAwesome name="calendar" />{" "}
                      {dayjs(item?.published_at).format("MMMM DD, YYYY")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {i + 1 < data?.slice(1)?.length ? (
              <Fragment>
                <div className="space-15" />
                <div className="border4" />
                <div className="space-15" />
              </Fragment>
            ) : null}
          </Fragment>
        ))}
        <div className="space-20" />
        <Link to="/" className="showmore">
          Show more
        </Link>
      </div>
    </div>
  );
}
