"use client"

import { useMutation } from "react-query";
import { postAgricultor } from "@/api/usuarios/agricultor/postAgricultor";

import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from 'yup';

import style from "./agricultorForm.module.scss";

import HeaderNavegacao from "../HeaderNavegacao";
import DadosForm from "./DadosUsuario/index";
import DadosEndereco from "./DadosEndereco";
import DadosAtividadesRurais from "./DadosAtividadesRurais";
import Link from "next/link";


const AgricultorForm = ({ diretorioAnterior, diretorioAtual, hrefAnterior }) => {
  

  const initialValues = {
    email: "",
    senha: "",
    confirmarSenha: "",
    nome: "",
    nomePopular: "",
    contato: "",
    cpf: "",
    dataNascimento: "",
    sexo: "",
    endereco: {
      cep: "",
      estado: "",
      cidade: "",
      bairro: "",
      nome: "",
      numero: "",
      referencia: "",
    },
    bancoId: "",
    conjuge: {
      nome: "",
      sexo: "",
    },
    bancoId: "",
    atividadesRurais: [],
    producaoSementes: {
      cultura: "",
      variedade: "",
      areaPlantada: "",
      previsaoVenda: "",
    }


  }


  const validateSchema = Yup.object().shape({
    nome: Yup.string()
      .min(5, "O nome deve ter no mínimo 5 caracteres")
      .required('Required'),
    senha: Yup.string()
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .required('Required'),
    confirmarSenha: Yup.string()
      .min(8, "As senhas devem ser iguais")
      .oneOf([Yup.ref('senha'), null], 'As senhas não são iguais'), // Utilize oneOf para comparar as senhas
    contato: Yup.string()
      .min(11, "O contato deve ter no mínimo 11 caracteres")
      .required('Required'),
    dataNascimento: Yup.date()
      .max(new Date(), "A data de nascimento não pode ser maior que a data atual")
      .min(new Date(1, 1, 1900), "A data de nascimento não pode ser menor que 01/01/1900")
      .required('Required'),
  })
  const { status, mutate } = useMutation(
    async (values) => {
      console.log("valores: ", values);
      return postAgricultor(values);
    }, {
    onSuccess: (res) => {

    },
    onError: (error) => {
      console.log(error);

    }
  }
  );

  const [etapas, setEtapas] = useState(0);
  
  return (
    <div id="header" className={style.container}>
      <HeaderNavegacao
        diretorioAnterior={diretorioAnterior}
        diretorioAtual={diretorioAtual}
        hrefAnterior={hrefAnterior}
        etapas={etapas}

      />

      <div className={style.container__header}>
        {etapas === 0 && <h1 className={style.container__header_currentNav}>1. Dados do agricultor</h1>}
        {etapas >= 1 && etapas <= 2 && <h1 className={style.container__header_current}>1. Dados do agricultor</h1>}

        {etapas === 1 && <h1 className={style.container__header_currentNav}>2. Endereço do Endereço</h1>}
        {etapas != 1 && <h1 className={style.container__header_current}>2. Endereço do Endereço</h1>}

        {etapas === 2 && <h1 className={style.container__header_currentNav}>3. Atvidades rurais</h1>}
        {etapas >= 0 && etapas < 2 && <h1 className={style.container__header_current}>3. Atvidades rurais</h1>}

      </div>

      <div className={style.container__ContainerForm}>
        <Formik
          initialValues={initialValues}

          validationSchema={validateSchema}

          onSubmit={(values, { setSubmitting }) => {
            mutate(values,{
              onSuccess: (res) => {
                window.location.href = '/agricultores';
              }
            
            });

          }}
        >
          {(formik) => {
            return (
              <Form
                className={style.container__ContainerForm_form}
              >

                {etapas === 0 && <DadosForm formik={formik} />}
                {etapas === 1 && <DadosEndereco formik={formik} />}
                {etapas === 2 && <DadosAtividadesRurais formik={formik} />}
                {etapas === 0 && (
                  <div className={style.container__ContainerForm_buttons}>
                    <button>
                      <Link className={style.container__ContainerForm_buttons_link} href="/agricultores">
                        <h1>Voltar</h1>
                      </Link>
                    </button>
                    <button onClick={() => setEtapas(etapas + 1)}>
                      <Link href="#header" className={style.container__ContainerForm_buttons_linkWhite}>
                        <h1>Continuar</h1>
                      </Link>
                    </button>
                  </div>
                )}
                {etapas === 1 && (
                  <div className={style.container__ContainerForm_buttons}>
                    <button onClick={() => setEtapas(etapas - 1)}>
                      <Link href="#header" className={style.container__ContainerForm_buttons_link}>
                        <h1>Voltar</h1>
                      </Link>
                    </button>
                    <button onClick={() => setEtapas(etapas + 1)}>
                      <Link href="#header" className={style.container__ContainerForm_buttons_linkWhite}>
                        <h1>Continuar</h1>
                      </Link>
                    </button>
                  </div>
                )}
                {etapas === 2 && (
                  <div className={style.container__ContainerForm_buttons}>
                    <button onClick={() => setEtapas(etapas - 1)}>
                      <Link href="#header" className={style.container__ContainerForm_buttons_link}>
                        <h1>Voltar</h1>
                      </Link>
                    </button>
                    <button type="submit" className={style.container__ContainerForm_buttons_linkWhite}>
                        <h1>Finalizar</h1>
                    </button>
                  </div>
                )}
              </Form>
            )
          }
          }
        </Formik>
      </div>

    </div>
  );
}


export default AgricultorForm;