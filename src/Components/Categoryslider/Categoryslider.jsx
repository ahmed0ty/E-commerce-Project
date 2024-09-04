import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Slider from "react-slick";

export default function Categoryslider() {

    async function  getAllCategory() {

      return await axios.get("https://ecommerce.routemisr.com/api/v1/categories")
        
    }

    const { data} = useQuery("Categoryslider",getAllCategory)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };
  return (
    <section className="p-5 ">
    <Slider {...settings}>

        {data?.data.data.map(function(item,idx) {
            return <div key={idx}><img src={item.image} alt="" className="w-full h-[200px]"/>
            <h2 className="text-green-600 text-2xl font-semibold text-center ">{item.name}</h2>
            
            </div>
        })}
      
    </Slider>
    </section>
  );
}