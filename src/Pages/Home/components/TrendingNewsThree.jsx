import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
//
import {
  createSingleNewsSlug,
  gentRandomImageByCategory,
  handleSingleNewsData,
  openInNewTab,
} from "../../../Utils/helpers";
//
import FontAwesome from "../../../Components/FontAwesome";

export default function TrendingNewsThree({ data }) {
  return (
    <div className="white_bg tranding3 padding20 border-radious5 mb30 shadow7">
      <div className="row">
        <div className="col-12">
          <div className="heading">
            <h2 className="widget-title">Trending News</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="single_post post_type3 xs-mb90 post_type15">
            <div className="post_img border-radious5">
              <div className="img_wrap">
                <Link
                  to={createSingleNewsSlug(data[0]?.title)}
                  state={{ data: data[0] }}
                  onClick={() => handleSingleNewsData(data[0])}
                >
                  <img
                    src={
                      data[0]?.image ||
                      gentRandomImageByCategory(data[0]?.category)
                    }
                    alt="trend31"
                  />
                </Link>
              </div>
              <span className="tranding border_tranding">
                <FontAwesome name="bolt" />
              </span>
            </div>
            <div className="single_post_text">
              <div className="row">
                <div className="col-9 align-self-cnter">
                  <div className="meta3">
                    <Link
                      to={createSingleNewsSlug(data[0]?.title)}
                      state={{ data: data[0] }}
                      onClick={() => handleSingleNewsData(data[0])}
                    >
                      General
                    </Link>
                    <Link
                      to={createSingleNewsSlug(data[0]?.title)}
                      state={{ data: data[0] }}
                      onClick={() => handleSingleNewsData(data[0])}
                    >
                      {dayjs(data[0]?.published_at).format("MMMM DD, YYYY")}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="space-5" />
              <h4>
                <Link
                  to={createSingleNewsSlug(data[0]?.title)}
                  state={{ data: data[0] }}
                  onClick={() => handleSingleNewsData(data[0])}
                >
                  {data[0]?.title}
                </Link>
              </h4>
              <div className="space-10" />
              <p className="post-p">
                {data[0]?.description
                  ? data[0]?.description?.substring(0, 100) + "..."
                  : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="popular_items scroll_bar">
            {data?.slice(1, 10)?.map((item, i) => (
              <Fragment key={i}>
                <div className="single_post type10 type16 widgets_small mb15">
                  <div className="post_img">
                    <div className="img_wrap">
                      <Link
                        to={createSingleNewsSlug(item?.title)}
                        state={{ data: item }}
                        onClick={() => handleSingleNewsData(item)}
                      >
                        <img
                          src={
                            item?.image ||
                            gentRandomImageByCategory(item?.category)
                          }
                          alt="thumb"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="single_post_text">
                    <div className="meta3">
                      <Link
                        to={createSingleNewsSlug(item?.title)}
                        state={{ data: item }}
                        onClick={() => handleSingleNewsData(item)}
                      >
                        General
                      </Link>
                      <Link
                        to={createSingleNewsSlug(item?.title)}
                        state={{ data: item }}
                        onClick={() => handleSingleNewsData(item)}
                      >
                        {dayjs(item?.published_at).format("MMMM DD, YYYY")}
                      </Link>
                    </div>
                    <h4>
                      <Link
                        to={createSingleNewsSlug(item?.title)}
                        state={{ data: item }}
                        onClick={() => handleSingleNewsData(item)}
                      >
                        {item?.title || ""}
                      </Link>
                    </h4>
                  </div>
                </div>
                {i + 1 < data?.slice(1, 10).length ? (
                  <Fragment>
                    <div className="space-5" />
                    <div className="border4" />
                    <div className="space-15" />
                  </Fragment>
                ) : null}
              </Fragment>
            ))}
            <Link
              to="#"
              onClick={() =>
                openInNewTab(`/categories/${data[0]?.category}`, true)
              }
              className="showmore mt30"
            >
              Show more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
