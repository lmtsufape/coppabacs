import { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import style from './detalhamentoBanco.module.scss';
import styles from "../ListBancoSementes/list.module.scss";

import HeaderNavegacao from '../HeaderNavegacao';
import DadosBanco from './DadosBanco';
import DadosEndereco from './DadosEndereco';
import DadosObjetosBanco from './ObjetosBanco';
import ImagensBanco from './ImagensBanco';
import Link from 'next/link';
import { useMutation } from 'react-query';
import { putBancoId } from '@/api/bancoSementes/putBancoId';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { getStorageItem } from '@/utils/localStore';
import HeaderDetalhamento from '../HeaderDetalhamento';
import ListAgricultoresBanco from '../ListAgricultoresBanco';
import ListSementesBanco from "@/components/ListSementesBanco";
import ListTransacoes from '../ListTransacoes';
import { postArquivo } from '@/api/arquivos/postArquivo';
import ButtonsHeader from '../ButtonsHeader';
import HeaderButton from '../ButtonsHeader/HeaderButton';

const DetalhamentoBanco = ({ diretorioAnterior, diretorioAtual, hrefAnterior, banco, usuario, backDetalhamento }) => {
  const [role, setRole] = useState(getStorageItem("userRole"));
  const [agricultoresBanco, setAgricultoresBanco] = useState(null);
  const [sementesBanco, setSementesBanco] = useState(null);
  const [doacoesBanco, setDoacoesBanco] = useState(null);
  const [retiradasBanco, setRetiradasBanco] = useState(null);
  const [editar, setEditar] = useState(false);
  const [open, setOpen] = useState(false);
  const [imagensArquivos, setImagensArquivos] = useState([]);
  const [formData, setFormData] = useState({
    nome: '',
    comunidade: '',
    anoFundacao: '',
    historiaBanco: '',
    variedadesTrabalhadas: '',
    responsavel: '',
    contato: '',
    endereco: {
      logradouro: '',
      referencia: '',
      complemento: '',
      cidade: '',
      estado: '',
      cep: '',
      numero: '',
      bairro: ''
    },
    objetos: {
      bombona: '',
      peneiraSelecao: '',
      balanca: '',
      armario: '',
      plantadeira: '',
      lona: '',
      batedeiraCereal: ''
    },
    imagens: []
  });
  useEffect(() => {
    if (banco) {
      setFormData({
        nome: banco.nome || '',
        comunidade: banco.comunidade || '',
        anoFundacao: banco.anoFundacao || '',
        historiaBanco: banco.historiaBanco || '',
        variedadesTrabalhadas: banco.variedadesTrabalhadas || '',
        endereco: banco.endereco || {},
        objetos: banco.objetos || {},
        responsavel: banco.responsavel || '',
        contato: banco.contato || '',
        imagens: banco.imagens || []
      });
    }
  }, [banco]);
  const handleBackToBank = () => {
    setAgricultoresBanco(null);
    setSementesBanco(null);
    setRetiradasBanco(null);
    setDoacoesBanco(null);
  };

  const mutation = useMutation(newData => putBancoId(newData, banco.id), {
    onSuccess: () => {
      console.log('Dados atualizados com sucesso');
      setEditar(false)
      window.location.reload();
      backDetalhamento();
    },
    onError: (error) => {
      console.error('Erro ao tentar atualizar os dados:', error);
    }
  });

  const handleSubmit = async (values, { setSubmitting, setFieldValue }) => {
    setSubmitting(true);
    try {
      console.log("Uploading images...");
      console.log("Values:", values);
      const imageUrls = await postArquivo(imagensArquivos);
      console.log("Images uploaded, URLs:", imageUrls);

    // Garantir que values.imagens é um array antes de concatenar
    if (!Array.isArray(values.imagens)) {
      values.imagens = [];
  }

  // Adicionar os novos URLs ao array existente de values.imagens
  values.imagens = values.imagens.concat(imageUrls);

      console.log("Submitting post:", values);
      mutation.mutate(values);
    } catch (error) {
      console.error("Error uploading images or submitting post", error);
      setErrorMessage("Error uploading images or submitting post");
    } finally {
      setSubmitting(false);
    }
  };

  if (agricultoresBanco) {
    return (
      <ListAgricultoresBanco
        diretorioAnterior={`Home / Bancos Sementes / `}
        diretorioAtual="Agricultores"
        hrefAnterior="/bancoSementes"
        table1="Nome"
        table2="Função"
        table3="Ação"
        agricultoresBanco={handleBackToBank}
        bancoId={banco.id}
      />
    )
  }
  if (sementesBanco) {
    return (
      <ListSementesBanco
        diretorioAnterior={`Home / Bancos Sementes / `}
        diretorioAtual="Sementes"
        hrefAnterior={handleBackToBank}
        bancoId={banco.id}
      />
    )
  }
  if (doacoesBanco) {
    return (
      <ListTransacoes
        diretorioAnterior="Home / Bancos de Sementes /"
        diretorioAtual="Doações"
        hrefAnterior={handleBackToBank}
        tipoTransacao={"Doacao"}
        bancoId={banco.id}
      />
    )
  }
  if (retiradasBanco) {
    return (
      <ListTransacoes
        diretorioAnterior="Home / Bancos de Sementes /"
        diretorioAtual="Retiradas"
        hrefAnterior={handleBackToBank}
        tipoTransacao={"Retirada"}
        bancoId={banco.id}
      />
    )
  }
  return (
    <div id="header">
      {usuario === "coordenador" || usuario === "agricultor" ? (
        <HeaderNavegacao
          diretorioAnterior={diretorioAnterior}
          diretorioAtual={diretorioAtual}
          hrefAnterior={hrefAnterior}
        />
      ) : (

        <HeaderDetalhamento
          hrefAnterior={backDetalhamento}
          diretorioAnterior="Home / Bancos de Sementes / "
          diretorioAtual="Detalhes"

        />
      )
      }
      {role === "ROLE_COPPABCS" && (
        <>
          <div className={styles.header}>
            <div className={styles.header__container}>
              <button>
                <h1>
                  Adicionar Responsável
                </h1>
              </button>
              <div className={styles.header__container_buttons}>
              </div>
            </div>
          </div>

        </>
      )}
      <div className={style.container__ContainerForm}>
        <Formik
          initialValues={formData}
          enableReinitialize
          onSubmit={handleSubmit}
        >

          {formik => (
            <Form className={style.container__ContainerForm_form}>
              <div className={style.container__profile}>
                <div className={style.container__profile_img}>
                  <Image src="/assets/bancoteste.png" alt="Foto do usuário" width={72} height={72} />
                  <h1>{banco?.nome}</h1>
                </div>
                {role === "ROLE_COPPABACS" && (
                  <>
                    <ButtonsHeader bcStyle={style}>
                      <HeaderButton hrefLink="#" imageSrc="/assets/iconAssociates.svg" text="Agricultores" onClick={() => setAgricultoresBanco(true)} />
                      <HeaderButton hrefLink="#" imageSrc="/assets/iconSeedGreen.svg" text="Sementes" onClick={() => setSementesBanco(true)} />
                      <HeaderButton hrefLink="#" imageSrc="/assets/iconDoacaoDeSementes.svg" text="Doações" onClick={() => setDoacoesBanco(true)} />
                      <HeaderButton hrefLink="#" imageSrc="/assets/iconRetiradaDeSementes.svg" text="Retiradas" onClick={() => setRetiradasBanco(true)} />
                    </ButtonsHeader>
                  </>
                )}
              </div>
              <DadosBanco formik={formik} editar={editar} />
              <DadosEndereco formik={formik} editar={editar} />
              <DadosObjetosBanco formik={formik} editar={editar} />
              <ImagensBanco formik={formik} editar={editar} setImagensArquivos={setImagensArquivos} />
              {
                (usuario === "coppabacs" || usuario === "admin") && (
                  <div>
                    {editar ? (
                      // Bloco quando 'editar' é true
                      <div className={style.container__profile_containerButton}>
                        <button
                          type="button"
                          onClick={() => setEditar(false)}
                          className={style.container__profile_buttonDesativar}>
                          <span>Cancelar</span>
                        </button>
                        <button
                          type="submit"
                          className={style.container__profile_button}>
                          <span>Salvar</span>
                        </button>
                      </div>
                    ) : (
                      // Bloco quando 'editar' é false
                      <div className={style.container__profile_containerButton}>
                        <button
                          type="button"
                          onClick={() => setEditar(true)}
                          className={style.container__profile_button}>
                          <span>Editar</span>
                          <Image src="/assets/iconLapis.svg" alt="editar perfil" width={15} height={15} />
                        </button>

                      </div>
                    )}
                  </div>
                )
              }

            </Form>
          )}
        </Formik>
      </div>
    </div >
  );
}

export default DetalhamentoBanco;
