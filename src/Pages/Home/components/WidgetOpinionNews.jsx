import { Link } from "react-router-dom";
//
import opinion41 from "../../../doc/img/opinion/opinion41.jpg";
import opinion42 from "../../../doc/img/opinion/opinion42.jpg";
import FontAwesome from "../../../Components/FontAwesome";

const opinionPosts = [
  {
    photo: opinion41,
    title: "Copa America: Luis Suarez from devastated US",
    desc: "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
  },
  {
    photo: opinion42,
    title: "Japan’s virus success puzzled the world luck running out?",
    desc: "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
  },
];

const DEFF_IMG =
  "https://img.freepik.com/free-photo/closeup-shot-several-newspapers-stacked-top-each-other_181624-16474.jpg?w=1380&t=st=1674498275~exp=1674498875~hmac=1bd34b8db02e9d56cd9ac66da9262aa19b86a48d2e6f31260118c92c3d049deb";

export default function WidgetOpinionNews({ data }) {
  return (
    <div className="finance mt30 mb30 white_bg border-radious5 shadow7 padding20">
      <div className="heading">
        <h3 className="widget-title">Opinion News</h3>
      </div>
      {data?.map((item, i) => (
        <div key={i} className="single_post mb30 type18">
          <div className="post_img">
            <div className="img_wrap">
              <Link to="/">
                <img src={item?.image ?? DEFF_IMG} alt="thumb" />
              </Link>
            </div>
          </div>
          <div className="single_post_text">
            <h4>
              <Link to="/">{item?.title}</Link>
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
    </div>
  );
}
