"use client"

import { useMutation } from "react-query";

import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from 'yup';

import style from "./detalhamentoUsuario.module.scss";

import HeaderNavegacao from "../HeaderNavegacao";
import DadosForm from "./DadosUsuario";
import DadosEndereco from "./DadosEndereco";
import DadosAtividadesRurais from "./DadosAtividadesRurais";
import Image from "next/image";


const AgricultorForm = ({ diretorioAnterior, diretorioAtual, hrefAnterior, usuario }) => {

  const initialValues = {
    email: usuario?.email,
    nome: usuario?.nome,
    apelido: usuario?.apelido,
    contato: usuario?.contato,
    cpf: usuario?.cpf,
    dataNascimento: usuario?.dataNascimento,
    sexo: usuario?.sexo,
    endereco: {
      estado: usuario?.endereco?.estado,
      cidade: usuario?.endereco?.cidade,
      bairro: usuario?.endereco?.bairro,
      nome: usuario?.endereco?.nome,
      numero: usuario?.endereco?.numero,
      referencia: usuario?.endereco?.referencia,
    },
    bancoId: usuario?.bancoId,
    atividadeRural: {
      caprino: usuario?.atividadeRural?.caprino,
      fruticultura: usuario?.atividadeRural?.fruticultura,
      avicultura: usuario?.atividadeRural?.avicultura,
      agriculturaMilho: usuario?.atividadeRural?.agriculturaMilho,
      suinoCultura: usuario?.atividadeRural?.suinoCultura,
      aquiCultura: usuario?.atividadeRural?.aquiCultura,
      apicultura: usuario?.atividadeRural?.apicultura,
      agriculturaFeijao: usuario?.atividadeRural?.agriculturaFeijao,
      pecuaria: usuario?.atividadeRural?.pecuaria,
      pescaArtesanal: usuario?.atividadeRural?.pescaArtesanal,
      agriculturaSequeira: usuario?.atividadeRural?.agriculturaSequeira,
      outra: usuario?.atividadeRural?.outra,
      outraAtividade: usuario?.atividadeRural?.outraAtividade,
    },
    producaoSementes: {
      cultura: usuario?.producaoSementes?.cultura,
      variedade: usuario?.producaoSementes?.variedade,
      areaPlantada: usuario?.producaoSementes?.areaPlantada,
      previsaoVenda: usuario?.producaoSementes?.previsaoVenda,
    }
  }

  const agricultor = {
    email: "testes@1234",
    senha: "asdf",
    confirmarSenha: "asdf",
    nome: "Teste",
    nomePopular: "Testinho",
    contato: "contato",
    cpf: "12531251",
    dataNascimento: "31/10/1111",
    sexo: "masculino",
    endereco: {
      cep: "55345000",
      estado: "PE",
      cidade: "Garanhuns",
      bairro: "Centro",
      nome: "Rua",
      numero: "120",
      referencia: "Perto do teste",
    },
    bancoId: "1",
    conjuge: {
      nome: "Testinha",
      sexo: "Feminino",
    },
    atividadesRurais: [],
    producaoSementes: {
      cultura: "4",
      variedade: "4",
      areaPlantada: "4",
      previsaoVenda: "4",
    }
  }

  const [etapas, setEtapas] = useState(0);
  console.log("Usuario ", usuario);
  const [editar, setEditar] = useState(false);

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
          initialValues={agricultor}


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
                    <Image src="/assets/profile.jpeg" alt="Foto do usuário" width={72} height={72} />
                    <h1>{usuario?.nome}</h1>
                  </div>
                  {editar === false ? (
                    <button
                      onClick={() => setEditar(true)}
                      className={style.container__profile_button}>

                      <span>Editar</span>
                      <Image src="/assets/iconLapis.svg" alt="editar perfil" width={25} height={25} />
                    </button >
                  ) : (
                    <button
                      onClick={() => setEditar(false)}
                      className={style.container__profile_button}>
                      
                      <span>Salvar</span>
                      <Image src="/assets/iconLapis.svg" alt="editar perfil" width={25} height={25} />
                    </button >
                  )}

                </div>

                <DadosForm formik={formik} editar={editar} />
                <DadosEndereco formik={formik} editar={editar}/>
                <DadosAtividadesRurais formik={formik} editar={editar}/>
              </Form>
            )
          }
          }
        </Formik>
      </div>

    </div>
  );
}


export default AgricultorForm;