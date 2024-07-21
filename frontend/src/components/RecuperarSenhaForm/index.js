"use client";

import { useMutation } from "react-query";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from 'yup';
import HeaderNavegacao from "../HeaderNavegacao";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "@/components/RecuperarSenhaForm/recuperarSenha.module.scss";
import { cpfMask } from "@/utils/Masks/cpfMask";

const RecuperarSenhaForm = ({ diretorioAnterior, diretorioAtual, hrefAnterior }) => {
    const router = useRouter();

    const initialValues = {
        cpf: "",
    }

    const validateSchema = Yup.object().shape({
        cpf: Yup.string()
            .required('Obrigatório'),
    });

    const { status, mutate } = useMutation(
        async (values) => {
            return postAgricultor(values);
        }, {
        onSucess: () => {
            window.location.href = '/login'
        },
        onError: (error) => {
            console.log('Erro ao recuperar cpf: ', error);
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
                    <h2 className={styles.esqueciSenha__textoEsqueci}>Para redefinir a sua senha, informe o CPF cadastrado na sua conta e responda a pergunta corretamente.</h2>

                </div>
                <Formik
                    initialValues={initialValues}

                    validationSchema={validateSchema}

                    onSubmit={(values, { setSubmitting }) => {
                        mutate(values);
                        setSubmitting(false);
                    }}
                >

                    {(formik) => {
                        return (

                            <Form className={styles.container__ContainerForm_form}>
                                <label>CPF <span>*</span></label>
                                <input
                                    className={styles.sidedForm_input}
                                    id="cpf"
                                    name="cpf"
                                    placeholder="Insira seu cpf"
                                    onChange={(e) => {
                                        formik.setFieldValue("cpf", cpfMask(e.target.value));
                                    }}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.cpf}
                                    required
                                />
                                {formik.touched.cpf && formik.errors.cpf ? (
                                    <span className={styles.form__error}>{formik.errors.cpf}</span>
                                ) : null}

                                <label htmlFor="pergunta">Perguntas<span>*</span></label>
                                <select
                                    className={styles.sidedForm_select}
                                    id="pergunta"
                                    name="pergunta"
                                    placeholder=""
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.pergunta}
                                    required
                                >
                                    
                                    <option value="">Selecione...</option>
                                    <option value="pergunta1">Pergunta 1</option>
                                    <option value="pergunta2">Pergunta 2</option>
                                    <option value="pergunta3">Pergunta 3</option>
                                    <option value="pergunta4">Pergunta 4</option>
                                    {/*{bancos.map((banco, index) => (
            <option key={index} value={banco.id}>{banco.nome}</option>
          ))} */}
                                </select>
                                {formik.touched.pergunta && formik.errors.pergunta ? (
                                    <span className={styles.form__error}>{formik.errors.pergunta}</span>
                                ) : null}

                                <label>Resposta <span>*</span></label>
                                <input
                                    className={styles.sidedForm_input}
                                    id="resposta"
                                    name="resposta"
                                    placeholder="Insira sua resposta"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.resposta}
                                    required
                                />
                                {formik.touched.resposta && formik.errors.resposta ? (
                                    <span className={styles.form__error}>{formik.errors.resposta}</span>
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