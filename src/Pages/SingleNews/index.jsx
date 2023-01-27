import { Link, useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
//
import CategoryFour from "../Home/components/CategoryFour";
import { gentRandomImageByCategory, openInNewTab } from "../../Utils/helpers";

const DEFF_AVATAR_IMG =
  "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=826&t=st=1674595570~exp=1674596170~hmac=bd693938e7fff743537dfbf83e7292347863f08bca923731d5621adee605b6c6";

export default function SingleNews() {
  const { state } = useLocation();
  const singleNews =
    state?.data || JSON.parse(localStorage.getItem("singleNewsData"));

  return (
    <>
      <div className="archives layout3 post post1 padding-top-30">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-8">
              <div className="row">
                <div className="col-6 align-self-center">
                  <div className="page_category">
                    <h4>{singleNews?.category?.toUpperCase()}</h4>
                  </div>
                </div>
              </div>
              <div className="space-30" />
              <div className="single_post_heading">
                <h1>{singleNews?.title}</h1>
                <div className="space-10" />
                <p>
                  {singleNews?.description
                    ? singleNews?.description?.substring(0, 50) + "..."
                    : ""}
                </p>
              </div>
              <div className="space-40" />
              <div className="border-radious5">
                <img
                  src={
                    singleNews?.image ??
                    gentRandomImageByCategory(singleNews?.category)
                  }
                  alt="thumb"
                />
              </div>
              <div className="space-20" />
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div className="author">
                    <div className="author_img">
                      <div className="author_img_wrap">
                        <img src={DEFF_AVATAR_IMG} alt="author2" />
                      </div>
                    </div>
                    <Link to="#">{singleNews?.author ?? ""}</Link>
                    <ul>
                      <li>
                        <Link to="#">
                          {dayjs(singleNews?.published_at).format(
                            "MMMM DD, YYYY"
                          )}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="space-20" />
              <p>{singleNews?.description}</p>
              <div className="space-40" />
              <div className="tags">
                <ul className="inline">
                  <li className="tag_list">Source: {singleNews?.source}</li>
                </ul>
              </div>
              <Link
                to="#"
                onClick={() => openInNewTab(singleNews?.url, true)}
                className="showmore"
              >
                Show more
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="banner2 mb30 border-radious5">
                <Link to="/">
                  <img
                    src="https://preview.colorlib.com/theme/magnews2/images/banner-02.jpg"
                    alt="banner4"
                  />
                </Link>
              </div>
              {/* <WidgetFinanceTwo data={financePosts} title="Finance" /> */}
              <CategoryFour />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
