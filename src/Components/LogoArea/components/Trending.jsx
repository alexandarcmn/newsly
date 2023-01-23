import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
//
import FontAwesome from "../../FontAwesome";

export default function Trending() {
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
                  <SwiperSlide className="trancarousel_item">
                    <p>
                      <Link to="/">
                        Top 10 Best Movies of 2018 So Far: Great Movies To Watch
                        Now
                      </Link>
                    </p>
                  </SwiperSlide>
                  <SwiperSlide className="trancarousel_item">
                    <p>
                      <Link to="/">
                        Top 10 Best Movies of 2018 So Far: Great Movies To Watch
                        Now
                      </Link>
                    </p>
                  </SwiperSlide>
                  <SwiperSlide className="trancarousel_item">
                    <p>
                      <Link to="/">
                        Top 10 Best Movies of 2018 So Far: Great Movies To Watch
                        Now
                      </Link>
                    </p>
                  </SwiperSlide>
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
