"use client"

import { useMutation } from "react-query";
import { useState } from "react";
import { postAgricultor } from "@/api/usuarios/agricultor/postAgricultor";
import style from "./agricultorForm.module.scss";
import { useFormik } from "formik";

import * as Yup from 'yup';


const AgricultorForm = () =>{

  const [newAgricultor, setNewAgricultor] = useState({
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
  });

  // const errors = {nome: ""};

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
})

  function validateNewAgricultor() {
    if (newAgricultor.nome === "") {
      alert("Preencha o campo nome");
    } else if (newAgricultor.cpf === "") {
      alert("Preencha o campo cpf");
    } else if (newAgricultor.email === "") {
      alert("Preencha o campo email");
    } else if (newAgricultor.telefone === "") {
      alert("Preencha o campo telefone");
    } else if (newAgricultor.endereco.nome === "") {
      alert("Preencha o campo endereço");
    } else if (newAgricultor.endereco.referencia === "") {
      alert("Preencha o campo referencia");
    } else if (newAgricultor.endereco.cidade === "") {
      alert("Preencha o campo cidade");
    } else if (newAgricultor.endereco.estado === "") {
      alert("Preencha o campo estado");
    } else if (newAgricultor.endereco.municipio === "") {
      alert("Preencha o campo municipio");
    } else if (newAgricultor.senha === "") {
      alert("Preencha o campo senha");
    } else if (newAgricultor.confirmarSenha === "") {
      alert("Preencha o campo confirmar senha");
    } else if (newAgricultor.rg === "") {
      alert("Preencha o campo rg");
    } else if (newAgricultor.cpf === "") {
      alert("Preencha o campo cpf");
    } else if (newAgricultor.nomeMae === "") {
      alert("Preencha o campo nome da mãe");
    } else if (newAgricultor.nomePai === "") {
      alert("Preencha o campo nome do pai");
    } else if (newAgricultor.tituloEleitor === "") {
      alert("Preencha o campo titulo de eleitor");
    } else if (newAgricultor.sexo === "") {
      alert("Preencha o campo sexo");
    } else {
      // Se todas as verificações passarem, chame o mutate
      setError("");
      mutate();
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
          name="endereco"
          placeholder="Insira seu endereço"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.endereco.nome}
          />
          <input
          name="referencia"
          placeholder="Insira sua referencia"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.endereco.referencia}
          />
          <input
          name="cidade"
          placeholder="Insira sua cidade"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.endereco.cidade}
          />
          <input
          name="estado"
          placeholder="Insira seu estado"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.endereco.estado}
          />
          <input
          name="municipio"
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