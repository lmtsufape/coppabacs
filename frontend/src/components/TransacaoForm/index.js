"use client"

import { useMutation } from "react-query";

import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from 'yup';

import style from "./agricultorForm.module.scss";

import HeaderNavegacao from "../HeaderNavegacao";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DadosTransacao from "./DadosTransacao/index";
import { postDoacao } from "@/api/transacoes/doacoes/posttDoacao";


const TransacaoForm = ({ diretorioAnterior, diretorioAtual, hrefAnterior }) => {

  const router = useRouter();
  const initialValues = {
    dataDoacao: "",
    descricao: "",
    agricultorId: "",
    itens: [
      {
        peso: "",
        sementesId: "",
        tabelaBancoSementesId: ""
      },
    ],
    bancoSementesId: "",
  }



  const validateSchema = Yup.object().shape({
    nome: Yup.string()
      .min(5, "O nome deve ter no mínimo 5 caracteres")
      .required('Required'),
    senha: Yup.string()
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .required('Required'),
    confirmarSenha: Yup.string()
      .min(8, "As senhas devem ser iguais")
      .oneOf([Yup.ref('senha'), null], 'As senhas não são iguais'), // Utilize oneOf para comparar as senhas
    contato: Yup.string()
      .min(11, "O contato deve ter no mínimo 11 caracteres")
      .required('Required'),
    dataNascimento: Yup.date()
      .max(new Date(), "A data de nascimento não pode ser maior que a data atual")
      .min(new Date(1, 1, 1900), "A data de nascimento não pode ser menor que 01/01/1900")
      .required('Required'),
  })

  const mutationDoacao = useMutation(newDoacao => postDoacao(newDoacao), {
    onSuccess: () => {
      console.log('Cadastro realizado com sucesso!')
      router.push('/doacoes')

    },
    onError: (error) => {
      console.log("Erro ao cadastrar novo coordenador", error);

    }
  }
  );

  const [etapas, setEtapas] = useState(0);
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
          initialValues={initialValues}

          validationSchema={validateSchema}

          onSubmit={(values, { setSubmitting }) => {
            console.log(values)
            mutationDoacao.mutate(values)
            setSubmitting(false)
          }}
        >
          {(formik) => {
            return (
              <Form
                className={style.container__ContainerForm_form}
              >
                <DadosTransacao formik={formik} />
                <div className={style.container__ContainerForm_buttons}>
                  <button onClick={() => setEtapas(etapas - 1)}>
                    <Link href="/doacoes" className={style.container__ContainerForm_buttons_link}>
                      <h1>Cancelar</h1>
                    </Link>
                  </button>
                  <button
                    type="submit"
                    onClick={() => mutationDoacao.mutate(formik.values)}
                    className={style.container__ContainerForm_buttons_linkWhite}>
                    <h1>Concluir</h1>
                  </button>
                </div>
              </Form>
            )
          }
          }
        </Formik>
      </div>
    </div>
  );
}


export default TransacaoForm;