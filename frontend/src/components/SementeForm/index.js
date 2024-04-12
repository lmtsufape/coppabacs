"use client"

import { useMutation } from "react-query";
import { postSemente } from "@/api/sementes/postSemente";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from 'yup';
import styles from "@/components/SementeForm/sementeForm.module.scss";
import HeaderNavegacao from "../HeaderNavegacao";
import Link from "next/link";
import DadosSementesForm from "@/components/SementeForm/DadosSementesForm/index";
import DadosCaracteristicasAgronomicas from "@/components/SementeForm/DadosCaracteristicasAgronomicas/index";
import ToleranciaAdversidades from "@/components/SementeForm/DadosToleranciaAdversidades/index";


const SementesForm = ({ diretorioAnterior, diretorioAtual, hrefAnterior }) => {

  const initialValues = {

    responsavelTecnico: {
      nome: "",
      cpf: "",
      numeroConselho: "",
      conselho: "",
    },

    cultura: {
      cultura: "",
      //ver como vai ser
      genero: "",
    },

    nome: "",
    nomePopular: "",
    descricao: "",
    pragas: "",
    dominioPublico: "",
    polinizaacaoAbertaMelhorada: "",
    regiaoColetaDados: "",
    altitudeMaxima: "",
    altitudeMinima: "",
    caracteristicasPositiva: "",
    caracteristicasNegativas: "",
    doencas: "",
    regAdaptCultivar: "",

    toleranciaAdversidades: {
      altaTemperatura: "",
      baixaTemperatura: "",
      geada: "",
      chuvaExcessiva: "",
      seca: "",
      ventos: "",
      salinidade: "",
      toxidadeAluminio: "",
      soloArgiloso: "",
      soloArenoso: "",
      soloAcido: "",
      soloBaixaFertilidade: "",
    },




    finalidades: {
      nome: [],
    },

    caracteristicasAgronomicas: {
      cicloFenologico: "",
      standRecomendado: "",
      produtividade: "",
      altitudePlanta: "",
      pesoMilGraos: "",
      pesoHectolitro: "",
      tipoGrao: "",
      corGrao: "",
      corCaule: "",
      corFolha: "",
      corFlor: "",
      habitoCrescimento: "",

      //ver o que vou fazer aqui
      empalhamento: {
        tipo: "",
      }
    },

  }

  const validateSchema = Yup.object().shape({
    nome: Yup.string()
      .required('O nome da cultivar é obrigatório'),
    
  })

  const { status, mutate } = useMutation(
    async (values) => {
      console.log("valores: ", values);
      return postSemente(values);
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
    <div id="header" className={styles.container}>
      <HeaderNavegacao
        diretorioAnterior={diretorioAnterior}
        diretorioAtual={diretorioAtual}
        hrefAnterior={hrefAnterior}
        etapas={etapas}
      />

      <div className={styles.container__header}>
        {etapas === 0 && <h1 className={styles.container__header_currentNav}>1. Dados da semente</h1>}
        {etapas >= 1 && etapas <= 2 && <h1 className={styles.container__header_current}>1. Dados da Semente</h1>}

        {etapas === 1 && <h1 className={styles.container__header_currentNav}>2. Dados da semente</h1>}
        {etapas != 1 && <h1 className={styles.container__header_current}>2. Dados da semente</h1>}

        {etapas === 2 && <h1 className={styles.container__header_currentNav}>3. Dados da semente</h1>}
        {etapas >= 0 && etapas < 2 && <h1 className={styles.container__header_current}>3. Dados da semente</h1>}

      </div>

      <div className={styles.containerForm}>
        <Formik initialValues={initialValues}
          validationSchema={validateSchema}
          onSubmit={(values, { setSubmitting }) => {
            mutate(values, {
              onSuccess: (res) => {
                window.location.href = '/sementes';
              }
            });
          }}
        >
          {(formik) => {
            return (
              <Form >
                {etapas === 0 && <DadosSementesForm formik={formik} />}
                {etapas === 1 && <DadosCaracteristicasAgronomicas formik={formik} />}
                {etapas === 2 && <ToleranciaAdversidades formik={formik} />}
                {etapas === 0 && (
                  <div className={styles.buttons}>
                    <button>
                      <Link className={styles.buttons_link} href="/sementes">
                        <h1>Voltar</h1>
                      </Link>
                    </button>
                    <button onClick={() => setEtapas(etapas + 1)}>
                      <Link href="#header" className={styles.buttons_linkWhite}>
                        <h1>Continuar</h1>
                      </Link>
                    </button>
                  </div>
                )}
                {etapas === 1 && (
                  <div className={styles.buttons}>
                    <button onClick={() => setEtapas(etapas - 1)}>
                      <Link href="#header" className={styles.buttons_link}>
                        <h1>Voltar</h1>
                      </Link>
                    </button>
                    <button onClick={() => setEtapas(etapas + 1)}>
                      <Link href="#header" className={styles.buttons_linkWhite}>
                        <h1>Continuar</h1>
                      </Link>
                    </button>
                  </div>
                )}
                {etapas === 2 && (
                  <div className={styles.buttons}>
                    <button onClick={() => setEtapas(etapas - 1)}>
                      <Link href="#header" className={styles.buttons_link}>
                        <h1>Voltar</h1>
                      </Link>
                    </button>
                    <button type="submit" className={styles.buttons_linkWhite}>
                      <h1>Finalizar</h1>
                    </button>
                  </div>
                )}
              </Form>
            )
          }}
        </Formik>

      </div>
    </div>
  );
}

export default SementesForm;