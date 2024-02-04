"use client"

import { useMutation } from "react-query";
import { postAgricultor } from "@/api/usuarios/agricultor/postAgricultor";

import { Form, Formik } from "formik";
import * as Yup from 'yup';

import style from "./agricultorForm.module.scss";

import HeaderNavegacao from "../HeaderNavegacao";
import DadosForm from "./DadosUsuario";
import DadosEndereco from "./DadosEndereco";
import DadosAtividadesRurais from "./DadosAtividadesRurais";
import Link from "next/link";
import { useState } from "react";
import { getStorageItem } from "@/utils/localStore";


const AgricultorForm = ({diretorioAnterior, diretorioAtual, hrefAnterior}) =>{

  const initialValues = {
    email: "",
    senha: "",
    confirmarSenha: "",
    nome: "",
    apelido: "",
    contato: "",
    cpf: "",
    dataNascimento: "",
    sexo: "",
    endereco: {
      estado: "",
      cidade: "",
      bairro: "",
      nome: "",
      numero: "",
      referencia: "",
    }    
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
        .required('Required')
  })
  const {status, mutate} = useMutation(
    async (values) =>{
        console.log("valores: ", values );
        const token = getStorageItem("token");
        console.log("token", token);
        return postAgricultor(values, token);
      }, {
        onSuccess:(res) =>{
          console.log("data", res);
        },
        onError: (error) => {
          console.log(error);

        }
      }
    );
  

  const [etapas, setEtapas] = useState(0);
  if(etapas < 0){
    setEtapas(0);
  }else if(etapas > 2){
    setEtapas(2);
  }


  return(
    <div id="header" className={style.container}>
      <HeaderNavegacao
        diretorioAnterior={diretorioAnterior}
        diretorioAtual={diretorioAtual}
        hrefAnterior={hrefAnterior}
        etapas={etapas}
        
      />
     
      <div className={style.container__header}>
        {etapas === 0 && <h1  className={style.container__header_currentNav}>1. Dados do agricultor</h1>}
        {etapas >= 1 && etapas <=2 && <h1 className={style.container__header_current}>1. Dados do agricultor</h1>}
        
        {etapas === 1 && <h1 className={style.container__header_currentNav}>2. Endereço do Endereço</h1>}
        {etapas != 1 &&  <h1 className={style.container__header_current}>2. Endereço do Endereço</h1>}

        {etapas === 2 && <h1 className={style.container__header_currentNav}>3. Atvidades rurais</h1>}
        {etapas >= 0 && etapas < 2 && <h1 className={style.container__header_current}>3. Atvidades rurais</h1>}
      
      </div>

      <div className={style.container__ContainerForm}>
        <Formik
          initialValues={initialValues}

        validationSchema={validateSchema}
              
        onSubmit= {(values, { setSubmitting }) => {
            console.log("valores", values);
            mutate(values);
        }}
        >
        {(formik) => {
            return(
              <Form 
              className={style.container__ContainerForm_form} 
              >
              
                {etapas === 0 && <DadosForm formik={formik} />}
                {etapas === 1 && <DadosEndereco formik={formik} />}
                {etapas === 0 && (
                  <div className={style.container__ContainerForm_buttons}>
                    <button>
                      <Link className={style.container__ContainerForm_buttons_link} href="/agricultores">
                        <h1>Voltar</h1>
                      </Link>
                    </button>
                    <button  onClick={() => setEtapas(etapas + 1)}>
                      <Link href="#header" className={style.container__ContainerForm_buttons_linkWhite}>
                       <h1>Continuar</h1>
                      </Link>
                    </button>
                  </div>
                )}
                {etapas === 1 &&(
                  <div className={style.container__ContainerForm_buttons}>
                    <button onClick={() => setEtapas(etapas - 1)}>
                    <Link href="#header" className={style.container__ContainerForm_buttons_link}>
                       <h1>Voltar</h1>
                      </Link>
                    </button>
                    <button onClick={() => setEtapas(etapas + 1)}>
                    <Link href="#header" className={style.container__ContainerForm_buttons_linkWhite}>
                       <h1>Continuar</h1>
                      </Link>
                    </button>
                  </div>
                )}
                {etapas === 2 && (
                  <div className={style.container__ContainerForm_buttons}>
                    <button onClick={() => setEtapas(etapas - 1)}>
                     <Link href="#header" className={style.container__ContainerForm_buttons_link}>
                       <h1>Voltar</h1>
                      </Link>
                    </button>
                    <button type="submit" >
                      <Link href="/agricultores" className={style.container__ContainerForm_buttons_linkWhite}>
                       <h1>Finalizar</h1>
                      </Link>                    </button>
                  </div>
                )}
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