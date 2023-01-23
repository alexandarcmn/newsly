import { Link } from "react-router-dom";
import dayjs from "dayjs";
//
import FontAwesome from "../../../Components/FontAwesome";

const DEFF_IMAGE =
  "https://img.freepik.com/free-photo/hand-holding-megaphone-protest_23-2148296555.jpg?w=2000&t=st=1674505083~exp=1674505683~hmac=3a3747343f632115949a497c3eeaa64361a0ceafd16375c89962b1f639c0c8f6";

export default function InternationalNews({
  title,
  showMore,
  className,
  data,
}) {
  return (
    <div
      className={`business3 padding30 white_bg border-radious5 ${
        className ? className : ""
      }`}
    >
      {title ? <h4 className="widget-title">{title}</h4> : null}
      {data?.map((item, i) => (
        <div
          key={i}
          className={`single_post post_type12 type20 ${
            i + 1 < data.length ? "mb30" : ""
          }`}
        >
          <div className="post_img">
            <div className="img_wrap  border-radious5">
              <Link to="/">
                <img src={item?.image ?? DEFF_IMAGE} alt="thumb" />
              </Link>
            </div>
          </div>
          <div className="single_post_text">
            <div className="row">
              <div className="col-9 align-self-cnter">
                <div className="meta3">
                  <Link to="/">{item?.category?.toUpperCase()}</Link>
                  <Link to="/">
                    {dayjs(item?.published_at).format("MMMM DD, YYYY")}
                  </Link>
                </div>
              </div>
            </div>
            <h4>
              <Link to="/">{item.title}</Link>
            </h4>
            <div className="space-10" />
            <p className="post-p">
              {item?.description
                ? item?.description?.substring(0, 100) + "..."
                : ""}
            </p>
            <div className="space-10" />
            <Link to="/" className="readmore4">
              Read more
            </Link>
          </div>
        </div>
      ))}
      {showMore ? (
        <Link to="/" className="showmore">
          Show more
        </Link>
      ) : null}
    </div>
  );
}
