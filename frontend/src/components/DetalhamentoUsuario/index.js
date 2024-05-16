"use client";

import { useMutation } from "react-query";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from 'yup';
import style from "./detalhamentoUsuario.module.scss";
import HeaderNavegacao from "../HeaderNavegacao";
import DadosForm from "./DadosUsuario";
import DadosEndereco from "./DadosEndereco";
import DadosSementes from "./DadosSementes";
import Image from "next/image";
import { validarAgricultor } from "@/api/usuarios/agricultor/validarAgricultor";
import { useRouter } from "next/navigation";
import { patchAgricultor } from "@/api/usuarios/agricultor/patchAgricultor";
import { patchCoppabacs } from "@/api/usuarios/coppabacs/patchCoppabacs";
import { patchCoordenador } from "@/api/usuarios/coordenador/patchCoordenador";
import HeaderDetalhamento from "../HeaderDetalhamento";
import { addSementesAgricultor } from "@/api/usuarios/agricultor/addSementes";
import { removeSementesAgricultor } from "@/api/usuarios/agricultor/removeSementes";


const DetalhamentoUsuario = ({ diretorioAnterior, diretorioAtual, hrefAnterior, usuario, backDetalhamento }) => {

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
    estadoCivil: '',
    conjuge: {
      nome: '',
      sexo: '',
    },
    sementes: [],
    sementesAdicionadas: [],
    sementesRemovidas: [],  
  });

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
        bancoId: usuario.bancoSementeId || '',
        sementes: usuario.sementes || {},
        estadoCivil: usuario.estadoCivil || '',
        conjuge: usuario.conjuge || {},
      });
    }
  }, [usuario]);

  const mutationAprovacao = useMutation(() => validarAgricultor(usuario.id), {
    onSuccess: () => {
      router.push(`${hrefAnterior}`);
    },
    onError: (error) => {
      console.error('Erro ao aprovar usuário', error);
    }
  });
  const mutationUpdateAgricultor = useMutation(async newData =>{ 
    
    const {sementesAdicionadas,sementesRemovidas, sementes,...resto} = newData;
   
    patchAgricultor(resto, usuario.id)
    if(sementesAdicionadas&& sementesAdicionadas.length > 0){
      await addSementesAgricultor(usuario.id,sementesAdicionadas);
    }
    if(sementesRemovidas && sementesRemovidas.length > 0){
      await removeSementesAgricultor(usuario.id,sementesRemovidas);
    }
  }, {
    onSuccess: () => {
     
      window.location.reload();
    },
    onError: (error) => {
      console.error('Erro ao tentar atualizar os dados', error);
    }
  });
  const mutationUpdateCoordenador = useMutation(newData => patchCoordenador(newData, usuario.id), {
    onSuccess: () => {
      window.location.reload();
    },
    onError: (error) => {
      console.error('Erro ao tentar atualizar os dados', error);
    }
  });
  const mutationUpdateFuncionario = useMutation(newData => patchCoppabacs(newData, usuario.id), {
    onSuccess: () => {
      router.push('/funcionários');
    },
    onError: (error) => {
      console.error('Erro ao tentar atualizar os dados', error);
    }
  });
  return (
    <div id="header" className={style.container}>
      <HeaderDetalhamento
        hrefAnterior={backDetalhamento}
        diretorioAnterior="Home / Agricultores / "
        diretorioAtual="Detalhes do Agricultor"

      />



      <div className={style.container__ContainerForm}>
        <Formik
          initialValues={formData}
          enableReinitialize
          onSubmit={(values, { setSubmitting }) => {
            if (hrefAnterior === "/funcionários") {
              mutationUpdateFuncionario.mutate(values);
            } else if (hrefAnterior === "/coordenadores") {
              mutationUpdateCoordenador.mutate(values);
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
                    <Image src="/assets/agricultorteste.png" alt="Foto do usuário" width={72} height={72} />
                    <h1>{usuario?.nome}</h1>
                  </div>
                  {hrefAnterior === "/agricultores" || hrefAnterior === "/funcionarios" ||hrefAnterior === "/coordenadores" ? (
                    <>
                      {editar === false ? (
                        <button
                          onClick={() => setEditar(true)}
                          className={style.container__profile_button}>

                          <span>Editar</span>
                          <Image src="/assets/iconLapis.svg" alt="editar perfil" width={20} height={20} />
                        </button >
                      ) : (
                        <button
                          onClick={() => setEditar(false)}
                          className={style.container__profile_button}>

                          <span>Salvar</span>
                          <Image src="/assets/iconLapis.svg" alt="editar perfil" width={20} height={20} />
                        </button >
                      )}
                    </>
                  ):("")}

                </div>

                <DadosForm formik={formik} editar={editar} hrefAnterior={hrefAnterior} />
                <DadosEndereco formik={formik} editar={editar} />
                {
                  hrefAnterior === "/agricultores" && (
                    <DadosSementes formik={formik} editar={editar} />
                  )
                }
                {
                  hrefAnterior === "/agricultores/solicitacoes" ? (
                    <div className={style.container__profile}>
                      <button
                        onClick={() => setEditar(true)}
                        className={style.container__profile_button}>

                        <span>Recusar Solicitação</span>
                        <Image src="/assets/iconLapis.svg" alt="Recusar" width={25} height={25} />
                      </button >
                      <button
                        onClick={() => mutationAprovacao.mutate(usuario.id)}
                        className={style.container__profile_button}>

                        <span>Aprovar Solicitação</span>
                        <Image src="/assets/iconLapis.svg" alt="Aprovar" width={25} height={25} />
                      </button >

                    </div>
                  ):("")
                }
              </Form >
            )
          }
          }
        </Formik >
      </div >

    </div >
  );
};


export default DetalhamentoUsuario;