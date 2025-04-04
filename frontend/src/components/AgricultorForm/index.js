"use client";

import { useMutation } from "react-query";
import { postAgricultor } from "@/api/usuarios/agricultor/postAgricultor";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from 'yup';
import style from "./agricultorForm.module.scss";
import HeaderNavegacao from "../HeaderNavegacao";
import DadosForm from "./DadosUsuario/index";
import DadosEndereco from "./DadosEndereco";
import DadosSementes from "./DadosSementes";
import Link from "next/link";
import Footer from "../Footer";

const UsuarioForm = ({ diretorioAnterior, diretorioAtual, hrefAnterior }) => {
  const [apiErrors, setApiErrors] = useState({});

  const initialValues = {
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    nomePopular: "",
    estadoCivil: "",
    pergunta: {
      pergunta: "",
      resposta: ""
    },
    endereco: {
      cep: "",
      cidade: "",
      estado: "",
      bairro: "",
      logradouro: "",
      numero: "",
      complemento: "",
      referencia: ""
    },
    cpf: "",
    dataNascimento: "",
    contato: "",
    sexo: "",
    conjuge: {
      nome: "",
      sexo: "",
    },
    bancoId: "",
    sementes: [],
  };

  const fieldNames = {
    nome: "Nome",
    nomePopular: "Nome Popular",
    cpf: "CPF",
    senha: "Senha",
    confirmarSenha: "Confirmar Senha",
    contato: "Contato",
    dataNascimento: "Data de Nascimento",
    sexo: "Sexo",
    "pergunta.pergunta": "Pergunta de Segurança",
    "pergunta.resposta": "Resposta de Segurança",
    "endereco.cep": "CEP",
    "endereco.cidade": "Cidade",
    "endereco.estado": "Estado",
    "endereco.bairro": "Bairro",
    "endereco.logradouro": "Logradouro",
    "endereco.numero": "Número",
    "endereco.complemento": "Complemento",
    "endereco.referencia": "Referência",
    bancoId: "Banco de Sementes",
  };
  


  const validateSchema = Yup.object().shape({
    nome: Yup.string()
      .min(5, "O nome deve ter no mínimo 5 caracteres")
      .required("Obrigatório"),
    nomePopular: Yup.string().required("Obrigatório"),
    cpf: Yup.string().required("Obrigatório"),
    pergunta: Yup.object().shape({
      pergunta: Yup.string().required("Obrigatório"),
      resposta: Yup.string().required("Obrigatório"),
    }),
    sexo: Yup.string().required("Obrigatório"),
    senha: Yup.string()
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .required("Obrigatório"),
    confirmarSenha: Yup.string()
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .oneOf([Yup.ref("senha"), null], "As senhas não correspondem")
      .required("Obrigatório"),
    contato: Yup.string()
      .min(11, "O contato deve ter no mínimo 11 caracteres")
      .required("Obrigatório"),
    dataNascimento: Yup.date()
      .max(new Date(), "A data de nascimento não pode ser maior que a data atual")
      .min(new Date(1, 1, 1900), "A data de nascimento não pode ser menor que 01/01/1900")
      .required("Obrigatório"),
    endereco: Yup.object().shape({
      cep: Yup.string()
      .min(8, "O CEP deve conter no mínimo 8 caracteres")
        .required("Obrigatório"),
      estado: Yup.string().required("Obrigatório"),
      cidade: Yup.string().required("Obrigatório"),
      bairro: Yup.string().required("Obrigatório"),
      logradouro: Yup.string().required("Obrigatório"),
      numero: Yup.string().required("Obrigatório"),
      complemento: Yup.string(), // Opcional
      referencia: Yup.string(), // Opcional
    }),
    bancoId: Yup.string()
      .required("Obrigatório")
      .notOneOf([""], "Selecione um banco válido"), // Evita valores vazios no select
  });
  

  const { mutate } = useMutation(
    async (values) => {
      return postAgricultor(values);
    },
    {
      onSuccess: () => {
        window.location.href = "/agricultores";
      },
      onError: (error) => {
        console.error("Erro ao cadastrar agricultor:", error);
        if (error.response?.data?.errors) {
          const errors = error.response.data.errors.reduce((acc, curr) => {
            acc[curr.fieldName] = curr.message;
            return acc;
          }, {});
          setApiErrors(errors);
        }
      },
    }
  );


  const [etapas, setEtapas] = useState(0);

  const formatErrors = (errors, prefix = "") =>
    Object.entries(errors).flatMap(([key, value]) => {
      const fullKey = `${prefix}${key}`;
      const readableKey = fieldNames[fullKey] || fullKey;
      return typeof value === "string"
        ? [`${readableKey}: ${value}`]
        : formatErrors(value, `${fullKey}.`);
    });

  const combineErrors = (formikErrors, apiErrors) => {
    const combined = { ...apiErrors, ...formikErrors };
    return formatErrors(combined);
  };



  return (
    <div id="header" className={style.container}>
      <HeaderNavegacao
        diretorioAnterior={diretorioAnterior}
        diretorioAtual={diretorioAtual}
        hrefAnterior={hrefAnterior}
        etapas={etapas}
      />

      <div className={style.container__header}>
        {etapas === 0 && <h1 className={style.container__header_currentNav}>1. Dados do(a) Agricultor(a)</h1>}
        {etapas >= 1 && etapas <= 2 && <h1 className={style.container__header_current}>1. Dados do(a) Agricultor(a)</h1>}
        {etapas === 1 && <h1 className={style.container__header_currentNav}>2. Dados do Endereço</h1>}
        {etapas !== 1 && <h1 className={style.container__header_current}>2. Dados do Endereço</h1>}
        {etapas === 2 && <h1 className={style.container__header_currentNav}>3. Produção de Sementes</h1>}
        {etapas >= 0 && etapas < 2 && <h1 className={style.container__header_current}>3. Produção de Sementes</h1>}
      </div>

      <div className={style.container__ContainerForm}>
        <Formik
          initialValues={initialValues}
          validationSchema={validateSchema}
          onSubmit={(values, { setSubmitting }) => {
            mutate(values, {
              onError: (error) => {
                console.error("Erro ao cadastrar agricultor:", error);
                const apiErrors = error.response?.data?.errors || [];
                const formattedApiErrors = apiErrors.map(
                  (err) => `${fieldNames[err.fieldName] || err.fieldName}: ${err.message}`
                );
                if (formattedApiErrors.length > 0) {
                  alert("Erros nos seguintes campos\n\n" + formattedApiErrors.join("\n"));
                }
              },
            });
            setSubmitting(false);
          }}
        >
          {(formik) => (
            <Form
              className={style.container__ContainerForm_form}
              onSubmit={(e) => {
                e.preventDefault();
                const errors = formik.errors;
                if (Object.keys(errors).length > 0) {
                  alert(
                    "Erros nos seguintes campos:\n\n" + formatErrors(errors).join("\n")
                  );
                  return;
                }
                formik.handleSubmit();
              }}
            >
              {etapas === 0 && <DadosForm formik={formik} />}
              {etapas === 1 && <DadosEndereco formik={formik} />}
              {etapas === 2 && <DadosSementes formik={formik} />}
              {etapas === 0 && (
                <div className={style.container__ContainerForm_buttons}>
                  <button type="button">
                    <Link className={style.container__ContainerForm_buttons_link} href="/agricultores">
                      <h1>Voltar</h1>
                    </Link>
                  </button>
                  <button
                    type="button"
                    onClick={() => setEtapas(etapas + 1)}
                  >
                    <Link href="#header" className={style.container__ContainerForm_buttons_linkWhite}>
                      <h1>Continuar</h1>
                    </Link>
                  </button>
                </div>
              )}
              {etapas === 1 && (
                <div className={style.container__ContainerForm_buttons}>
                  <button
                    type="button"
                    onClick={() => setEtapas(etapas - 1)}
                  >
                    <Link href="#header" className={style.container__ContainerForm_buttons_link}>
                      <h1>Voltar</h1>
                    </Link>
                  </button>
                  <button
                    type="button"
                    onClick={() => setEtapas(etapas + 1)}
                  >
                    <Link href="#header" className={style.container__ContainerForm_buttons_linkWhite}>
                      <h1>Continuar</h1>
                    </Link>
                  </button>
                </div>
              )}
              {etapas === 2 && (
                <div className={style.container__ContainerForm_buttons}>
                  <button
                    type="button"
                    onClick={() => setEtapas(etapas - 1)}
                  >
                    <Link href="#header" className={style.container__ContainerForm_buttons_link}>
                      <h1>Voltar</h1>
                    </Link>
                  </button>
                  <button
                    type="submit"
                    className={style.container__ContainerForm_buttons_linkWhite}
                  >
                    <h1>Finalizar</h1>
                  </button>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UsuarioForm;
