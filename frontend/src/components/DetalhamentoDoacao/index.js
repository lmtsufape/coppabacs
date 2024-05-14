"use client"


import { Form, Formik } from "formik";
import { useState } from "react";

import style from "./agricultorForm.module.scss";

import HeaderNavegacao from "../HeaderNavegacao";
import Link from "next/link";
import DadosTransacao from "./DadosTransacao/index";
import HeaderDetalhamento from "../HeaderDetalhamento";


const DetalhamentoDoacao = ({ hrefAnterior, dirAtual, dirAnt, hrefAtual, backDetalhamento, doacao }) => {
  const formData = {
    data: hrefAtual === "/doacoes" ? doacao.dataDoacao : doacao.dataRetirada || "",
    descricao: doacao.descricao || "" ,
    agricultorId: doacao.agricultor || "",
    itens: doacao.itens || {},
    bancoSementesId: doacao.bancoSementesId || "",
  }
    
  console.log(doacao)
  const [etapas, setEtapas] = useState(0);
  return (
    <div id="header" className={style.container}>
      <HeaderDetalhamento
        diretorioAnterior={dirAnt}
        diretorioAtual={dirAtual}
        hrefAnterior={backDetalhamento}
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
                <DadosTransacao formik={formik} hrefAtual={hrefAtual} />
                <div className={style.container__ContainerForm_buttons}>
                  <button className={style.container__ContainerForm_buttons_link} onClick={() => setEtapas(etapas - 1)}>
                  </button>
                  <button
                    className={style.container__ContainerForm_buttons_linkWhite} onClick={() => backDetalhamento()}>
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


export default DetalhamentoDoacao;