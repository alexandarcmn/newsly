import { Link } from "react-router-dom";
import dayjs from "dayjs";
//
import { createSingleNewsSlug, gentRandomImageByCategory, handleSingleNewsData } from "../../../Utils/helpers";

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
              <Link
                to={createSingleNewsSlug(item?.title)}
                state={{ data: item }}
                onClick={() => handleSingleNewsData(item)}
              >
                <img src={item?.image ?? gentRandomImageByCategory(item?.category)} alt="thumb" />
              </Link>
            </div>
          </div>
          <div className="single_post_text">
            <div className="row">
              <div className="col-9 align-self-cnter">
                <div className="meta3">
                  <Link
                    to={createSingleNewsSlug(item?.title)}
                    state={{ data: item }}
                    onClick={() => handleSingleNewsData(item)}
                  >
                    {item?.category?.toUpperCase()}
                  </Link>
                  <Link
                    to={createSingleNewsSlug(item?.title)}
                    state={{ data: item }}
                    onClick={() => handleSingleNewsData(item)}
                  >
                    {dayjs(item?.published_at).format("MMMM DD, YYYY")}
                  </Link>
                </div>
              </div>
            </div>
            <h4>
              <Link
                to={createSingleNewsSlug(item?.title)}
                state={{ data: item }}
                onClick={() => handleSingleNewsData(item)}
              >
                {item?.title}
              </Link>
            </h4>
            <div className="space-10" />
            <p className="post-p">
              {item?.description
                ? item?.description?.substring(0, 100) + "..."
                : ""}
            </p>
            <div className="space-10" />
            <Link
              to={createSingleNewsSlug(item?.title)}
              state={{ data: item }}
              className="readmore4"
              onClick={() => handleSingleNewsData(item)}
            >
              Read more
            </Link>
          </div>
        </div>
      ))}
      {showMore ? (
        <Link to="/categories/entertainment" className="showmore">
          Show more
        </Link>
      ) : null}
    </div>
  );
}
