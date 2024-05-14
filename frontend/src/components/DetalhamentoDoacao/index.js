"use client"


import { Form, Formik } from "formik";
import { useState } from "react";

import style from "./agricultorForm.module.scss";

import HeaderNavegacao from "../HeaderNavegacao";
import Link from "next/link";
import DadosTransacao from "./DadosTransacao/index";


const DetalhamentoDoacao = ({ diretorioAnterior, diretorioAtual, hrefAnterior, doacao }) => {
  const formData = {
    data: hrefAnterior === "/doacoes" ? doacao.dataDoacao : doacao.dataRetirada || "",
    descricao: doacao.descricao || "" ,
    agricultorId: doacao.agricultor || "",
    itens: doacao.itens || {},
    bancoSementesId: doacao.bancoSementesId || "",
  }
    

  const [etapas, setEtapas] = useState(0);
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
          initialValues={formData}
        >
          {(formik) => {
            return (
              <Form
                className={style.container__ContainerForm_form}
              >
                <DadosTransacao formik={formik} hrefAnterior={hrefAnterior} />
                <div className={style.container__ContainerForm_buttons}>
                  <button className={style.container__ContainerForm_buttons_link} onClick={() => setEtapas(etapas - 1)}>
                  </button>
                  <button
                    className={style.container__ContainerForm_buttons_linkWhite}>
                    <Link href={hrefAnterior} className={style.container__ContainerForm_buttons_linkWhite}>
                      <h1>Voltar</h1>
                    </Link>

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