import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
//
import FontAwesome from "../../FontAwesome";

const news = [
  {
    title: "Japan’s virus success puzzled the world luck running out?",
    desc: "The property, complete with seates screening from room amphitheater pond with sandy shower…",
  },
  {
    title: "Japan’s virus success puzzled the world luck running out?",
    desc: "The property, complete with seates screening from room amphitheater pond with sandy shower…",
  },
];

export default function FooterMoreNewsTwo({ data }) {
  return (
    <div className="footer_more_news mb30">
      <h3 className="widget-title">More news</h3>
      <div className="more_newss">
        {data?.map((item, i) => (
          <Fragment key={i}>
            <div className="single_more_news">
              <p className="meta">{item?.category}</p>
              <Link to="/">{item?.title}</Link>
              <p>
                {item?.description
                  ? item?.description?.substring(0, 70) + "..."
                  : ""}
              </p>
              <ul className="mt20 like_cm">
                <li>
                  <Link to="/">
                    <FontAwesome name="calendar" />{" "}
                    {dayjs(item?.published_at).format("MMMM DD, YYYY")}
                  </Link>
                </li>
              </ul>
            </div>
            {i + 1 < data?.length ? (
              <Fragment>
                <div className="space-15" />
                <div className="border_black" />
                <div className="space-15" />
              </Fragment>
            ) : null}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
