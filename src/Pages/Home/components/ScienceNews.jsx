import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import dayjs from "dayjs";
//
import {
  createSingleNewsSlug,
  gentRandomImageByCategory,
  handleSingleNewsData,
} from "../../../Utils/helpers";
//
import FontAwesome from "../../../Components/FontAwesome";

export default function ScienceNews({ data }) {
  const params = {
    slidesPerView: 2,
    spaceBetween: 0,
    slidesPerColumn: 2,
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 2,
        slidesPerColumn: 2,
      },
      768: {
        slidesPerView: 1,
        slidesPerColumn: 1,
      },
      300: {
        slidesPerView: 1,
        slidesPerColumn: 1,
      },
    },
    navigation: {
      nextEl: ".science-card-next",
      prevEl: ".science-card-prev",
    },
  };
  return (
    <div className="science_news border-radious5 mb30 shadow7 padding20 mt30">
      <h3 className="widget-title">Health News</h3>
      <div className="science_carousel multipleRowCarousel nav_style4">
        <Swiper navigation={true} modules={[Navigation]} {...params}>
          {data?.map((item, i) => (
            <SwiperSlide key={i} className="single_post mb30 type18 rashed">
              <div className="single_post_text">
                <h4>
                  <Link
                    to={createSingleNewsSlug(item?.title)}
                    state={{ data: item }}
                    onClick={() => handleSingleNewsData(item)}
                  >
                    {item?.title}
                  </Link>
                </h4>
                <div className="space-10" />
              </div>
              <div className="science_mid">
                <div className="row">
                  <div className="col-sm-4 align-self-center">
                    <div className="border-radious3">
                      <div className="img_wap">
                        <Link
                          to={createSingleNewsSlug(item?.title)}
                          state={{ data: item }}
                          onClick={() => handleSingleNewsData(item)}
                        >
                          <img
                            src={
                              item?.image ??
                              gentRandomImageByCategory(item?.category)
                            }
                            alt="thumb"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-8 align-self-center">
                    <p className="post-p">
                      {item?.description
                        ? item?.description?.substring(0, 100) + "..."
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
              <div className="book_mark">
                <h6>
                  {item?.source}{" "}
                  <span>
                    {dayjs(item?.published_at).format("MMMM DD, YYYY")}
                  </span>
                </h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="owl-nav">
          <div className="science-card-prev">
            <FontAwesome name="angle-left" />
          </div>
          <div className="science-card-next">
            <FontAwesome name="angle-right" />
          </div>
        </div>
      </div>
    </div>
  );
}
