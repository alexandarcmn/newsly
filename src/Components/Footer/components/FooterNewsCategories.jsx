import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function FooterNewsCategories() {
  const categories = [
    "General",
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  return (
    <Fragment>
      <h3 className="widget-title">Categories</h3>
      <div className="row">
        <div className="col-lg-6">
          <ul>
            {categories?.slice(0, 4).map((cat, i) => (
              <li key={`foot-cat-${i}`}>
                <Link to={`/categories/${cat?.toLocaleLowerCase()}`}>
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-lg-6">
          <ul>
            {categories?.slice(4).map((cat, i) => (
              <li>
                <Link to={`/categories/${cat?.toLocaleLowerCase()}`}>
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
