import { Link } from "react-router-dom";
//
import FontAwesome from "../../../Components/FontAwesome";


export default function CategoryFour() {
  const categories = ["General","Business","Entertainment","Health","Science","Sports","Technology"];
  return (
    <div className="category4 mb30 border-radious5 shadow7 white_bg padding20">
      <h3 className="widget-title">Categories</h3>
      <ul>
        {categories?.map((cat, i) => (
          <li key={i}>
            <Link to={`/categories/${cat?.toLocaleLowerCase()}`}>
              {cat}
              <FontAwesome name="play" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
