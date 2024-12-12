"use client"

import { useMutation } from "react-query";

import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from 'yup';

import style from "./agricultorForm.module.scss";

import HeaderNavegacao from "../HeaderNavegacao";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DadosTransacao from "./DadosTabelaBanco/index";
import { getDoacaoId } from "@/api/transacoes/doacoes/getDoacaoId";
import DadosTabelaBanco from "./DadosTabelaBanco/index";
import HeaderDetalhamento from "../HeaderDetalhamento";
import { getStorageItem } from "@/utils/localStore";


const DetalhamentoTabelaBancoSemente = ({ diretorioAnterior, diretorioAtual, hrefAnterior, tabelaBanco, backDetalhamento }) => {

  const formData = {
    nomeSemente: tabelaBanco.semente.nome || "",
    variedade: tabelaBanco.semente.cultura.genero || "",
    quantidade: tabelaBanco.peso || "",
    safra: tabelaBanco.safra || "",

  }


  const [etapas, setEtapas] = useState(0);
  return (
    <div id="header" className={style.container}>

      <HeaderDetalhamento
        hrefAnterior={backDetalhamento}
        diretorioAnterior="Home / Gestão de Sementes / "
        diretorioAtual="Detalhamento semente"

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
                <div className={style.container__header__profile}>
                  <div className={style.container__header__profile_img}>
                    <h1>Informações</h1>
                  </div>
                </div>
                <DadosTabelaBanco formik={formik} hrefAnterior={hrefAnterior} />
              </Form>
            )
          }
          }
        </Formik>
      </div>
    </div>
  );
}


export default DetalhamentoTabelaBancoSemente;