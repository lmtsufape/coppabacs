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
import { getStorageItem } from "@/utils/localStore";
import { useSelector } from "react-redux";
import SelecionarSementesBanco from "./SelecionarSementesBanco";


export default function SementesForm({ diretorioAnterior, diretorioAtual, hrefAnterior }) {
  const [role, setRole] = useState(getStorageItem("userRole"));

  const userLogin = useSelector((state) => state.userLogin);

  function whatIsTypeUser() {
    if (role) {
      if (role == "ROLE_ADMIN" || role == "ROLE_COPPABACS") {
        return <LayoutAdmin
          diretorioAnterior={diretorioAnterior}
          diretorioAtual={diretorioAtual}
          hrefAnterior={hrefAnterior}
        />
      } else if (role == "ROLE_GERENTE") {
        return <LayoutCoordenador
          diretorioAnterior={diretorioAnterior}
          diretorioAtual={diretorioAtual}
          hrefAnterior={hrefAnterior} />
      }

    }
  }
  return (
    <div>
      <div className={styles.menu} style={!userLogin ? { paddingTop: '0px' } : {}}>
        {whatIsTypeUser()}
      </div>
    </div>
  )

}


const LayoutAdmin = ({ diretorioAnterior, diretorioAtual, hrefAnterior }) => {
  const initialValues = {
    imagens: [],
    responsavelTecnico: {
      nome: "",
      cpf: "",
      numeroConselho: "",
      estadoConselho: "",
    },

    cultura: {
      cultura: "",
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

    finalidades: [],

    regioesAdaptacaoCultivo: "",

    caracteristicasAgronomicas: {
      cicloFenologico: "",
      standRecomendado: "",
      produtividade: "",
      altitudePlanta: "",

      PesoMilgraos: "",
      PesoHectolitro: "",
      tipoGrão: "",
      corGrao: "",

      corCaule: "",
      corFolha: "",

      corFLor: "",
      habitoCrescimento: "",

      empalhamento: {
        tipo: "",
      }
    },

  }

  const validateSchema = Yup.object().shape({
    nome: Yup.string().required('O nome da cultivar é obrigatório'),
    responsavelTecnico: Yup.object().shape({
      nome: Yup.string().required('O nome do responsável técnico é obrigatório'),
      cpf: Yup.string().required('O cpf do responsável técnico é obrigatório'),
    }),
    cultura: Yup.object().shape({
      cultura: Yup.string().required('A cultura é obrigatória'),
      genero: Yup.string().required('O gênero é obrigatório'),
    }),


    nomePopular: Yup.string().required('O nome popular é obrigatório'),
    descricao: Yup.string().required('A descrição é obrigatória'),
    dominioPublico: Yup.string().required('O domínio público é obrigatório'),
    polinizaacaoAbertaMelhorada: Yup.string().required('A polinização aberta melhorada é obrigatória'),
    regiaoColetaDados: Yup.string().required('A região de coleta de dados é obrigatória'),
    finalidades: Yup.object().shape({
      nome: Yup.array().required('As finalidades são obrigatórias'),
    }),
    toleranciaAdversidades: Yup.object().shape({
      altaTemperatura: Yup.string().required('A tolerância à alta temperatura é obrigatória'),
      baixaTemperatura: Yup.string().required('A tolerância à baixa temperatura é obrigatória'),
      geada: Yup.string().required('A tolerância à geada é obrigatória'),
      chuvaExcessiva: Yup.string().required('A tolerância à chuva excessiva é obrigatória'),
      seca: Yup.string().required('A tolerância à seca é obrigatória'),
      ventos: Yup.string().required('A tolerância aos ventos é obrigatória'),
      salinidade: Yup.string().required('A tolerância à salinidade é obrigatória'),
      toxidadeAluminio: Yup.string().required('A tolerância à toxicidade do alumínio é obrigatória'),
      soloArgiloso: Yup.string().required('A tolerância ao solo argiloso é obrigatória'),
      soloArenoso: Yup.string().required('A tolerância ao solo arenoso é obrigatória'),
      soloAcido: Yup.string().required('A tolerância ao solo ácido é obrigatória'),
      soloBaixaFertilidade: Yup.string().required('A tolerância à baixa fertilidade do solo é obrigatória'),
    }),

    regAdaptCultivar: Yup.string().required('A região adaptativa da cultivar é obrigatória'),

  })


  const { status, mutate } = useMutation(
    async (values) => {
      return postSemente(values);
    }, {
    onSuccess: (res) => {
      window.location.href = '/sementes';

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
        <Formik
          initialValues={initialValues}
          validationSchema={validateSchema}
          onSubmit={(values, { setSubmitting }) => {
            mutate(values, {
              onSuccess: (res) => {
              },
              onError: (error) => {
                console.log(error)
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
                    <button onClick={() => {
                      mutate(formik.values);
                    }}
                      type="submit"
                      className={styles.buttons_linkWhite}>
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

const LayoutCoordenador = ({ diretorioAnterior, diretorioAtual, hrefAnterior }) => {
  const initialValues = {
    sementes: [],
  }

  const { status, mutate } = useMutation(
    async (values) => {
      return postSemente(values);
    }, {
    onSuccess: (res) => {
      window.location.href = '/sementes';

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

      <div className={styles.containerForm}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            mutate(values);
          }}
        >
          {(formik) => {
            return (
              <Form >
                {etapas === 0 && <SelecionarSementesBanco formik={formik} />}
                <div className={styles.buttons}>
                  <button onClick={() => setEtapas(etapas - 1)}>
                    <Link href="#header" className={styles.buttons_link}>
                      <h1>Cancelar</h1>
                    </Link>
                  </button>
                  <button onClick={() => {
                    mutate(formik.values);
                  }}
                    type="submit"
                    className={styles.buttons_linkWhite}>
                    <h1>Finalizar</h1>
                  </button>
                </div>

              </Form>
            )
          }}
        </Formik>

      </div>
    </div>
  );
}
