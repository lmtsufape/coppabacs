"use client";

import { useMutation } from "react-query";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import styles from "@/components/RecuperarSenhaForm/recuperarSenha.module.scss";
import { cpfMask } from "@/utils/Masks/cpfMask";
import api from "@/api/http-common";
import HeaderNavegacao from "../HeaderNavegacao";

const RecuperarSenhaForm = ({ diretorioAnterior, diretorioAtual, hrefAnterior }) => {
    const router = useRouter();

    const [token, setToken] = useState(null);

    const initialValues = token
        ? { senha: "", confirmarSenha: "" }
        : { cpf: "", pergunta:{pergunta: "", resposta: "" }};

    const validateSchema = token
        ? Yup.object().shape({
            senha: Yup.string()
                .min(8, "A senha deve ter pelo menos 8 caracteres")
                .required("Nova senha é obrigatória"),
            confirmarSenha: Yup.string()
                .oneOf([Yup.ref("senha"), null], "As senhas devem ser iguais")
                .required("Confirmação de senha é obrigatória"),
        })
        : Yup.object().shape({
            cpf: Yup.string().required("CPF é obrigatório"),
            pergunta: Yup.string().required("Pergunta de segurança é obrigatória"),
            resposta: Yup.string().required("Resposta é obrigatória"),
        });

    const validateUserMutation = useMutation(
        async (values) => {
            const { cpf, pergunta, resposta } = values;
            const response = await api.post(`/forgot/${cpf}`, {
                pergunta,
                resposta,
            });
            return response;
        },
        {
            onSuccess: (response) => {
                const tokenRecebido = response.data;
                setToken(tokenRecebido);
            },

            onError: (error) => {
                console.error("Erro ao validar pergunta/resposta:", error);
                alert("Validação falhou. Verifique suas informações.");
            },
        }
    );




    const recoverPasswordMutation = useMutation(
        async (values) => {
            const { senha } = values;
            if (token && typeof token === 'string') {
                const response = await api.post(`/recoverpassword/${token}`, { senha });
            } else {
                console.error("Token inválido:", token);
            }
        },
        {
            onSuccess: () => {
                alert("Senha alterada com sucesso!");
                router.push("/login");
            },
            onError: (error) => {
                console.error("Erro ao alterar a senha:", error);
                alert("Não foi possível alterar a senha. Tente novamente.");
            },
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
                    <h1 className={styles.title}>
                        {token ? "Alterar Senha" : "Recuperar Senha"}
                    </h1>
                    <h2
                        className={styles.esqueciSenha__textoEsqueci}>
                        {token ? "Agora, digite a sua nova senha." : "Para redefinir a sua senha, informe o CPF cadastrado na sua conta e responda a pergunta corretamente."}
                    </h2>
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validateSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        if (token) {
                            recoverPasswordMutation.mutate(values);
                        } else {
                            validateUserMutation.mutate(values);
                        }
                        setSubmitting(false);
                    }}
                >
                    {(formik) => (
                        <Form className={styles.container__ContainerForm_form}>
                            {!token ? (
                                <>
                                    <label>CPF <span>*</span></label>
                                    <input
                                        className={styles.sidedForm_input}
                                        id="cpf"
                                        name="cpf"
                                        placeholder="Insira seu CPF"
                                        onChange={(e) => {
                                            formik.setFieldValue("cpf", cpfMask(e.target.value));
                                        }}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.cpf}
                                        required
                                    />
                                    {formik.touched.cpf && formik.errors.cpf ? (
                                        <span className={styles.error}>{formik.errors.cpf}</span>
                                    ) : null}

                                    <label>Pergunta de Segurança <span>*</span></label>
                                    <select
                                        className={styles.sidedForm_select}
                                        id="pergunta"
                                        name="pergunta"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.pergunta.pergunta}
                                        required
                                    >
                                        <option value="">Selecione...</option>
                                        <option value="PERGUNTA1">Qual era o nome do seu primeiro animal de estimação?</option>
                                        <option value="PERGUNTA2">Em que cidade você nasceu?</option>
                                        <option value="PERGUNTA3">Qual é o nome do seu melhor amigo de infância?</option>
                                        <option value="PERGUNTA4">Qual foi o seu primeiro emprego?</option>
                                        <option value="PERGUNTA5">Qual é o nome do colégio onde você estudou no ensino fundamental?</option>
                                        <option value="PERGUNTA6">Qual é o nome do meio da sua mãe?</option>
                                    </select>
                                    {formik.touched.pergunta && formik.errors.pergunta ? (
                                        <span className={styles.error}>{formik.errors.pergunta}</span>
                                    ) : null}

                                    <label>Resposta <span>*</span></label>
                                    <input
                                        className={styles.sidedForm_input}
                                        id="resposta"
                                        name="resposta"
                                        placeholder="Digite sua resposta"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.pergunta.resposta}
                                        required
                                    />
                                    {formik.touched.resposta && formik.errors.resposta ? (
                                        <span className={styles.error}>{formik.errors.resposta}</span>
                                    ) : null}
                                </>
                            ) : (
                                <>
                                    <label>Nova Senha <span>*</span></label>
                                    <input
                                        className={styles.sidedForm_input}
                                        id="senha"
                                        name="senha"
                                        type="password"
                                        placeholder="Digite sua nova senha"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.senha}
                                        required
                                    />
                                    {formik.touched.senha && formik.errors.senha ? (
                                        <span className={styles.error}>{formik.errors.senha}</span>
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
                            )}
                            <div className={styles.buttons}>
                                <button type="submit">
                                    {token ? "Alterar Senha" : "Validar"}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default RecuperarSenhaForm;
