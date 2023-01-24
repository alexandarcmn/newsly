import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import dayjs from "dayjs";
//
import { createSingleNewsSlug } from "../../../Utils/helpers";
//
import FontAwesome from "../../../Components/FontAwesome";

const DEFAULT_IMG =
  "https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-100679.jpg?w=1380&t=st=1674500633~exp=1674501233~hmac=9fa196c998ad99d97951a6da437daa6a7ae1b508cc649aa41633e6c9aef17400";

export default function BusinessCarousel({ data }) {
  const params = {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
    navigation: {
      nextEl: ".owl-next",
      prevEl: ".owl-prev",
    },
  };
  return (
    <div className="business_carousel nav_style4 mb30 ">
      <Swiper navigation={true} modules={[Navigation]} {...params}>
        {data?.map((item, i) => (
          <SwiperSlide
            key={i}
            className="business_carousel_items white_bg padding20 shadow7"
          >
            <div className="single_international">
              <p className="meta before">{item?.category?.toUpperCase()}</p>
              <h4>
                <Link
                  to={createSingleNewsSlug(item?.title)}
                  state={{ data: item }}
                >
                  {item?.title?.substring(0, 70) || ""}
                </Link>
              </h4>
              <div className="row">
                <div className="col-8 align-self-center">
                  <p>
                    {item?.description
                      ? item?.description?.substring(0, 70) + "..."
                      : ""}
                  </p>
                </div>
                <div className="col-4 align-self-center">
                  <div className="img_wrap">
                    <Link
                      to={createSingleNewsSlug(item?.title)}
                      state={{ data: item }}
                    >
                      <img src={item?.image || DEFAULT_IMG} alt="thumb" />
                    </Link>
                  </div>
                </div>
              </div>
              <ul className="mt20 like_cm">
                <li>
                  <Link
                    to={createSingleNewsSlug(item?.title)}
                    state={{ data: item }}
                  >
                    <FontAwesome name="calendar" />{" "}
                    {dayjs(item?.published_at).format("MMMM DD, YYYY")}
                  </Link>
                </li>
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="owl-nav">
        <div className="owl-prev">
          <FontAwesome name="angle-left" />
        </div>
        <div className="owl-next">
          <FontAwesome name="angle-right" />
        </div>
      </div>
    </div>
  );
}
