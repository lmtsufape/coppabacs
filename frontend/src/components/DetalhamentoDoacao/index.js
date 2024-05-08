"use client"

import { useMutation } from "react-query";

import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from 'yup';

import style from "./agricultorForm.module.scss";

import HeaderNavegacao from "../HeaderNavegacao";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DadosTransacao from "./DadosTransacao/index";
import { getDoacaoId } from "@/api/transacoes/doacoes/getDoacaoId";


const DetalhamentoDoacao = ({ diretorioAnterior, diretorioAtual, hrefAnterior, doacao }) => {
  const router = useRouter();
  const formData = {
    dataDoacao: doacao.dataDoacao || "",
    descricao: doacao.descricao || "",
    agricultorId: doacao.agricultor || "",
    itens: doacao.itens || {},
    bancoSementesId: doacao.bancoSementesId|| "",
  }
  console.log(formData)

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
                <DadosTransacao formik={formik} />
                <div className={style.container__ContainerForm_buttons}>
                  <button className={style.container__ContainerForm_buttons_link} onClick={() => setEtapas(etapas - 1)}>
                  </button>
                  <button
                    className={style.container__ContainerForm_buttons_linkWhite}>
                    <Link href="/doacoes" className={style.container__ContainerForm_buttons_linkWhite}>
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