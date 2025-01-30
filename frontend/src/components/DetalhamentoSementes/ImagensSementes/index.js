"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/components/DetalhamentoSementes/detalhamentoSementes.module.scss';
import { useMutation } from 'react-query';
import { postArquivo } from '@/api/arquivos/postArquivo';

export default function ImagensSementes({ formik, editar }) {
  const [selectedImages, setSelectedImages] = useState([]);
  const [fileObjects, setFileObjects] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

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
    let newFileObjects = [...formik.values.imagens || []]; // Adiciona ao formik
  
    for (let i = 0; i < files.length; i++) {
      newFileObjects.push(files[i]); 
    }
  
    setSelectedImages([...selectedImages, ...Array.from(files).map(file => URL.createObjectURL(file))]);
    setFileObjects([...fileObjects, ...newFileObjects]);
  
    // Armazena os arquivos no Formik
    formik.setFieldValue("imagens", newFileObjects);
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
  
    console.log("Enviando imagens..."); // Verifica se está sendo chamado indevidamente
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
<h1>Imagens da Semente</h1>
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