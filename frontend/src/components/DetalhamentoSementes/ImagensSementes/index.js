import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/components/DetalhamentoSementes/detalhamentoSementes.module.scss';
import { useMutation } from 'react-query';
import { postArquivo } from '@/api/arquivos/postArquivo';
import { getArquivo } from '@/api/arquivos/getArquivo';

export default function ImagensSementes({ formik, editar }) {
  const [selectedImages, setSelectedImages] = useState([]);
  const [fileObjects, setFileObjects] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [storedImages, setStoredImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        let imageNames = formik.values.imagens || [];
        
        // Verifica se formik.values.imagens é uma string e converte para lista
        if (typeof imageNames === 'string') {
          imageNames = imageNames.replace(/[{}]/g, '').split(',');
        }
        if (Array.isArray(imageNames)) {
          const imageUrls = await Promise.all(imageNames.map(async (name) => {
            const url = await getArquivo(name.trim());
            return url;
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

    console.log("Enviando imagens...");
    try {
      mutate(fileObjects);
    } catch (error) {
      console.error("Error uploading images", error);
      setErrorMessage("Error uploading images");
    }
  };

  return (
    <>
      <div className={styles.container__header_title}>
        <h1>Imagens da Semente</h1>
      </div>
      <div>
        {editar === false ? (
          <>
            <div>
              {storedImages.map((image, index) => (
                <div key={index} className={styles.image_container}>
                  <Image src={image} alt={`Imagem cadastrada ${index + 1}`} width={200} height={200} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div>
            <label className={styles.container__ContainerForm_upload_label}>
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
              <div className={styles.container__ContainerForm_upload_preview}>
                {selectedImages.map((image, index) => (
                  <div key={index} className={styles.image_container}>
                    <Image src={image} alt={`Pré-visualização da imagem ${index + 1}`} width={200} height={200} />
                    <button type="button" className={styles.remove_button} onClick={() => handleRemoveImage(index, formik.setFieldValue)}>
                      <Image src="/assets/iconLixeiraBranca.png" alt="Remover" width={24} height={24} />
                    </button>
                  </div>
                ))}
              </div>
            )}
            <button type="button" onClick={handleSubmit}>Enviar Imagens</button>
            {errorMessage && <div className={styles.error_message}>{errorMessage}</div>}
          </div>
        )}
      </div>
    </>
  );
}