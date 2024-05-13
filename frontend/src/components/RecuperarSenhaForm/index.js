"use client";

import { useMutation } from "react-query";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from 'yup';
import HeaderNavegacao from "../HeaderNavegacao";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "@/components/RecuperarSenhaForm/recuperarSenha.module.scss";

const RecuperarSenhaForm = ({ diretorioAnterior, diretorioAtual, hrefAnterior }) => {
    const router = useRouter();

    const initialValues = {
        email: "",
    }

    const validateSchema = Yup.object().shape({
        email: Yup.string()
            .email("Insira um e-mail válido")
            .required('Required'),
    });

    const {status, mutate} = useMutation(
        async (values) => {
            return postAgricultor(values);
        },{
            onSucess: () => {
                window.location.href= '/login'
            },
            onError: (error) => {
                console.log('Erro ao recuperar senha: ', error);
            }
        }
    );


    return (
        <div id="header" className={styles.container}>
            <HeaderNavegacao
                diretorioAnterior={diretorioAnterior}
                diretorioAtual={diretorioAtual}
                hrefAnterior={hrefAnterior}
            />

            <div className={styles.containerForm}>
            <div className={styles.esqueciSenha}>
                <h1 className={styles.esqueciSenha__titleGreen}>Esqueci minha senha </h1>
                <h2 className={styles.esqueciSenha__textoEsqueci}>Para redefinir a sua senha, informe o e-mail cadastrado na sua conta e lhe enviaremos um link com as instruções.</h2>

            </div>
                <Formik
                    initialValues={initialValues}

                    validationSchema={validateSchema}

                    onSubmit={(values, {setSubmitting}) => {
                        mutate(values);
                        setSubmitting(false);
                    }}
                >
                    
                    {(formik) => {
                        return (
                            
                            <Form className={styles.container__ContainerForm_form}>
                                <label>E-mail <span>*</span></label>
                                <input
                                    className={styles.sidedForm_input}
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Insira seu e-mail"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    required
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <span className={styles.form__error}>{formik.errors.email}</span>
                                ) : null}
                                <div className={styles.buttons}>
                                <button
                                    type="submit"
                                    >
                                    Confirmar
                                </button>
                                </div>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    );
}

export default RecuperarSenhaForm;