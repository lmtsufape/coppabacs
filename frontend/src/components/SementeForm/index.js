"use client"

import { useMutation } from "react-query";
import { postSemente } from "@/api/sementes/postSemente";
import { Form, Formik } from "formik";
import { useEffect,useState } from "react";
import * as Yup from 'yup';
import styles from "@/components/SementeForm/sementeForm.module.scss";
import HeaderNavegacao from "../HeaderNavegacao";
import Link from "next/link";
import DadosSementesForm from "@/components/SementeForm/DadosSementesForm/index";
import DadosCaracteristicasAgronomicas from "@/components/SementeForm/DadosCaracteristicasAgronomicas/index";
import ToleranciaAdversidades from "@/components/SementeForm/DadosToleranciaAdversidades/index";


const SementesForm = ({ diretorioAnterior, diretorioAtual, hrefAnterior }) => {

    const initialValues = {
        tecnico:"",
        cpf: "",
        numConselho: "",
        cultura:"",
        nome: "",
        finalidadeSemente:[],
        descricao: "",
        doencas: "",
        pragas: "",
        dominioPublico: "",
        polinizaacaoAbertaMelhorada: "",
        regAdaptCultivar:"",
        regiaoColetaDados: "",
        altitudeMaxima: "",
        altitudeMinima: "",
        caracteristicasPositiva: "",
        caracteristicasNegativas: "",
        avaliacaoSemente:"",
        caracteristicasAgronomicas:{
            cicloFenologico:"",
            stand:"",
            produtividade:"",
            alturaPlanta:"",
            pesoMilGraos:"",
            pesoHectolitro:"",
            tipoGrao:"",
            corGrao:"",
            corCaule:"",
            corFolha:"",
            corFlor:"",
            empalhamento:"",
            habitoCrescimento:"",
        },
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
        }
    }

    const validateSchema = Yup.object().shape({
        nome: Yup.string()
            .min(5, "O nome deve ter no mínimo 5 caracteres")
            .required('Required'),
        altitudeMaxima: Yup.string()
            .min(2, "A altura deve ter no mínimo 2 caracteres")
            .required('Required')

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
                            onSuccess:(res) => {
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