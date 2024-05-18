"use client"

import { useMutation } from "react-query";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from 'yup';
import style from "./agricultorForm.module.scss";
import HeaderNavegacao from "../HeaderNavegacao";
import DadosForm from "./DadosUsuario/index";
import DadosEndereco from "./DadosEndereco";
import Link from "next/link";
import { postCoppabacs } from "@/api/usuarios/coppabacs/postCoppabacs";


const FuncionarioForm = ({ diretorioAnterior, diretorioAtual, hrefAnterior }) => {


  const initialValues = {
    email: "",
    senha: "",
    confirmarSenha: "",
    nome: "",
    nomePopular: "",
    funcao: "",
    contato: "",
    cpf: "",
    dataNascimento: "",
    sexo: "",
    tipo: "",
    endereco: {
      logradouro: '',
      referencia: '',
      complemento: '',
      cidade: '',
      estado: '',
      cep: '',
      numero: '',
      bairro: ''
    },
    bancoId: "",
    conjuge: {
      nome: "",
      sexo: "",
    },
  }

  const validateSchema = Yup.object().shape({
    nome: Yup.string()
      .min(5, "O nome deve ter no mínimo 5 caracteres")
      .required('Obrigatório'),
    nomePopular: Yup.string()
      .required('Obrigatório'),
    cpf: Yup.string()
      .required('Obrigatório'),
    sexo: Yup.string()
      .required('Obrigatório'),
    senha: Yup.string()
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .required('Obrigatório'),
    confirmarSenha: Yup.string()
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .oneOf([Yup.ref('senha'), null], 'As senhas não correspondem')
      .required('Obrigatório'),
    contato: Yup.string()
      .min(11, "O contato deve ter no mínimo 11 caracteres")
      .required('Obrigatório'),
    dataNascimento: Yup.date()
      .max(new Date(), "A data de nascimento não pode ser maior que a data atual")
      .min(new Date(1, 1, 1900), "A data de nascimento não pode ser menor que 01/01/1900")
      .required('Obrigatório'),
    // cep: Yup.string()
    //   .required('Obrigatório'),
    // logradouro: Yup.string()
    //   .required('Obrigatório'),
    // cidade: Yup.string()
    //   .required('Obrigatório'),
    // estado: Yup.string()
    //   .required('Obrigatório'),
    // numero: Yup.string()
    //   .required('Obrigatório'),
    // bairro: Yup.string()
    //   .required('Obrigatório'),
    bancoId: Yup.string()
      .required('Obrigatório'),
  })

  const { status, mutate } = useMutation(
    async (values) => {
      return postCoppabacs(values);
    }, {
    onSuccess: (res) => {
      window.location.href = '/funcionarios';

    },
    onError: (error) => {
      console.log("Erro ao cadastrar funcionário", error);

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
        {etapas === 0 && <h1 className={style.container__header_currentNav}>1. Dados do(a) Funcionário(a)</h1>}
        {etapas >= 1 && etapas <= 2 && <h1 className={style.container__header_current}>1. Dados do(a) Funcionário(a)</h1>}

        {etapas === 1 && <h1 className={style.container__header_currentNav}>2. Endereço do(a) Funcionário(a)</h1>}
        {etapas != 1 && <h1 className={style.container__header_current}>2. Endereço do(a) Funcionário(a)</h1>}

      </div>

      <div className={style.container__ContainerForm}>
        <Formik
          initialValues={initialValues}

          validationSchema={validateSchema}

          onSubmit={(values, { setSubmitting }) => {
            mutate(values)
          }}
        >
          {(formik) => {
            return (
              <Form
                className={style.container__ContainerForm_form}
              >

                {etapas === 0 && <DadosForm formik={formik} />}
                {etapas === 1 && <DadosEndereco formik={formik} hrefAnterior={hrefAnterior}/>}
                {etapas === 0 && (
                  <div className={style.container__ContainerForm_buttons}>
                    <button type="button">
                      <Link className={style.container__ContainerForm_buttons_link} href="/funcionarios">
                        <h1>Voltar</h1>
                      </Link>
                    </button>
                    <button type="button" onClick={() => setEtapas(etapas + 1)}>
                      <Link href="#header" className={style.container__ContainerForm_buttons_linkWhite}>
                        <h1>Continuar</h1>
                      </Link>
                    </button>
                  </div>
                )}
                {etapas === 1 && (
                  <div className={style.container__ContainerForm_buttons}>
                    <button type="button" onClick={() => setEtapas(etapas - 1)}>
                      <Link href="#header" className={style.container__ContainerForm_buttons_link}>
                        <h1>Voltar</h1>
                      </Link>
                    </button>
                    <button
                      type="submit"
                      className={style.container__ContainerForm_buttons_linkWhite}>
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


export default FuncionarioForm;