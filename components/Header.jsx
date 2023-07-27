'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
// import { defaults } from 'autoprefixer';

export const Header = () => {
  const [datas, setDatas] = useState([]);

  const settings = {
      dots: true,
      infinite: true,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
  };

  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await axios.get("http://localhost:1337/api/banners?populate=*");
      setDatas(response.data.data);
      console.log(response.data.data);
    };

    fetchData();
  }, []);

  // console.log(datas);
    
  return (
    <div className='header'>
      <div className='overflow-hidden max-h-[175px] lg:max-h-[575px] container mx-auto max-w-7xl'>
        <Slider {...settings}>
          {
            datas?.map((item) =>(
              <img key={item.id} src={`http://localhost:1337${item.attributes.image.data.attributes.url}`} alt='banner' />
            ))
          }
        </Slider> 
      </div>
    </div>
  )
}


export default Header