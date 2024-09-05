import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Slider from "react-slick";

export default function Categoryslider() {
  async function getAllCategory() {
    return await axios.get("https://ecommerce.routemisr.com/api/v1/categories");
  }

  const { data } = useQuery("Categoryslider", getAllCategory);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7, // عرض 7 شرائح في الشاشات الكبيرة
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // للشاشات التي تكون أقل من 1024 بكسل
        settings: {
          slidesToShow: 4, // عرض 4 شرائح
        },
      },
      {
        breakpoint: 768, // للشاشات التي تكون أقل من 768 بكسل
        settings: {
          slidesToShow: 2, // عرض شريحتين
        },
      },
      {
        breakpoint: 480, // للشاشات التي تكون أقل من 480 بكسل
        settings: {
          slidesToShow: 1, // عرض شريحة واحدة فقط
        },
      },
    ],
  };

  return (
    <section className="p-5">
      <Slider {...settings}>
        {data?.data.data.map(function (item, idx) {
          return (
            <div key={idx} className="p-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[200px] object-cover" // ضبط الصورة بعرض كامل وارتفاع ثابت
              />
              <h2 className="text-green-600 text-xl md:text-2xl font-semibold text-center mt-2">
                {item.name}
              </h2>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}
