"use client"

import { useMutation } from "react-query";

import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from 'yup';

import style from "./detalhamentoUsuario.module.scss";

import HeaderNavegacao from "../HeaderNavegacao";

import Image from "next/image";
import { validarAgricultor } from "@/api/usuarios/agricultor/validarAgricultor";
import { useRouter } from "next/navigation";
import { patchAgricultor } from "@/api/usuarios/agricultor/patchAgricultor";
import { patchCoppabacs } from "@/api/usuarios/coppabacs/patchCoppabacs";
import { patchCoordenador } from "@/api/usuarios/coordenador/patchCoordenador";
import DadosTransacao from "../TransacaoForm/DadosTransacao";
import Link from "next/link";


const DetalhamentoTransacao = ({ diretorioAnterior, diretorioAtual, hrefAnterior, usuario }) => {

  const router = useRouter();
  const [etapas, setEtapas] = useState(0);
  const [editar, setEditar] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    nome: '',
    nomePopular: '',
    contato: '',
    cpf: '',
    dataNascimento: '',
    sexo: '',
    endereco: {
      estado: '',
      cidade: '',
      bairro: '',
      nome: '',
      numero: '',
      referencia: '',
    },
    bancoId: '',
    atividadeRural: {
      caprino: '',
      fruticultura: '',
      avicultura: '',
      agriculturaMilho: '',
      suinoCultura: '',
      aquiCultura: '',
      apicultura: '',
      agriculturaFeijao: '',
      pecuaria: '',
      pescaArtesanal: '',
      agriculturaSequeira: '',
      outra: '',
      outraAtividade: '',
    },
    producaoSementes: {
      cultura: '',
      variedade: '',
      areaPlantada: '',
      previsaoVenda: '',
    }
  })

  useEffect(() => {
    if (usuario) {
      setFormData({
        email: usuario.email || '',
        nome: usuario.nome || '',
        nomePopular: usuario.nomePopular || '',
        contato: usuario.contato || '',
        cpf: usuario.cpf || '',
        dataNascimento: usuario.dataNascimento || '',
        sexo: usuario.sexo || '',
        endereco: usuario.endereco || {},
        bancoId: usuario.bancoId || '',
        atividadeRural: usuario.atividadeRural || {},
        producaoSementes: usuario.producaoSementes || {}
      })
    }
  }, [usuario]);


  const mutationAprovacao = useMutation(() => validarAgricultor(usuario.id), {
    onSuccess: () => {
      console.log('Usuario aprovado com sucesso!');
      router.push(`${hrefAnterior}`);
    },
    onError: (error) => {
      console.error('Erro ao aprovar usuario', error);
    }
  })
  const mutationUpdateAgricultor = useMutation(newData => patchAgricultor(newData, usuario.id), {
    onSuccess: () => {
      console.log('Dados atualizados com sucesso');
      router.push('/agricultores');
    },
    onError: (error) => {
      console.error('Erro ao tentar atualizar os dados', error)
    }
  })
  const mutationUpdateCoordenador = useMutation(newData => patchCoordenador(newData, usuario.id), {
    onSuccess: () => {
      console.log('Dados atualizados com sucesso');
      router.push('/coordenadores');
    },
    onError: (error) => {
      console.error('Erro ao tentar atualizar os dados', error)
    }
  })
  const mutationUpdateFuncionario = useMutation(newData => patchCoppabacs(newData, usuario.id), {
    onSuccess: () => {
      console.log('Dados atualizados com sucesso');
      router.push('/funcionarios');
    },
    onError: (error) => {
      console.error('Erro ao tentar atualizar os dados', error)
    }
  })
  console.log(usuario)
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
          enableReinitialize
          onSubmit={(values, { setSubmitting }) => {
            if (hrefAnterior === "/funcionarios") {
              mutationUpdateFuncionario.mutate(values)
            } else if (hrefAnterior === "/gerentes") {

            } else if (hrefAnterior === "/agricultores") {
              mutationUpdateAgricultor.mutate(values);
            }

          }}
        >
          {(formik) => {
            return (

              <Form
                className={style.container__ContainerForm_form}
              >
                <div className={style.container__profile}>
                <div className={style.container__profile_img}>
                </div>
                  {editar === false ? (
                    <div className={style.container__profile_containerButton}>

                      <button
                        onClick={() => setEditar(true)}
                        className={style.container__profile_button}>

                        <span>Editar</span>
                        <Image src="/assets/iconLapis.svg" alt="editar perfil" width={25} height={25} />
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
                          type="submit"
                          className={style.container__profile_button}>
                          <span>Salvar</span>
                        </button >
                      </div>
                    </>
                  )}

                </div>

                <DadosTransacao formik={formik} editar={editar} hrefAnterior={hrefAnterior} />

              </Form >
            )
          }
          }
        </Formik >
      </div >

    </div >
  );
}


export default DetalhamentoTransacao;