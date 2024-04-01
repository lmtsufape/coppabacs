"use client"


import { Form, Formik } from "formik";
import { useState } from "react";

import style from "./detalhamentoBanco.module.scss";

import HeaderNavegacao from "../HeaderNavegacao";
import DadosEndereco from "./DadosEndereco";
import DadosAtividadesRurais from "./ObjetosBanco";
import Image from "next/image";
import DadosBanco from "./DadosBanco";
import DadosObjetosBanco from "./ObjetosBanco";
import ImagensBanco from "./ImagensBanco";
import Link from "next/link";


const DetalhamentoBanco = ({ diretorioAnterior, diretorioAtual, hrefAnterior, banco }) => {
  const initialValues = {
    nome: banco?.nome,
    comunidade: banco?.comunidade,
    anoFundacao: banco?.anaFundacao,
    historiaBanco: banco?.historiaBanco,
    variedadesTrabalhadas: banco?.variedadesTrabalhadas,
    endereco: {
      logradouro: banco?.endereco?.logradouro,
      referencia: banco?.endereco?.referencia,
      cidade: banco?.endereco?.cidade,
      estado: banco?.endereco?.estado,
      cep: banco?.endereco?.cep,
      numero: banco?.endereco?.numero,
      bairro: banco?.endereco?.bairro
    },
    objetos: {
      bombona: banco?.objetos?.bombona,
      peneiraSelecao: banco?.objetos?.peneiraSelecao,
      balanca: banco?.objetos?.balanca,
      armario: banco?.objetos?.armario,
      plantadeira: banco?.objetos?.plantadeira,
      lona: banco?.objetos?.lona,
      batedeiraCereal: banco?.objetos?.batedeiraCereal,
    },
  }



  const [etapas, setEtapas] = useState(0);
  const [editar, setEditar] = useState(false);

  return (
    <div id="header" >
      <HeaderNavegacao
        diretorioAnterior={diretorioAnterior}
        diretorioAtual={diretorioAtual}
        hrefAnterior={hrefAnterior}
        etapas={etapas}

      />



      <div className={style.container__ContainerForm}>
        <Formik
          initialValues={initialValues}


          onSubmit={(values, { setSubmitting }) => {
            mutate(values);
          }}
        >
          {(formik) => {
            return (

              <Form
                className={style.container__ContainerForm_form}
              >

                <div className={style.container__profile}>
                  <div className={style.container__profile_img}>
                    <h1>{banco?.nome}</h1>
                  </div>

                  <div className={style.container__header_containerButton}>

                    <Link className={style.container__header_link} href={`/bancoSementes/info/${banco.id}/sementes`}>
                      <button className={style.container__header_containerButton_button}>
                        <Image src="/assets/iconSeedGreen.svg" alt="Seed" width={27} height={26} />
                        Sementes
                      </button>
                    </Link>
                    <Link className={style.container__header_link} href={`/bancoSementes/info/${banco.id}/agricultores`}>

                      <button className={style.container__header_containerButton_button}>
                        <Image src="/assets/iconAssociates.svg" alt="Agricultores" width={27} height={26} />
                        Agricultores
                      </button>
                    </Link>
                  </div>
                  {editar === false ? (
                    <div className={style.container__profile_containerButton}>
                      <button
                        onClick={() => setEditar(true)}
                        className={style.container__profile_button}>

                        <span>Editar</span>
                        <Image src="/assets/iconLapis.svg" alt="editar perfil" width={25} height={25} />
                      </button >
                      <button
                        className={style.container__profile_buttonDesativar}>

                        <span>Desativar Banco</span>
                      </button >

                    </div>
                  ) : (
                    <>
                      <div className={style.container__profile_containerButton}>
                        <button
                          onClick={() => setEditar(false)}

                          className={style.container__profile_buttonDesativar}>

                          <span>Cancelar</span>
                        </button >
                        <button
                          onClick={() => setEditar(false)}
                          className={style.container__profile_button}>

                          <span>Salvar</span>
                        </button >
                      </div>
                    </>
                  )}

                </div>

                <DadosBanco formik={formik} editar={editar} />
                <DadosEndereco formik={formik} editar={editar} />
                <DadosObjetosBanco formik={formik} editar={editar} />
                <ImagensBanco />

              </Form>
            )
          }
          }
        </Formik>
      </div>

    </div>
  );
}


export default DetalhamentoBanco;