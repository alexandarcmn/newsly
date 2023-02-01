import { Link } from "react-router-dom";
import dayjs from "dayjs";
//
import {
  createSingleNewsSlug,
  gentRandomImageByCategory,
  handleSingleNewsData,
  openInNewTab,
} from "../../../Utils/helpers";

export default function WidgetFinanceTwo({ title, data }) {
  return (
    <div className="finance mb30 white_bg border-radious5 shadow7 padding20 mt30">
      <div className="heading">
        <h3 className="widget-title">{title}</h3>
      </div>
      {data?.map((item, i) => (
        <div key={i} className="single_post mb30 type18">
          <div className="post_img">
            <div className="img_wrap">
              <Link
                to={createSingleNewsSlug(item?.title)}
                state={{ data: item }}
                onClick={() => handleSingleNewsData(item)}
              >
                <img
                  src={item?.image ?? gentRandomImageByCategory(item?.category)}
                  alt="thumb"
                />
              </Link>
            </div>
            <span className="batch3 date">
              {dayjs(item?.published_at).format("MMMM DD, YYYY")}
            </span>
          </div>
          <div className="single_post_text py0">
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
          </div>
        </div>
      ))}
      <Link
        to={`/categories/${data[0]?.category}`}
        // onClick={() =>
        //   openInNewTab(`/categories/${data[0]?.category}`, true)
        // }
        className="showmore"
      >
        Show more
      </Link>
    </div>
  );
}
