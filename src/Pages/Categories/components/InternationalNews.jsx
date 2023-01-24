import { useState } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
//
import { createSingleNewsSlug } from "../../../Utils/helpers";

const DEFFAULT_IMG =
  "https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg?w=2000&t=st=1674503602~exp=1674504202~hmac=7d7d685f3f9716f64cb265afa280bcd922308dba0e462fc93de455ebbfeb522c";

export default function InternationalNews({ data }) {
  const [sliceIndex, setSliceIndex] = useState(6);

  const showMoreData = () => setSliceIndex(sliceIndex + 6);

  return (
    <div className="business3 padding30 white_bg border-radious5 shadow7 mb60">
      {data?.slice(0, sliceIndex)?.map((item, i) => (
        <div
          key={i}
          className={`single_post post_type12 type20 ${
            i + 1 < data.length ? "mb30" : ""
          }`}
        >
          <div className="post_img">
            <div className="img_wrap border-radious5">
              <Link
                to={createSingleNewsSlug(item?.title)}
                state={{ data: item }}
              >
                <img src={item?.image ?? DEFFAULT_IMG} alt="thumb" />
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
                  >
                    {item?.category?.toUpperCase()}
                  </Link>
                  <Link
                    to={createSingleNewsSlug(item?.title)}
                    state={{ data: item }}
                  >
                    {dayjs(item?.published_at).format("MMMM DD, YYYY")}
                  </Link>
                </div>
              </div>
              <div className="col-3 align-self-cnter"></div>
            </div>
            <h4>
              <Link
                to={createSingleNewsSlug(item?.title)}
                state={{ data: item }}
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
            >
              Read more
            </Link>
          </div>
        </div>
      ))}
      {sliceIndex >= data?.length ? null : (
        <Link to="#" className="showmore" onClick={() => showMoreData()}>
          Show more
        </Link>
      )}
    </div>
  );
}
