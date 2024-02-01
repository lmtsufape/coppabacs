"use client"

import { useMutation } from "react-query";
import { useState } from "react";
import { postAgricultor } from "@/api/usuarios/agricultor/postAgricultor";
import style from "./agricultorForm.module.scss";
import { useFormik } from "formik";

import * as Yup from 'yup';


const AgricultorForm = () =>{

  // const errors = {nome: ""};
  const validate = (values) => {
    
  }
  const formik = useFormik({
    initialValues: { 
      nome: "",
      cpf: "",
      email: "",
      contato: "",
      endereco: {
        nome: "",
        referencia: "",
        cidade: "",
        estado: "",
        municipio: ""
      },
      senha: "",
      confirmarSenha: "",
      rg: "",
      nomeMae: "",
      nomePai: "",
      tituloEleitor: "",
      sexo: ""
    },
    validate,
    validationSchema: Yup.object({
        nome: Yup.string()
            .min(5, "Must be at least 5 characters or more")
            .required('Required')
    }),
    onSubmit: () => {
      console.log("valores formik: ", formik.values);
        mutate();
    },
}
)



  const {status, mutate} = useMutation(
    async () =>{
      console.log("valores formik: ", formik.values);
      return postAgricultor(
        formik.values
        );
    }, {
      onSuccess:(res) =>{
        console.log("data", res.data);
      },
      onError: (error) => {
        console.log(error);
      }
    }
  );

  const getEnter = e =>{
    if(e.key === 'Enter'){
      validateNewAgricultor();
    }
  }


 


  return(
    <div className={style.newAgricultor}>
      <div className={style.newAgricultor__inputContents}>
        <form className={style.newAgricultor__Form} onSubmit={formik.handleSubmit}>
          <input
          name="nome" 
          placeholder="Insira seu nome" 
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nome}
            
          />
          {formik.touched.nome && formik.errors.nome ? (
                            <span className={style.editItem__form__error}>{formik.errors.nome}</span>
                        ) : null}
          <input 
          name="cpf"
          placeholder="Insira seu cpf"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cpf}
          />
          <input
          name="email"
          placeholder="Insira seu email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          />
          <input
          name="contato"
          placeholder="Insira seu telefone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.contato}
          />
          <input
          name="endereco.nome"
          placeholder="Insira seu endereço"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.endereco.nome}
          />
          <input
          name="endereco.referencia"
          placeholder="Insira sua referencia"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.endereco.referencia}
          />
          <input
          name="endereco.cidade"
          placeholder="Insira sua cidade"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.endereco.cidade}
          />
          <input
          name="endereco.estado"
          placeholder="Insira seu estado"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.endereco.estado}
          />
          <input
          name="endereco.municipio"
          placeholder="Insira seu municipio"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.endereco.municipio}
          />
          <input
          name="senha"
          placeholder="Insira sua senha"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.senha}
          />
          <input
          name="confirmarSenha"
          placeholder="Confirme sua senha"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmarSenha}/>
          <input
          name="rg"
          placeholder="Insira seu rg"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.rg}
          />
          <input
          name="nomeMae"
          placeholder="Insira o nome da sua mãe"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nomeMae}
          />
          <input
          name="nomePai"
          placeholder="Insira o nome do seu pai"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nomePai}
          />
          <input
          name="tituloEleitor"
          placeholder="Insira seu titulo de eleitor"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.tituloEleitor}
          />
          <input
          name="sexo"
          placeholder="Insira seu sexo"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.sexo}
          />
          <button type="submit">
            <h1>Cadastrar</h1>
          </button>
        </form>
      </div>
    </div>
  );
}


export default AgricultorForm;