import { Fragment } from "react";
import { Link } from "react-router-dom";

const category = [
  { title: "General" },
  { title: "Business" },
  { title: "Entertainment" },
  { title: "Health" },
  { title: "Science" },
  { title: "Sports" },
  { title: "Technology" },
];

export default function FooterNewsCategories() {
  return (
    <Fragment>
      <h3 className="widget-title">Categories</h3>
      <div className="row">
        <div className="col-lg-6">
          <ul>
            {category?.slice(0, 4).map(({ title }, i) => (
              <li key={`foot-cat-${i}`}>
                <Link to="/">{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-lg-6">
          <ul>
            {category?.slice(4).map(({ title }, i) => (
              <li>
                <Link to="/">{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
