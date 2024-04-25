"use client"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import './styles.css';
import Image from 'next/image';

export default function ImagensSementes() {

  const mockImg = [
    {
      id: '1',
      url: "/assets/image2.svg"
    },
    {
      id: '2',
      url: "/assets/image3.svg"
    },
    {
      id: '3',
      url: "/assets/image2.svg"
    },
    {
      id: '4',
      url: "/assets/image3.svg"
    },
    {
      id: '5',
      url: "/assets/image2.svg"
    },
    {
      id: '6',
      url: "/assets/image3.svg"
    },
    {
      id: '7',
      url: "/assets/image2.svg"
    },
    {
      id: '8',
      url: "/assets/image3.svg"
    },
    {
      id: '9',
      url: "/assets/image2.svg"
    },
    {
      id: '10',
      url: "/assets/image3.svg"
    },



  ]
  return (

    <>
      <label htmlFor="">Imagens da Semente</label>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {mockImg.map((imagem, index) => {
          return (
            <div key={index}>
              <SwiperSlide>
                <div className="deletarImg">
                  <button onClick={()=>{

                  }}>
                    Deletar
                    <Image src="/assets/iconLixeira.svg" alt="Visualizar" width={18} height={18} />
                  </button>
                </div>
                <Image src={imagem.url} alt="Visualizar" width={18} height={18} />
              </SwiperSlide>
            </div>
          )
        })}

      </Swiper>
    </>

  )
}