"use client"


import { useMutation } from "react-query";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from 'yup';
import HeaderNavegacao from "@/components/HeaderNavegacao";
import DadosTecnicos from "./DadosTecnico";
import DadosSementes from "./DadosSementes";
import DadosToleranciaAdversidades from "./DadosToleranciaAdversidades";
import InformacoesColeta from "./InformacoesColeta";
import styles from "@/components/DetalhamentoSementes/detalhamentoSementes.module.scss";
import Image from "next/image";
import DadosCaracteristicasAgronomicas from "./DadosCaracteristicasAgronomicas";
import ImagensSementes from "./ImagensSementes";
import { getStorageItem } from "@/utils/localStore";
import HeaderDetalhamento from "../HeaderDetalhamento";

const DetalhamentoSementes = ({ diretorioAnterior, diretorioAtual, hrefAnterior, sementes, backDetalhamento }) => {

    const [role, setRole] = useState(getStorageItem("userRole"));

    const finalidades = {
        etilica: false,
        naoEtilica: false,
        inNatura: false,
        forragem: false,
        processamento: false,
        outra: false,
        outraFinalidade: 'Outra Finalidade',
    };
    
    sementes?.finalidades?.forEach(finalidade => {
        if (finalidade.nome === 'etilica') finalidades.etilica = true;
        if (finalidade.nome === 'naoEtilica') finalidades.naoEtilica = true;
        if (finalidade.nome === 'inNatura') finalidades.inNatura = true;
        if (finalidade.nome === 'forragem') finalidades.forragem = true;
        if (finalidade.nome === 'processamento') finalidades.processamento = true;
        if (finalidade.nome === 'outra') finalidades.outra = true;
    });

    const initialValues = {
        responsavelTecnico: {
            nome: sementes?.responsavelTecnico?.nome,
            cpf: sementes?.responsavelTecnico?.cpf,
            numeroConselho: sementes?.responsavelTecnico?.numeroConselho,
            estadoConselho: sementes?.responsavelTecnico?.estadoConselho,
        },
        cultura: {
            cultura: sementes?.cultura?.cultura,
            genero: sementes?.cultura?.genero,
        },
        nome: sementes?.nome,
        nomePopular: sementes?.nomePopular,
        descricao: sementes?.descricao,
        pragas: sementes?.pragas,
        dominioPublico: sementes?.dominioPublico,
        polinizaacaoAbertaMelhorada: sementes?.polinizaacaoAbertaMelhorada,
        regiaoColetaDados: sementes?.regiaoColetaDados,
        altitudeMaxima: sementes?.altitudeMaxima,
        altitudeMinima: sementes?.altitudeMinima,
        caracteristicasPositiva: sementes?.caracteristicasPositiva,
        caracteristicasNegativas: sementes?.caracteristicasNegativas,
        doencas: sementes?.doencas,
        regiaoAdaptacaoCultivo: sementes?.regiaoAdaptacaoCultivo,
        finalidades: sementes?.finalidades?.map(f => f.nome) || [],
        caracteristicasAgronomicas: {
            cicloFenologico: sementes?.caracteristicasAgronomicas?.cicloFenologico,
            standRecomendado: sementes?.caracteristicasAgronomicas?.standRecomendado,
            produtividade: sementes?.caracteristicasAgronomicas?.produtividade,
            altitudePlanta: sementes?.caracteristicasAgronomicas?.altitudePlanta,
            pesoMilgraos: sementes?.caracteristicasAgronomicas?.pesoMilgraos,
            pesoHectolitro: sementes?.caracteristicasAgronomicas?.pesoHectolitro,
            tipoGrão: sementes?.caracteristicasAgronomicas?.tipoGrão,
            corGrao: sementes?.caracteristicasAgronomicas?.corGrao,
            corCaule: sementes?.caracteristicasAgronomicas?.corCaule,
            corFolha: sementes?.caracteristicasAgronomicas?.corFolha,
            corFLor: sementes?.caracteristicasAgronomicas?.corFLor,
            habitoCrescimento: sementes?.caracteristicasAgronomicas?.habitoCrescimento,
            empalhamento: {
                tipo: sementes?.caracteristicasAgronomicas?.empalhamento?.tipo,
            },
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
        },
    };

    const [etapas, setEtapas] = useState(0);
    const [editar, setEditar] = useState(false);

    const { mutate } = useMutation((values) => {
        // Aqui você coloca a lógica de envio dos dados para o servidor ou outra operação de mutação
    });

    return (
        <div id="header" className={styles.container}>
            {role === "ROLE_GERENTE" || role === "ROLE_AGRICULTOR" ? (

                <HeaderNavegacao
                    diretorioAnterior={diretorioAnterior}
                    diretorioAtual={diretorioAtual}
                    hrefAnterior={hrefAnterior}
                    etapas={etapas}

                />

            ) : (

                <HeaderDetalhamento
                    hrefAnterior={backDetalhamento}
                    diretorioAnterior="Home / Sementes / "
                    diretorioAtual="Detalhamento"
                />
            )}


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
                                        <Image src="/assets/sementeteste.png" alt="Foto do usuário" width={72} height={72} />
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
                                <DadosTecnicos formik={formik} editar={editar} />
                                <DadosSementes formik={formik} editar={editar} />
                                <DadosCaracteristicasAgronomicas formik={formik} editar={editar} />
                                <DadosToleranciaAdversidades formik={formik} editar={editar} />
                                <InformacoesColeta formik={formik} editar={editar} />
                                {//<ImagensSementes/>
                                }

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