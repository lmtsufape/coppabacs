import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/components/DetalhamentoSementes/ImagensSementes/imagensSementes.module.scss';
import { useMutation } from 'react-query';
import { postArquivo } from '@/api/arquivos/postArquivo';
import { getArquivo } from '@/api/arquivos/getArquivo';
import { deleteArquivo } from '@/api/arquivos/deleteArquivo';

export default function ImagensSementes({ formik, editar }) {
  const [selectedImages, setSelectedImages] = useState([]);
  const [fileObjects, setFileObjects] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [storedImages, setStoredImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const handleImageChange = (event) => {
    const files = event.target.files;
    let newFileObjects = [];

    for (let i = 0; i < files.length; i++) {
      newFileObjects.push(files[i]);
    }

    setSelectedImages(prevImages => [
      ...prevImages,
      ...Array.from(files).map(file => URL.createObjectURL(file))
    ]);
    setFileObjects(prevFileObjects => [
      ...prevFileObjects,
      ...newFileObjects
    ]);

    formik.setFieldValue("imagens", [
      ...fileObjects,
      ...newFileObjects
    ]);
  };

  const handleRemoveImage = (index, setFieldValue) => {
    const newSelectedImages = [...selectedImages];
    const newFileObjects = [...fileObjects];

    newSelectedImages.splice(index, 1);
    newFileObjects.splice(index, 1);

    setSelectedImages(newSelectedImages);
    setFileObjects(newFileObjects);
    setFieldValue("imagens", newFileObjects);
  };

  const handleSubmit = async () => {
    if (fileObjects.length === 0) {
      console.log("Nenhuma imagem selecionada.");
      return;
    }

    alert("Imagem enviada com sucesso! Agora clique em Salvar para finalizar o cadastro da semente.");

    console.log("Enviando imagens...");
    try {
      mutate(fileObjects);
    } catch (error) {
      console.error("Error uploading images", error);
      setErrorMessage("Error uploading images");
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const { mutate: deleteImage } = useMutation(
    async (filename) => {
      return deleteArquivo(filename);
    },
    {
      onSuccess: (data, variables) => {
        setStoredImages((prevImages) => prevImages.filter((image) => image.name !== variables));
        formik.setFieldValue('imagens', formik.values.imagens.filter((name) => name !== variables));
      },
      onError: (error) => {
        console.error("Erro ao deletar imagem", error);
        setErrorMessage('Ops! Houve um erro ao deletar a imagem. Tente novamente.');
      },
    }
  );

  const handleDeleteImage = (name) => {
    deleteImage(name);
  };

  return (
    <>
      <div className={styles.container_header_title}>
        <h1>Imagens da Semente</h1>
      </div>
      <div>
        {editar === false ? (
          <>
            <div className={styles.container_imagensSementes}>
              {storedImages.map((image, index) => (
                <div key={index} className={styles.container_imagensSementes_image} onClick={() => handleImageClick(image)}>
                  <Image src={image.url} alt={`Imagem cadastrada ${index + 1}`} width={200} height={200} />
                  <button type="button" onClick={(event) => { event.stopPropagation(); handleDeleteImage(image.name); }} className={styles.container_upload_preview_image_container_remove_button}>
                   <Image src="/assets/iconLixeiraBranca.png" alt="Remover" width={24} height={24} />
                  </button>
                </div>
              ))}
            </div>
            {selectedImage && (
              <div className={styles.container_imagensSementes_modal} onClick={handleCloseModal}>
                <div className={styles.container_imagensSementes_modal_content}>
                  <Image src={selectedImage.url} alt="Imagem selecionada" layout="fill" objectFit="contain" />
                </div>
              </div>
            )}
          </>
        ) : (
          <div>
            <label className={styles.container_upload}>
              <Image src="/assets/IconUpload.svg" alt="Upload" width={60} height={60} />
              <span>Envio de imagens</span>
              <h6 className={styles.formatos_suportados}>PNG, JPG</h6>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}

              />
            </label>
            {selectedImages.length > 0 && (
              <div className={styles.container_upload_preview}>
                {selectedImages.map((image, index) => (
                  <div key={index} className={styles.container_upload_preview_image_container}>
                    <Image src={image} alt={`Pré-visualização da imagem ${index + 1}`} width={200} height={200} />
                    <button type="button" className={styles.container_upload_preview_image_container_remove_button} onClick={() => handleRemoveImage(index, formik.setFieldValue)}>
                      <Image src="/assets/iconLixeiraBranca.png" alt="Remover" width={24} height={24} />
                    </button>
                  </div>
                ))}
              </div>
            )}
            <button className={styles.container_upload_button} type="button" onClick={handleSubmit}>Enviar imagens</button>
            {errorMessage && <div className={styles.error_message}>{errorMessage}</div>}
          </div>
        )}
      </div>
    </>
  );
}