import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import dayjs from "dayjs";
//
const DEFAULT_IMG =
  "https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-100679.jpg?w=1380&t=st=1674500633~exp=1674501233~hmac=9fa196c998ad99d97951a6da437daa6a7ae1b508cc649aa41633e6c9aef17400";

export default function HeroArea({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiper = useRef(null);

  const params = {
    effect: "fade",
  };

  useEffect(() => {
    if (swiper.current) {
      swiper.current?.slideTo(activeIndex);
    }
  }, [activeIndex]);

  const setSwiper = (newSwiper) => {
    swiper.current = newSwiper;
  };

  return (
    <div className="wrapper_items">
      <div className="wrapper_carousel wlc_slider_demo2">
        <Swiper {...params} initialSlide={activeIndex} onSwiper={setSwiper}>
          {data?.map((item, i) => (
            <SwiperSlide
              key={i}
              className="welcome4_area_wrap wlc_overlay"
              style={{
                background: `url(${
                  item?.image ?? DEFAULT_IMG
                }) center/cover no-repeat`,
              }}
            >
              <div className="welcome4_area">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="welcome_txt">
                        <p className="title_meta">
                          {item?.category?.toUpperCase()}{" "}
                          <span>
                            | {dayjs(item?.published_at).format("MMMM YYYY")}
                          </span>
                        </p>
                        <h1>{item?.title}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container d-md-block d-none">
        <div className="row">
          <div className="col-12" style={{ position: "relative" }}>
            <div className="welcome_list">
              <div className="wlc_slide_demo1 d-flex">
                {data?.map((item, i) => (
                  <div
                    key={`single_news_list-${i}`}
                    className={`single_news_list ${
                      activeIndex === i ? "active" : ""
                    }`}
                    onClick={() => setActiveIndex(i)}
                  >
                    <p>
                      <span>0{i + 1}</span> {item?.category}
                    </p>
                    <h4>{item?.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
