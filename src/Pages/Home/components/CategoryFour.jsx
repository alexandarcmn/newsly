import { Link } from "react-router-dom";
//
import FontAwesome from "../../../Components/FontAwesome";

const category = [
  { title: "General" },
  { title: "Business" },
  { title: "Entertainment" },
  { title: "Health" },
  { title: "Science" },
  { title: "Sports" },
  { title: "Technology" },
];

export default function CategoryFour() {
  return (
    <div className="category4 mb30 border-radious5 shadow7 white_bg padding20">
      <h3 className="widget-title">Categories</h3>
      <ul>
        {category?.map((cat, i) => (
          <li key={i}>
            <Link to="/">
              {cat?.title}
              <FontAwesome name="play" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
