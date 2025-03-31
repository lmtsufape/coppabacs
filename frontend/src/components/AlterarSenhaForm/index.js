"use client";

import { useMutation } from "react-query";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import styles from "@/components/AlterarSenhaForm/alterarSenha.module.scss";
import HeaderNavegacao from "../HeaderNavegacao";
import api from "@/api/http-common";
import { patchNewPassword } from "@/api/alterarSenha/patchNewPassword";

const AlterarSenhaForm = ({ diretorioAnterior, diretorioAtual, hrefAnterior }) => {
    const router = useRouter();

    const [token, setToken] = useState(null);

    const initialValues = { 
        senha: "",
        novaSenha: "", 
        confirmarSenha: "" }

    const validateSchema = Yup.object().shape({
            senha: Yup.string()
                .min(8, "A senha deve ter pelo menos 8 caracteres")
                .required("A senha atual é obrigatória"),
            novaSenha: Yup.string()
                .min(8, "A senha deve ter pelo menos 8 caracteres")
                .required("Nova senha é obrigatória"),
            confirmarSenha: Yup.string()
                .oneOf([Yup.ref("novaSenha"), null], "As senhas devem ser iguais")
                .required("Confirmação de senha é obrigatória"),
        });

    const patchNewPasswordMutation = useMutation (async (values) => {
        const response = await patchNewPassword(values.senha, values.novaSenha);
        return response.data;
    })



    


    return (
        <div id="header" className={styles.container}>
            <HeaderNavegacao
                diretorioAnterior={diretorioAnterior}
                diretorioAtual={diretorioAtual}
                hrefAnterior={hrefAnterior}
            />
            <div className={styles.containerForm}>
                <div className={styles.esqueciSenha}>
                    <h1 className={styles.title}>
                     Altere sua Senha
                    </h1>
                    <h2
                        className={styles.esqueciSenha__textoEsqueci}>
                        Para redefinir a sua senha, informe a senha atual cadastrada na sua conta e a nova senha.
                    </h2>
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validateSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        patchNewPasswordMutation.mutate(values, {
                            onSuccess: () => {
                                alert("Senha alterada com sucesso!");
                                router.push("/");
                            },
                            onError: (error) => {
                                alert("Erro ao alterar a senha: " + error.message);
                            },
                        });
                        setSubmitting(false);
                    }}
                >
                    {(formik) => (
                        <Form className={styles.container__ContainerForm_form}>
                                <>
                                <label>Senha Atual <span>*</span></label>
                                    <input
                                        className={styles.sidedForm_input}
                                        id="senha"
                                        name="senha"
                                        type="password"
                                        placeholder="Digite sua senha atual"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.senha}
                                        required
                                    />
                                    {formik.touched.senha && formik.errors.senha ? (
                                        <span className={styles.error}>{formik.errors.senha}</span>
                                    ) : null}
                                    <label>Nova Senha <span>*</span></label>
                                    <input
                                        className={styles.sidedForm_input}
                                        id="novaSenha"
                                        name="novaSenha"
                                        type="password"
                                        placeholder="Digite sua nova senha"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.novaSenha}
                                        required
                                    />
                                    {formik.touched.novaSenha && formik.errors.novaSenha ? (
                                        <span className={styles.error}>{formik.errors.novaSenha}</span>
                                    ) : null}

                                    <label>Confirme a Senha <span>*</span></label>
                                    <input
                                        className={styles.sidedForm_input}
                                        id="confirmarSenha"
                                        name="confirmarSenha"
                                        type="password"
                                        placeholder="Confirme sua nova senha"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.confirmarSenha}
                                        required
                                    />
                                    {formik.touched.confirmarSenha && formik.errors.confirmarSenha ? (
                                        <span className={styles.error}>
                                            {formik.errors.confirmarSenha}
                                        </span>
                                    ) : null}
                                </>
                            <div className={styles.buttons}>
                                <button type="submit">
                                   <p>Alterar Senha</p>
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default AlterarSenhaForm;
