
import Image from 'next/image';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './carrossel.module.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {

    const slides = [
        {
          imgSrc: "/assets/carrossel1.png",
          altText: "carrossel1",
          title: "Lorem ipsum dolor sit amet consectetur. Pretium lobortis sed lacus id tincidunt interdum rhoncus sed.Lorem ipsum dolor sit amet consectetur. Pretium lobortis sed lacus id tincidunt interdum rhoncus sed."
        },
        {
          imgSrc: "/assets/carrossel2.png",
          altText: "carrossel2",
          title: "Lorem ipsum dolor sit amet consectetur. Pretium lobortis sed lacus id tincidunt interdum rhoncus sed.Lorem ipsum dolor sit amet consectetur. Pretium lobortis sed lacus id tincidunt interdum rhoncus sed."
        },
        {
          imgSrc: "/assets/carrossel3.png",
          altText: "carrossel3",
          title: "Lorem ipsum dolor sit amet consectetur. Pretium lobortis sed lacus id tincidunt interdum rhoncus sed.Lorem ipsum dolor sit amet consectetur. Pretium lobortis sed lacus id tincidunt interdum rhoncus sed."
        },
        
      ];

    return (
        <div className={styles.mySwiper}>
            <Swiper
                spaceBetween={20}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {slides.map((slide, index) => (
      <SwiperSlide key={index} className={styles.cards}>
        <img className={styles.cards__img} src={slide.imgSrc} alt={slide.altText} width={900} height={900} />
        <h1 className={styles.cards__noticias}>Notícias</h1>
        <h1 className={styles.cards__titulo}>{slide.title}</h1>
      </SwiperSlide>
    ))}
            </Swiper>
        </div>
    );
}
