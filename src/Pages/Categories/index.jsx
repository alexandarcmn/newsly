import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
//
import InternationalNews from "./components/InternationalNews";
import WidgetFinanceTwo from "../Home/components/WidgetFinanceTwo";
import BannerSectionThree from "./components/BannerSectionThree";
//
import offer1 from '../../doc/img/offers/off1.jpg';
import SearchWidget from "../../Components/SearchWidget";

export default function Categories() {
  const { category } = useParams();
  const {
    news: { allNews, newsPending },
  } = useSelector((state) => state);

  const filterDiffCategoryNews = Object.entries(allNews).filter(
    ([key, val]) => key !== category
  );
  const getRandomNewsData = Object.values(filterDiffCategoryNews)[
    Math.floor(Math.random() * Object.keys(filterDiffCategoryNews).length)
  ];

  const renderUppercaseTitle = (title) => {
    return title?.charAt(0).toUpperCase() + title?.slice(1);
  };

  return (
    <>
      <div className="archives layout3 post post1 padding-top-30 bg4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-8">
              <div className="row">
                <div className="col-12">
                  <div className="categories_title">
                    <h5>
                      Category:{" "}
                      <Link to={`/categories/${category}`}>
                        {renderUppercaseTitle(category)}
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
              <InternationalNews data={allNews[category]?.data ?? []} />
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="banner2 mb30 border-radious5">
                <Link to="/">
                  <img
                    src={offer1}
                    alt="banner4"
                  />
                </Link>
              </div>
              <SearchWidget customClass="mt30 mb30"/>
              <WidgetFinanceTwo
                data={getRandomNewsData[1]?.data?.slice(0, 2)}
                title={renderUppercaseTitle(getRandomNewsData[0])}
              />
            </div>
          </div>
        </div>
      </div>
      <BannerSectionThree/>
    </>
  );
}
