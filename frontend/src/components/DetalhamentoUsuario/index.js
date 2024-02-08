"use client"

import { useMutation } from "react-query";

import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from 'yup';

import style from "./detalhamentoUsuario.module.scss";

import HeaderNavegacao from "../HeaderNavegacao";
import DadosForm from "./DadosUsuario";
import DadosEndereco from "./DadosEndereco";
import DadosAtividadesRurais from "./DadosAtividadesRurais";


const AgricultorForm = ({ diretorioAnterior, diretorioAtual, hrefAnterior, usuario }) => {

  const initialValues = {
    email: usuario?.email,
    nome: usuario?.nome,
    apelido: usuario?.apelido,
    contato: usuario?.contato,
    cpf: usuario?.cpf,
    dataNascimento: usuario?.dataNascimento,
    sexo: usuario?.sexo,
    endereco: {
      estado: usuario?.endereco?.estado,
      cidade: usuario?.endereco?.cidade,
      bairro: usuario?.endereco?.bairro,
      nome: usuario?.endereco?.nome,
      numero: usuario?.endereco?.numero,
      referencia: usuario?.endereco?.referencia,
    },
    bancoId: usuario?.bancoId,
    atividadeRural: {
      caprino: false,
      fruticultura: false,
      avicultura: false,
      agriculturaMilho: false,
      suinoCultura: false,
      aquiCultura: false,
      apicultura: false,
      agriculturaFeijao: false,
      pecuaria: false,
      pescaArtesanal: false,
      agriculturaSequeira: false,
      outro: false,
    },
    producaoSementes: {
      cultura: '',
      variedade: '',
      areaPlantada: '',
      previsaoVenda: '',
    }
  }



  const [etapas, setEtapas] = useState(0);
  console.log("Usuario ", usuario);
  return (
    <div id="header" className={style.container}>
      <HeaderNavegacao
        diretorioAnterior={diretorioAnterior}
        diretorioAtual={diretorioAtual}
        hrefAnterior={hrefAnterior}
        etapas={etapas}

      />


      <div className={style.container__ContainerForm}>
        <Formik
          initialValues={initialValues}


          onSubmit={(values, { setSubmitting }) => {
            mutate(values);
          }}
        >
          {(formik) => {
            return (
              <Form
                className={style.container__ContainerForm_form}
              >

                <DadosForm formik={formik} />
                <DadosEndereco formik={formik} />
                <DadosAtividadesRurais formik={formik} />

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