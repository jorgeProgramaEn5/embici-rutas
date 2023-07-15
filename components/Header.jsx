'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { defaults } from 'autoprefixer';

export const Header = () => {
  // const [data, setData] = useState([]);

  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
  };

  // useEffect(()=>{
  //   const fetchData = async ()=>{
  //     const data = await axios.get("http://localhost:1337/api/banners?populate=*");
  //     let response = data.data.data;
  //     console.log(response);
  //   };

  //   fetchData();
  // }, []);

    

  
    
  return (
    <div className='header'>
        <div className='overflow-hidden max-h-[575px] container mx-auto max-w-7xl'>
            {/* <Slider {...settings}> */}
              {/* {
                data.map(item =>{
                  // <img src={`http://localhost:1337${item.attributes.image.data.attributes.url}`} alt='banner' />
                  <h1>{item.data.first_name}</h1>
                })
              } */}
            {/* </Slider> */}
        </div>
      </div>
  )
}


export async function getServerSideProps() {

  const response = await fetch("https://reqres.in/api/users?page=2");
  const data = await response.json();


  return {
    props: {

    }
  }
}

// export default Header