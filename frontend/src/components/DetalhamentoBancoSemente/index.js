import { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import style from './detalhamentoBanco.module.scss';
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

const DetalhamentoBanco = ({ diretorioAnterior, diretorioAtual, hrefAnterior, banco }) => {
  const [role, setRole] = useState(getStorageItem("userRole"));

  const router = useRouter();
  const [editar, setEditar] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    comunidade: '',
    anoFundacao: '',
    historiaBanco: '',
    variedadesTrabalhadas: '',
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
    }
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
        objetos: banco.objetos || {}
      });
    }
  }, [banco]);

  const mutation = useMutation(newData => putBancoId(newData, banco.id), {
    onSuccess: () => {
      console.log('Dados atualizados com sucesso');
      setEditar(false)
      router.push('/bancoSementes');
    },
    onError: (error) => {
      console.error('Erro ao tentar atualizar os dados:', error);
    }
  });

  return (
    <div id="header">
      <HeaderNavegacao
        diretorioAnterior={diretorioAnterior}
        diretorioAtual={diretorioAtual}
        hrefAnterior={hrefAnterior}
      />

      <div className={style.container__ContainerForm}>
        <Formik
          initialValues={formData}
          enableReinitialize
          onSubmit={(values, { setSubmitting }) => {
            mutation.mutate(values);
            setSubmitting(false);
          }}
        >
          
          {formik => (
            <Form className={style.container__ContainerForm_form}>
              <div className={style.container__profile}>
                <div className={style.container__profile_img}>
                <Image src="/assets/bancoteste.png" alt="Foto do usuário" width={72} height={72} />
                  <h1>{banco?.nome}</h1>
                </div>

                <div className={style.container__header_containerButton}>
                  {role === "ROLE_COPPABACS" && (
                    <>
                      <Link className={style.container__header_link} href={`/bancoSementes/info/${banco.id}/agricultores`}>
                        <button className={style.container__header_containerButton_button}>
                          <Image src="/assets/iconAssociates.svg" alt="Agricultores" width={27} height={26} />
                          <span className={style.container__header_containerButton_button_text}>Agricultores</span>
                          <span className={style.container__header_containerButton_button_shorttext}>Agric.</span>
                        </button>
                      </Link>
                      <Link className={style.container__header_link} href={`/bancoSementes/info/${banco.id}/sementes`}>
                        <button className={style.container__header_containerButton_button}>
                          <Image src="/assets/iconSeedGreen.svg" alt="Seed" width={27} height={26} />
                          <span className={style.container__header_containerButton_button_text}>Sementes</span>
                          <span className={style.container__header_containerButton_button_shorttext}>Sem.</span>
                        </button>
                      </Link>
                      <Link className={style.container__header_link} href={`/transacoes`}>
                        <button className={style.container__header_containerButton_button}>
                          <Image src="/assets/iconAssociates.svg" alt="Agricultores" width={27} height={26} />
                          <span className={style.container__header_containerButton_button_text}>Transações</span>
                          <span className={style.container__header_containerButton_button_shorttext}>Tran.</span>
                        </button>
                      </Link>
                    </>
                  )}
                </div>

              </div>
              <DadosBanco formik={formik} editar={editar} />
              <DadosEndereco formik={formik} editar={editar} />
              <DadosObjetosBanco formik={formik} editar={editar} />
              <ImagensBanco />

              {editar === false ? (
                <div className={style.container__profile_containerButton}>
                  <button
                    onClick={() => setEditar(true)}
                    className={style.container__profile_button}>

                    <span>Editar</span>
                    <Image src="/assets/iconLapis.svg" alt="editar perfil" width={15} height={15} />
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
                      type="submit"
                      className={style.container__profile_button}>
                      <span>Salvar</span>
                    </button >
                  </div>
                </>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default DetalhamentoBanco;
