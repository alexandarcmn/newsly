import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import dayjs from "dayjs";
//
import { createSingleNewsSlug } from "../../../Utils/helpers";
//
import FontAwesome from "../../../Components/FontAwesome";

const BUSINESS_DEFFAULT_IMG =
  "https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg?w=2000&t=st=1674503602~exp=1674504202~hmac=7d7d685f3f9716f64cb265afa280bcd922308dba0e462fc93de455ebbfeb522c";
const TECH_DEFFAULT_IMG =
  "https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-100679.jpg?w=1380&t=st=1674500633~exp=1674501233~hmac=9fa196c998ad99d97951a6da437daa6a7ae1b508cc649aa41633e6c9aef17400";

export default function BusinessImageCarousel({ dataOne, dataTwo }) {
  const params = {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".business-car-next",
      prevEl: ".business-car-prev",
    },
  };
  return (
    <div className="row">
      <div className="col-lg-7">
        <div className="image_carousel nav_style4 mb30">
          <Swiper navigation={true} modules={[Navigation]} {...params}>
            {dataOne?.map((item, idx) => (
              <SwiperSlide
                key={`gallery-${idx}`}
                className="single_post gradient1 post_type6 border-radious7 xs-mb30"
              >
                <div className="post_img gradient1">
                  <div className="img_wrap">
                    <Link
                      to={createSingleNewsSlug(item?.title)}
                      state={{ data: item }}
                    >
                      <img
                        src={item?.image ?? BUSINESS_DEFFAULT_IMG}
                        alt="thumb"
                      />
                    </Link>
                  </div>
                </div>
                <div className="single_post_text">
                  <p className="meta meta_style4">
                    Business{" "}
                    <span>
                      &nbsp;| &nbsp;{" "}
                      {dayjs(item?.published_at).format("MMMM DD, YYYY")}
                    </span>
                  </p>
                  <h4>
                    <Link
                      to={createSingleNewsSlug(item?.title)}
                      state={{ data: item }}
                    >
                      {item?.title}
                    </Link>
                  </h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="owl-nav">
            <div className="business-car-prev">
              <FontAwesome name="angle-left" />
            </div>
            <div className="business-car-next">
              <FontAwesome name="angle-right" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="padding20 white_bg border-radious5 mb30 shadow7">
          <p className="meta before">Technology</p>
          <div className="space-15" />
          {dataTwo?.map((item, i) => (
            <Fragment key={i}>
              <div className="single_post type10 type16 type22 widgets_small mb15">
                <div className="post_img">
                  <div className="img_wrap">
                    <Link
                      to={createSingleNewsSlug(item?.title)}
                      state={{ data: item }}
                    >
                      <img src={item?.image ?? TECH_DEFFAULT_IMG} alt="thumb" />
                    </Link>
                  </div>
                </div>
                <div className="single_post_text">
                  <h4>
                    <Link
                      to={createSingleNewsSlug(item?.title)}
                      state={{ data: item }}
                    >
                      {item.title}
                    </Link>
                  </h4>
                </div>
              </div>
              {i + 1 < dataTwo?.length ? (
                <Fragment>
                  <div className="space-15" />
                  <div className="border4" />
                  <div className="space-15" />
                </Fragment>
              ) : null}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
