import React from "react";
import Slider from "react-slick";
import slider1 from "../../assets/images/slider-image-1.jpeg";
import slider2 from "../../assets/images/slider-image-2.jpeg";
import slider3 from "../../assets/images/slider-image-3.jpeg";
import img1 from "../../assets/images/blog-img-1.jpeg";
import img2 from "../../assets/images/blog-img-2.jpeg";

export default function Homeslider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <section className="pb-5 px-4">
      <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center">
        <div className="w-full lg:w-2/3 mb-4 lg:mb-0">
          <Slider {...settings}>
            <div>
              <img
                src={slider1}
                alt="Slider Image 1"
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div>
              <img
                src={slider2}
                alt="Slider Image 2"
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div>
              <img
                src={slider3}
                alt="Slider Image 3"
                className="w-full h-[300px] object-cover"
              />
            </div>
          </Slider>
        </div>

        <div className="w-full lg:w-1/3">
          <div className="mb-2">
            <img
              src={img1}
              alt="Blog Image 1"
              className="w-full h-[150px] object-cover"
            />
          </div>
          <div>
            <img
              src={img2}
              alt="Blog Image 2"
              className="w-full h-[150px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
