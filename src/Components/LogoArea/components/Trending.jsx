import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
//
import FontAwesome from "../../FontAwesome";

export default function Trending() {
  const {
    news: {
      allNews: { technology },
      newsPending,
    },
  } = useSelector((state) => state);

  const params = {
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: ".nextBtn",
      prevEl: ".prevBtn",
    },
  };
  return (
    <div className="col-12">
      <div className="topbar">
        <div className="row">
          <div className="col-md-12 align-self-center">
            <div className="trancarousel_area">
              <p className="trand">Tranding</p>
              <div className="nav_style1">
                <Swiper navigation={true} modules={[Navigation]} {...params}>
                  {technology?.data?.map((el, idx) => (
                    <SwiperSlide
                      className="trancarousel_item"
                      key={`head-trending-${idx}`}
                    >
                      <p>
                        <Link to="/">{el?.title}</Link>
                      </p>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="navBtns">
                  <button className="navBtn prevBtn">
                    <FontAwesome name="angle-left" />
                  </button>
                  <button className="navBtn nextBtn">
                    <FontAwesome name="angle-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
