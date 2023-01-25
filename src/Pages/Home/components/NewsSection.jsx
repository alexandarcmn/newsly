import { Fragment } from "react";
import { Link } from "react-router-dom";
import { BiLinkAlt } from "react-icons/bi";
import dayjs from "dayjs";
//
import { createSingleNewsSlug, handleSingleNewsData } from "../../../Utils/helpers";
//
import FontAwesome from "../../../Components/FontAwesome";

const DEFF_IMAGE =
  "https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg?w=2000&t=st=1674503602~exp=1674504202~hmac=7d7d685f3f9716f64cb265afa280bcd922308dba0e462fc93de455ebbfeb522c";

export default function NewsSection({ data }) {
  return (
    <div className="v4video primay_bg section-padding2 mt60">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tatal_videos4">
              <div className="row">
                <div className="col-lg-8">
                  <div
                    className="tatal_video4"
                    style={{
                      background: `url(${
                        data[0]?.image ?? DEFF_IMAGE
                      }) center/cover no-repeat`,
                    }}
                  >
                    <div className="video4_content">
                      <Link
                        to={createSingleNewsSlug(data[0]?.title)}
                        state={{ data: data[0] }}
                        onClick={() => handleSingleNewsData(data[0])}
                      >
                        {data[0]?.title}
                      </Link>
                      <div className="video4_video">
                        <div className="video4_icon">
                          <BiLinkAlt
                            style={{ width: "1.5rem", height: "1.5rem" }}
                          />
                        </div>
                        <h6>
                          {data[0]?.category?.toUpperCase()}{" "}
                          <span>
                            {dayjs(data[0]?.published_at).format(
                              "MMMM DD, YYYY"
                            )}
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="video4_list scroll_bar padding20">
                    {data?.slice(1)?.map((item, i) => (
                      <Fragment key={i}>
                        <div className="single_video_list">
                          <div className="video_list_author">
                            <FontAwesome name="link" />
                            <h6>
                              {item?.category?.toUpperCase()}{" "}
                              <span>
                                {dayjs(item?.published_at).format("MMMM YYYY")}
                              </span>
                            </h6>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
