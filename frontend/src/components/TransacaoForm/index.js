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
import { postDoacao } from "@/api/transacoes/doacoes/postDoacao";
import { postRetirada } from "@/api/transacoes/retiradas/postRetirada";


const TransacaoForm = ({ diretorioAnterior, diretorioAtual, hrefAnterior }) => {

  const router = useRouter();
  const initialValuesDoacoes = {
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

  const initialValuesRetirada = {
    dataRetirada: "",
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

  const initialValues = hrefAnterior === "/doacoes" ? initialValuesDoacoes
    : hrefAnterior === "/retiradas" ? initialValuesRetirada
      : {}; // Default initial values if none match



  const validateSchema = Yup.object().shape({})

  const mutationDoacao = useMutation(newDoacao => postDoacao(newDoacao), {
    onSuccess: () => {
      router.push('/doacoes')

    },
    onError: (error) => {
      console.log("Erro ao cadastrar novo coordenador", error);

    }
  }
  );
  const mutationRetirada = useMutation(newRetirada => postRetirada(newRetirada), {

    onSuccess: () => {
      router.push('/retiradas')

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

            setSubmitting(false)
          }}
        >
          {(formik) => {
            return (
              <Form
                className={style.container__ContainerForm_form}
              >
                <DadosTransacao formik={formik} hrefAnterior={hrefAnterior} />
                <div className={style.container__ContainerForm_buttons}>
                  <button onClick={() => setEtapas(etapas - 1)}>
                    <Link href="/doacoes" className={style.container__ContainerForm_buttons_link}>
                      <h1>Cancelar</h1>
                    </Link>
                  </button>
                  <button
                    type="submit"
                    onClick={() => {
                      if (hrefAnterior === "/doacoes") {
                        mutationDoacao.mutate(formik.values)
                      } else if (hrefAnterior === "/retiradas") {
                        mutationRetirada.mutate(formik.values)
                      }
                    }}
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