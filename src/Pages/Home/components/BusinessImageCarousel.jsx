import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import dayjs from "dayjs";
//
import {
  createSingleNewsSlug,
  gentRandomImageByCategory,
  handleSingleNewsData,
  openInNewTab,
} from "../../../Utils/helpers";
//
import FontAwesome from "../../../Components/FontAwesome";

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
                      onClick={() => handleSingleNewsData(item)}
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
          <Link
            to={`/categories/${dataTwo[0]?.category}`}
            // onClick={() =>
            //   openInNewTab(`/categories/${dataTwo[0]?.category}`, false)
            // }
            className="showmore mt30"
          >
            Show more
          </Link>
        </div>
      </div>
    </div>
  );
}
