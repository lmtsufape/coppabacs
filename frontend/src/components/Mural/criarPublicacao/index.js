"use client"
import React, { useState } from 'react';
import style from './publicacaoForm.module.scss';
import Image from 'next/image';
import HeaderNavegacao from '@/components/HeaderNavegacao';
import Link from 'next/link';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useMutation } from 'react-query';
import { postPublicacao } from '@/api/mural/postPublicacao';
import { postArquivo } from '@/api/arquivos/postArquivo';

export default function CriarPostagem({ hrefAnterior, diretorioAtual, diretorioAnterior }) {
    const [selectedImages, setSelectedImages] = useState([]);
    const [fileObjects, setFileObjects] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const initialValues = {
        texto: "",
        titulo: "",
        imagem: []
    }

    const validateSchema = Yup.object().shape({
        titulo: Yup.string()
            .min(5, "O título deve ter no mínimo 5 caracteres")
            .required('Obrigatório'),
        texto: Yup.string()
            .required('Obrigatório'),
   
        imagens: Yup.array().of(Yup.mixed().required('Obrigatório')).min(1, 'Obrigatório')
    });

    const { status, mutate } = useMutation(
        async (newPost) => {
            return postPublicacao(newPost);
        }, {
        onSuccess: () => {
            window.location.href= '/mural';

        },
        onError: (error) => {
            console.log("Erro ao cadastrar nova postagem", error);
            let errorMessage = 'Ops! Houve um erro ao cadastrar a postagem. Verifique os campos e tente novamente.';
            setErrorMessage(errorMessage);
        },
    });

    const handleImageChange = (event, setFieldValue) => {
        const files = event.target.files;
        let newImages = [];
        let newFileObjects = [];
        for (let i = 0; i < files.length; i++) {
            newImages.push(URL.createObjectURL(files[i]));
            newFileObjects.push(files[i]);
        }
        setFieldValue("imagens", fileObjects.concat(Array.from(files)));
        setSelectedImages(selectedImages.concat(newImages));
        setFileObjects(fileObjects.concat(newFileObjects));
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

    const handleSubmit = async (values, { setSubmitting }) => {
        setSubmitting(true);
        try {
            console.log("Uploading images...");
            const imageUrls = await postArquivo(values.imagens);
            console.log("Images uploaded, URLs:", imageUrls);

            const newPost = {
                titulo: values.titulo,
                texto: values.texto,
                imagem: imageUrls
            };

            console.log("Submitting post:", newPost);
            mutate(newPost);
        } catch (error) {
            console.error("Error uploading images or submitting post", error);
            setErrorMessage("Error uploading images or submitting post");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div id="header" className={style.container}>
            <HeaderNavegacao
                diretorioAnterior={diretorioAnterior}
                diretorioAtual={diretorioAtual}
                hrefAnterior={hrefAnterior}
            />

            <div className={style.container__ContainerForm}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validateSchema}
                    onSubmit={handleSubmit}
                >
                    {({ setFieldValue }) => (
                        <Form className={style.container__ContainerForm_form}>
                            <div className={style.container__ContainerForm_form__halfContainer}>
                                <div className={style.container__ContainerForm_form__halfContainer_input}>
                                    <label htmlFor="titulo">Título</label>
                                    <Field name="titulo" type="text" className={style.container__ContainerForm_form_input} />
                                    <ErrorMessage name="titulo" component="div" className={style.error_message} />
                                </div>
                            </div>

                            <div className={style.form_group}>
                                <label htmlFor="texto">Texto da Postagem</label>
                                <Field name="texto" as="textarea" rows="10" className={style.container__ContainerForm_form_input} />
                                <ErrorMessage name="texto" component="div" className={style.error_message} />
                            </div>

                            <div className={style.container__ContainerForm_upload}>
                                <label className={style.container__ContainerForm_upload_label}>
                                    <Image src="/assets/IconUpload.svg" alt="Upload" width={60} height={60} />
                                    <span>Envio de imagens</span>
                                    <h6 className={style.formatos_suportados}>PNG, JPG</h6>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        onChange={(event) => handleImageChange(event, setFieldValue)}
                                    />
                                </label>
                                <ErrorMessage name="imagens" component="div" className={style.error_message} />
                            </div>

                            {selectedImages.length > 0 && (
                                <div className={style.container__ContainerForm_upload_preview}>
                                    {selectedImages.map((image, index) => (
                                        <div key={index} className={style.image_container}>
                                            <Image src={image} alt={`Pré-visualização da imagem ${index + 1}`} width={200} height={200} />
                                            <button type="button" className={style.remove_button} onClick={() => handleRemoveImage(index, setFieldValue)}>
                                                <Image src="/assets/iconLixeiraBranca.png" alt="Remover" width={24} height={24} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className={style.container__ContainerForm_buttons}>
                                <button type="submit" className={`${style.container__ContainerForm_buttons_linkWhite} ${style.button}`}>
                                    <h1>Finalizar</h1>
                                </button>
                            </div>
                            {errorMessage && <div className={style.error_message}>{errorMessage}</div>}
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
