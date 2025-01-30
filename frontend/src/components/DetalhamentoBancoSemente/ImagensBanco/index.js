"use client"

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from '../../Mural/criarPublicacao/publicacaoForm.module.scss';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { getArquivo } from '@/api/arquivos/getArquivo';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import './styles.css';
import Image from 'next/image';

export default function ImagensBanco({ formik, editar, setImagensArquivos }) {
  const [imageUrls, setImageUrls] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [fileObjects, setFileObjects] = useState([]);

  const handleImageChange = (event) => {
    const files = event.target.files;
    let newImages = [];
    let newFileObjects = [];
    for (let i = 0; i < files.length; i++) {
      newImages.push(URL.createObjectURL(files[i]));
      newFileObjects.push(files[i]);
    }
    setSelectedImages(selectedImages.concat(newImages));
    setFileObjects(fileObjects.concat(newFileObjects));
    setImagensArquivos(fileObjects.concat(Array.from(files)));
  };

  const handleRemoveImage = (index) => {
    const newSelectedImages = [...selectedImages];
    const newFileObjects = [...fileObjects];

    newSelectedImages.splice(index, 1);
    newFileObjects.splice(index, 1);

    setSelectedImages(newSelectedImages);
    setFileObjects(newFileObjects);
    formik.setFieldValue("imagens", newFileObjects);
  };

  const mockImg = [
    { id: '1', url: "/assets/image2.svg" },
    { id: '2', url: "/assets/image3.svg" },
    { id: '3', url: "/assets/image2.svg" },
    { id: '4', url: "/assets/image3.svg" },
    { id: '5', url: "/assets/image2.svg" },
    { id: '6', url: "/assets/image3.svg" },
    { id: '7', url: "/assets/image2.svg" },
    { id: '8', url: "/assets/image3.svg" },
    { id: '9', url: "/assets/image2.svg" },
    { id: '10', url: "/assets/image3.svg" }
  ];

  useEffect(() => {
    const fetchImages = async () => {
      if (formik.values?.imagens && formik.values.imagens.length > 0) {
        const urls = await Promise.all(formik.values.imagens.map(async (imagem) => {
          const url = await getArquivo(imagem);
          return url;
        }));
        setImageUrls(urls);
      } else {
        setImageUrls(mockImg.map(img => img.url));
      }
    };

    // Verifica se formik.values.imagens existe e tem pelo menos um elemento
    if (formik.values?.imagens) {
      fetchImages();
    }
  }, [formik.values?.imagens]); // Executa o efeito quando formik.values.imagens mudar

  return (
    <>
      {editar === false ? (
        <>
          <label className="label" htmlFor="">Imagens do banco</label>
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
            {imageUrls.map((url, index) => (
              <SwiperSlide key={index}>
                <Image src={url} alt="Visualizar" width={180} height={180} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        <div className="imagens">
          <label className="label" htmlFor="">Imagens do banco</label>
          <div className={style.container__ContainerForm_upload}>
            <label className={style.container__ContainerForm_upload_label}>
              <Image src="/assets/IconUpload.svg" alt="Upload" width={60} height={60} />
              <span>Envio de imagens</span>
              <h6 className={style.formatos_suportados}>PNG, JPG</h6>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
              />
            </label>
          </div>
          {selectedImages.length > 0 && (
            <div className={style.container__ContainerForm_upload_preview}>
              {selectedImages.map((image, index) => (
                <div key={index} className={style.image_container}>
                  <Image src={image} alt={`Pré-visualização da imagem ${index + 1}`} width={200} height={200} />
                  <button type="button" className={style.remove_button} onClick={() => handleRemoveImage(index)}>
                    <Image src="/assets/iconLixeiraBranca.png" alt="Remover" width={24} height={24} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
