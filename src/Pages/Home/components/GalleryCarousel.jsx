import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import dayjs from "dayjs";
//
import { createSingleNewsSlug, gentRandomImageByCategory, handleSingleNewsData } from "../../../Utils/helpers";

export default function GalleryCarousel({ data }) {
  const params = {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  };
  return (
    <div className="dots_style1 mb30 mt30">
      <div className="gallary_carousel">
        <Swiper pagination={true} modules={[Pagination]} {...params}>
          {data?.map((item, i) => (
            <SwiperSlide
              key={i}
              className="single_post post_type6 border-radious7 xs-mb30"
            >
              <div className="post_img gradient1">
                <div className="img_wrap">
                  <Link
                    to={createSingleNewsSlug(item?.title)}
                    state={{ data: item }}
                    onClick={() => handleSingleNewsData(item)}
                  >
                    <img src={item?.image ?? gentRandomImageByCategory(item?.category)} alt="thumb" />
                  </Link>
                </div>
              </div>
              <div className="single_post_text">
                <p className="meta meta_style4">
                  {item?.category?.toUpperCase()}{" "}
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
      </div>
    </div>
  );
}
