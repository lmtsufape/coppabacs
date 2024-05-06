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

const DetalhamentoSementes = ({ diretorioAnterior, diretorioAtual, hrefAnterior, sementes }) => {

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
        
        regioesAdaptacaoCultivo: sementes?.regioesAdaptacaoCultivo,


        finalidades: {
            etilica: false,
            naoEtilica: false,
            inNatura: false,
            forragem: false,
            processamento: false,
            outra: false,
            outraFinalidade: 'Outra Finalidade',
        },  
        
        caracteristicasAgronomicas: {
            cicloFenologico: sementes?.caracteristicasAgronomicas?.cicloFenologico,
            standRecomendado: sementes?.caracteristicasAgronomicas?.standRecomendado,
            produtividade: sementes?.caracteristicasAgronomicas?.produtividade,
            
            altitudePlanta: sementes?.caracteristicasAgronomicas?.altitudePlanta,
            
            pesoMilGraos: sementes?.caracteristicasAgronomicas?.pesoMilGraos,

            pesoHectolitro: sementes?.caracteristicasAgronomicas?.pesoHectolitro,

            tipoGrao: sementes?.caracteristicasAgronomicas?.tipoGrao,

            corGrao: sementes?.caracteristicasAgronomicas?.corGrao,

            corCaule: sementes?.caracteristicasAgronomicas?.corCaule,
            corFolha: sementes?.caracteristicasAgronomicas?.corFolha,
            corFlor: sementes?.caracteristicasAgronomicas?.corFlor,
            habitoCrescimento: sementes?.caracteristicasAgronomicas?.habitoCrescimento,
        },
        
        empalhamento: {
            tipo: sementes?.empalhamento?.tipo,
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
    }

    const [etapas, setEtapas] = useState(0);
    const [editar, setEditar] = useState(false);

    const { mutate } = useMutation((values) => {
        // Aqui você coloca a lógica de envio dos dados para o servidor ou outra operação de mutação
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
                                <DadosCaracteristicasAgronomicas formik={formik} editar={editar}/>
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