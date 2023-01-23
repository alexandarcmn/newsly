import React, { useState } from "react";
import { Link } from "react-router-dom";
import WidgetTab from "./WidgetTab";
import Slider from "react-slick";
import dayjs from "dayjs";
//
import FontAwesome from "../../../../Components/FontAwesome";
//
import "./postGallery.scss";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`${className} slider_arrow arrow_right slick-arrow`}
    >
      <FontAwesome name="angle-right" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`${className} slider_arrow arrow_left slick-arrow`}
    >
      <FontAwesome name="angle-left" />
    </div>
  );
}

const DEFAULT_IMG =
  "https://img.freepik.com/free-photo/closeup-shot-several-newspapers-stacked-top-each-other_181624-16474.jpg?w=1380&t=st=1674498275~exp=1674498875~hmac=1bd34b8db02e9d56cd9ac66da9262aa19b86a48d2e6f31260118c92c3d049deb";

export default function PostGallery({ className, data }) {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const navSettings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 8,
    swipeToSlide: true,
    focusOnSelect: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className={`post_gallary_area ${className}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-xl-8">
                <div className="slider_demo2">
                  <Slider
                    asNavFor={nav2}
                    arrows={false}
                    fade={true}
                    ref={(slider1) => setNav1(slider1)}
                  >
                    {data?.map((item, i) => (
                      <div key={i} className="single_post post_type6 xs-mb30">
                        <div className="post_img gradient1">
                          <img src={item?.image ?? DEFAULT_IMG} alt="thumb" style={{ width: '100%', maxHeight: '550px', objectFit: 'cover'}}/>
                        </div>
                        <div className="single_post_text">
                          <div className="meta meta_separator1">
                            {/* <Link to="#">{item?.category?.toUpperCase()}</Link> */}
                            <Link to="#">{dayjs(item?.published_at).format("MMMM DD, YYYY")}</Link>
                          </div>
                          <h4>
                            <Link className="play_btn" to="/video_post1">
                              {item?.title || ''}
                            </Link>
                          </h4>
                          <div className="space-10" />
                          <p className="post-p">
                            {item?.description ? item?.description?.substring(0, 100) + "..." : ''}
                          </p>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="slider_demo1">
                  <Slider
                    ref={(slider2) => setNav2(slider2)}
                    asNavFor={nav1}
                    {...navSettings}
                  >
                    {data?.map((item, i) => (
                      <div key={i} className="single_gallary_item">
                        <img src={item?.image ?? DEFAULT_IMG} alt="thumb" style={{ width: '95px', height: '70px', objectFit: 'cover'}} />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
              <div className="col-xl-4">
                <WidgetTab />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
