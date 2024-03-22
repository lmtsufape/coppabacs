"use client"


import { useMutation } from "react-query";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from 'yup';
import HeaderNavegacao from "@/components/HeaderNavegacao";
import DadosSementes from "./DadosSementes"
import DadosToleranciaAdversidades from "./DadosToleranciaAdversidades";
import styles from "@/components/DetalhamentoSementes/detalhamentoSementes.module.scss";
import Image from "next/image";
import DadosCaracteristicasAgronomicas from "./DadosCaracteristicasAgronomicas";

const DetalhamentoSementes = ({ diretorioAnterior, diretorioAtual, hrefAnterior, sementes }) => {

    const initialValues = {
        cultura: sementes?.cultura,
        nome: sementes?.nome,
        finalidadeSemente: {
            etilica: false,
            naoEtilica: false,
            inNatura: false,
            forragem: false,
            processamento: false,
            outra: false,
            outraFinalidade: 'Outra Finalidade',
        },
        descricao: sementes?.descricao,
        doencas: sementes?.doenca,
        pragas: sementes?.pragas,
        dominioPublico: sementes?.dominioPubllico,
        polinizaacaoAbertaMelhorada: sementes?.polinizaacaoAbertaMelhorada,
        regAdaptCultivar: sementes?.regAdaptCultivar,
        regiaoColetaDados: sementes?.regiaoColetaDados,
        altitudeMaxima: sementes?.altitudeMaxima,
        altitudeMinima: sementes?.altitudeMinima,
        caracteristicasPositiva: sementes?.caracteristicasPositiva,
        caracteristicasNegativas: sementes?.caracteristicasNegativas,
        avaliacaoSemente: sementes?.avaliacaoSemente,
        caracteristicasAgronomicas: {
            cicloFenologico: sementes?.caracteristicasAgronomicas?.cicloFenologico,
            stand: sementes?.caracteristicasAgronomicas?.stand,
            produtividade: sementes?.caracteristicasAgronomicas?.produtividade,
            alturaPlanta: sementes?.caracteristicasAgronomicas?.alturaPlanta,
            pesoMilGraos: sementes?.caracteristicasAgronomicas?.pesoMilGraos,
            pesoHectolitro: sementes?.caracteristicasAgronomicas?.pesoHectolitro,
            tipoGrao: sementes?.caracteristicasAgronomicas?.tipoGrao,
            corGrao: sementes?.caracteristicasAgronomicas?.corGrao,
            corCaule: sementes?.caracteristicasAgronomicas?.corCaule,
            corFolha: sementes?.caracteristicasAgronomicas?.corFolha,
            corFlor: sementes?.caracteristicasAgronomicas?.corFlor,
            empalhamento: sementes?.caracteristicasAgronomicas?.empalhamento,
            habitoCrescimento: sementes?.caracteristicasAgronomicas?.habitoCrescimento,
        },
        toleranciaAdversidades: {
            altaTemperatura: sementes?.toleranciaAdversidades?.altaTemperatura,
            baixaTemperatura: sementes?.toleranciaAdversidades?.baixaTemperatura,
            geada: sementes?.toleranciaAdversidades?.geada,
            chuvaExcessiva: sementes?.toleranciaAdversidades?.chuvaExcessiva,
            seca: sementes?.toleranciaAdversidades?.seca,
            ventos: sementes?.toleranciaAdversidades?.ventos,
            salinidade: sementes?.toleranciaAdversidades?.salinidade,
            toxidadeAluminio: sementes?.toleranciaAdversidades?.toxidadeAluminio,
            soloArgiloso: sementes?.toleranciaAdversidades?.soloArgiloso,
            soloArenoso: sementes?.toleranciaAdversidades?.soloArenoso,
            soloAcido: sementes?.toleranciaAdversidades?.soloAcido,
            soloBaixaFertilidade: sementes?.toleranciaAdversidades?.soloBaixaFertilidade,
        }
    }

    const [etapas, setEtapas] = useState(0);
    console.log("Sementes", sementes);
    const [editar, setEditar] = useState(false);

    const { mutate } = useMutation((values) => {
        // Aqui você coloca a lógica de envio dos dados para o servidor ou outra operação de mutação
        console.log("Values submetidos:", values);
    });

    return (
        <div id="header" className={styles.container}>
            <HeaderNavegacao
                diretorioAnterior={diretorioAnterior}
                diretorioAtual={diretorioAtual}
                hrefAnterior={hrefAnterior}
                etapas={etapas}

            />

            <div className={styles.container__ContainerForm}>
                <Formik
                    initialValues={initialValues}


                    onSubmit={(values, { setSubmitting }) => {
                        mutate(values);
                    }}
                >
                    {(formik) => {
                        return (
                            <Form className={styles.container__ContainerForm_form}>
                                <div className={styles.container__profile}>
                                    <div className={styles.container__profile_img}>
                                        <Image src="/assets/teste_quinoa.png" alt="Foto da semente" width={72} height={72} />
                                        <h1>{sementes?.nome}</h1>
                                    </div>
                                    {editar === false ? (
                                        <button
                                            onClick={() => setEditar(true)}
                                            className={styles.container__profile_button}>
                                            <span>Editar</span>
                                            <Image src="/assets/iconLapis.svg" alt="editar perfil" width={25} height={25} />
                                        </button >
                                    ) : (
                                        <button
                                            onClick={() => setEditar(false)}
                                            className={styles.container__profile_button}>

                                            <span>Salvar</span>
                                            <Image src="/assets/iconLapis.svg" alt="editar perfil" width={25} height={25} />
                                        </button >
                                    )}

                                </div>
                                <DadosSementes formik={formik} editar={editar} />
                                <DadosCaracteristicasAgronomicas formik={formik} editar={editar}/>
                                <DadosToleranciaAdversidades formik={formik} editar={editar} />

                            </Form>
                        )
                    }
                    }
                </Formik>
            </div>
        </div>
    );
}

export default DetalhamentoSementes;