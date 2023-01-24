import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//
import PostCarousel from "./components/PostCarousel";
import PostGallery from "./components/PostGallery";
import TrendingNewsThree from "./components/PostGallery/TrendingNewsThree";
import BusinessCarousel from "./components/BusinessCarousel";
import BusinessImageCarousel from "./components/BusinessImageCarousel";
import WidgetFinanceTwo from "./components/WidgetFinanceTwo";
import NewsSection from "./components/NewsSection";
import InternationalNews from "./components/InternationalNews";
import ScienceNews from "./components/ScienceNews";
import SportsNews from "./components/SportsNews";
import GalleryCarousel from "./components/GalleryCarousel";
import WidgetOpinionNews from "./components/WidgetOpinionNews";
import CategoryFour from "./components/CategoryFour";
import HeroArea from "./components/HeroArea";

export default function Home() {
  const {
    news: {
      allNews: {
        general,
        business,
        entertainment,
        health,
        science,
        sports,
        technology,
      },
      newsPending,
    },
  } = useSelector((state) => state);

  return (
    <>
      {/* <PostCarousel className="fifth_bg" /> */}
      {/* <PostGallery className="fifth_bg" data={general?.data?.slice(0, 10)} /> */}
      <div className="bg4">
        <HeroArea data={general?.data?.slice(0, 4)} />
        <div className="space-60" />
        <div className="total3 mt40 fifth_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-xl-8">
                <TrendingNewsThree data={general?.data?.slice(10, 21)} />
                <BusinessCarousel data={entertainment?.data?.slice(0, 5)} />
                <BusinessImageCarousel
                  dataOne={business?.data?.slice(0, 3)}
                  dataTwo={technology?.data?.slice(0, 5)}
                />
              </div>
              <div className="col-md-6 col-xl-4 d-md-none d-xl-block">
                <WidgetFinanceTwo
                  data={science?.data?.slice(5, 7)}
                  title="Science"
                />
                <div className="banner2 mb30 border-radious5">
                  <Link to="/">
                    <img
                      src="https://preview.colorlib.com/theme/magnews2/images/banner-02.jpg"
                      alt="banner4"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <NewsSection data={sports?.data?.slice(3, 14)} />
        </div>
        <div className="inernational4 mt60">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-xl-8">
                <InternationalNews
                  data={entertainment?.data?.slice(0, 6)}
                  className="mb30"
                  title="Entertainment"
                  showMore={true}
                />
                <div className="banner_area mb30 mt30 xs-mt60">
                  <Link to="/">
                    <img
                      src="https://preview.colorlib.com/theme/magnews2/images/banner-01.jpg"
                      alt="banner42"
                    />
                  </Link>
                </div>
                <ScienceNews data={health?.data?.slice(0, 5)} />
                {/* <div className="row">
                  <div className="col-md-6">
                    <SportsNews data={sports?.data?.slice(0, 5)} />
                  </div>
                  <div className="col-md-6">
                    <GalleryCarousel data={general?.data?.slice(21, 26)} />
                  </div>
                </div> */}
              </div>
              <div className="col-md-12 col-xl-4">
                <div className="row">
                  {/* <div className="col-lg-6 col-xl-12 col-md-6">
                    <WidgetOpinionNews data={science?.data?.slice(5, 7)} />
                  </div> */}
                  <div className="col-md-6 col-xl-12">
                    <CategoryFour />
                    <WidgetFinanceTwo
                      data={business?.data?.slice(23, 26)}
                      title="Business"
                    />
                    <GalleryCarousel data={general?.data?.slice(21, 26)} />

                    {/* <div className="banner2 mb30 border-radious5  d-md-none d-xl-block">
                      <Link to="/">
                        <img
                          src="https://preview.colorlib.com/theme/magnews2/images/banner-02.jpg"
                          alt="banner4"
                        />
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-60" />
      </div>
    </>
  );
}
