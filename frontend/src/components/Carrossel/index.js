
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
                <SwiperSlide className={styles.cards}>
                    <div >
                        <img className={styles.cards__img} src="/assets/carrossel1.png" alt="carrossel1" width={900} height={900} />
                        <h1 className={styles.cards__noticias}>Notícias</h1>
                        <h1 className={styles.cards__titulo}>Lorem ipsum dolor sit amet consectetur. Pretium lobortis sed lacus id tincidunt interdum rhoncus sed.Lorem ipsum dolor sit amet consectetur. Pretium lobortis sed lacus id tincidunt interdum rhoncus sed. </h1>
                    </div>
                </SwiperSlide >
                <SwiperSlide className={styles.cards}>
                    <img className={styles.cards__img} src="/assets/carrossel2.png" alt="carrossel1" width={900} height={900} />
                    <h1 className={styles.cards__noticias}>Notícias</h1>
                    <h1 className={styles.cards__titulo}>Lorem ipsum dolor sit amet consectetur. Pretium lobortis sed lacus id tincidunt interdum rhoncus sed.Lorem ipsum dolor sit amet consectetur. Pretium lobortis sed lacus id tincidunt interdum rhoncus sed. </h1>
                </SwiperSlide>
                <SwiperSlide className={styles.cards}>
                    <img className={styles.cards__img} src="/assets/carrossel3.png" alt="carrossel1" width={900} height={900} />
                    <h1 className={styles.cards__noticias}>Notícias</h1>
                    <h1 className={styles.cards__titulo}>Lorem ipsum dolor sit amet consectetur. Pretium lobortis sed lacus id tincidunt interdum rhoncus sed.Lorem ipsum dolor sit amet consectetur. Pretium lobortis sed lacus id tincidunt interdum rhoncus sed. </h1>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
