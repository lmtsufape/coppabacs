import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/components/DetalhamentoSementes/ImagemPerfil/imagemPerfil.module.scss';
import { useMutation } from 'react-query';
import { postArquivo } from '@/api/arquivos/postArquivo';
import { getArquivo } from '@/api/arquivos/getArquivo';

export default function ImagensSementes({ formik }) {
  const [storedImages, setStoredImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        let imageNames = formik.values.imagens || [];

        if (typeof imageNames === 'string') {
          imageNames = imageNames.replace(/[{}]/g, '').split(',');
        }
        if (Array.isArray(imageNames)) {
          const imageUrls = await Promise.all(imageNames.map(async (name) => {
            const url = await getArquivo(name.trim());
            return { name, url };
          }));
          setStoredImages(imageUrls);
        } else {
          console.error("formik.values.imagens não é uma lista");
        }
      } catch (error) {
        console.error("Erro ao buscar imagens", error);
      }
    };

    fetchImages();
  }, [formik.values.imagens]);

  const { status, mutate } = useMutation(
    async (newImages) => {
      return postArquivo(newImages);
    }, {
    onSuccess: (data) => {
      formik.setFieldValue('imagens', data);
    },
    onError: (error) => {
      console.log("Erro ao enviar imagens", error);
      setErrorMessage('Ops! Houve um erro ao enviar as imagens. Tente novamente.');
    },
  });

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <div>
        <div className={styles.container_imagensSementes}>
          {storedImages.length > 0 && (
            <div className={styles.container_imagensSementes_image} onClick={() => handleImageClick(storedImages[0])}>
              <Image src={storedImages[0].url} alt={`Imagem cadastrada 1`} width={200} height={200} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}