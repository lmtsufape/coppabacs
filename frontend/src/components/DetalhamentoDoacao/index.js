"use client"


import { Form, Formik } from "formik";
import { useState } from "react";

import style from "./agricultorForm.module.scss";

import DadosTransacao from "./DadosTransacao/index";
import HeaderDetalhamento from "../HeaderDetalhamento";


const DetalhamentoTransacao = ({ hrefAnterior, diretorioAtual, diretorioAnterior, transacao }) => {
  const formData = {
    data: transacao.data,
    descricao: transacao.descricao || "" ,
    agricultorId: transacao.agricultor || "",
    itens: transacao.itens || {},
    bancoSementesId: transacao.bancoSementesId || "",
  }
    
  const [etapas, setEtapas] = useState(0);
  return (
    <div id="header" className={style.container}>
      <HeaderDetalhamento
        diretorioAnterior={diretorioAnterior}
        diretorioAtual={diretorioAtual}
        hrefAnterior={hrefAnterior}
        etapas={etapas}

      />
      <div className={style.container__ContainerForm}>
        <Formik
          initialValues={formData}
        >
          {(formik) => {
            return (
              <Form
                className={style.container__ContainerForm_form}
              >
                <DadosTransacao formik={formik} hrefAtual={diretorioAtual} />
                <div className={style.container__ContainerForm_buttons}>
                  <button className={style.container__ContainerForm_buttons_link} onClick={() => setEtapas(etapas - 1)}>
                  </button>
                  <button
                    className={style.container__ContainerForm_buttons_linkWhite} onClick={hrefAnterior}>
                      <h1>Voltar</h1>
                  </button>
                </div>
              </Form>
            )
          }
          }
        </Formik>
      </div>
    </div>
  );
}


export default DetalhamentoTransacao;