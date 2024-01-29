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

  const {status, mutate} = useMutation(
    async () =>{
      return postAgricultor(newAgricultor);
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

  const formik = useFormik({
    initialValues: {
        newAgricultor: "",
    },
    validationSchema: Yup.object({
        senha: Yup.string()
            .min(5, "Must be at least 5 characters or more")
            .required('Required')
    }),
    onSubmit: () => {
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
          placeholder="Insira seu nome" 
          value={newAgricultor.nome}
          onChange={(e)=> setNewAgricultor({...newAgricultor, nome: e.target.value})}
          />
          <input 
          placeholder="Insira seu cpf"
          value={newAgricultor.cpf}
          onChange={(e)=> setNewAgricultor({...newAgricultor, cpf: e.target.value})}
          />
          <input
          placeholder="Insira seu email"
          value={newAgricultor.email}
          onChange={(e)=> setNewAgricultor({...newAgricultor, email: e.target.value})}
          />
          <input
          placeholder="Insira seu telefone"
          value={newAgricultor.contato}
          onChange={(e)=> setNewAgricultor({...newAgricultor, contato: e.target.value})}
          />
          <input
          placeholder="Insira seu endereço"
          value={newAgricultor.endereco.nome}
          onChange={(e)=> setNewAgricultor({...newAgricultor, endereco: {...newAgricultor.endereco, nome: e.target.value}})}
          />
          <input
          placeholder="Insira sua referencia"
          value={newAgricultor.endereco.referencia}
          onChange={(e)=> setNewAgricultor({...newAgricultor, endereco: {...newAgricultor.endereco, referencia: e.target.value}})}
          />
          <input
          placeholder="Insira sua cidade"
          value={newAgricultor.endereco.cidade}
          onChange={(e)=> setNewAgricultor({...newAgricultor, endereco: {...newAgricultor.endereco, cidade: e.target.value}})}
          />
          <input
          placeholder="Insira seu estado"
          value={newAgricultor.endereco.estado}
          onChange={(e)=> setNewAgricultor({...newAgricultor, endereco: {...newAgricultor.endereco, estado: e.target.value}})}
          />
          <input
          placeholder="Insira seu municipio"
          value={newAgricultor.endereco.municipio}
          onChange={(e)=> setNewAgricultor({...newAgricultor, endereco: {...newAgricultor.endereco, municipio: e.target.value}})}
          />
          <input
          placeholder="Insira sua senha"
          value={newAgricultor.senha}
          onChange={(e)=> setNewAgricultor({...newAgricultor, senha: e.target.value})}
          />
          <input
          placeholder="Confirme sua senha"
          value={newAgricultor.confirmarSenha}
          onChange={(e)=> setNewAgricultor({...newAgricultor, confirmarSenha: e.target.value})}
          />
          <input
          placeholder="Insira seu rg"
          value={newAgricultor.rg}
          onChange={(e)=> setNewAgricultor({...newAgricultor, rg: e.target.value})}
          />
          <input
          placeholder="Insira o nome da sua mãe"
          value={newAgricultor.nomeMae}
          onChange={(e)=> setNewAgricultor({...newAgricultor, nomeMae: e.target.value})}
          />
          <input
          placeholder="Insira o nome do seu pai"
          value={newAgricultor.nomePai}
          onChange={(e)=> setNewAgricultor({...newAgricultor, nomePai: e.target.value})}
          />
          <input
          placeholder="Insira seu titulo de eleitor"
          value={newAgricultor.tituloEleitor}
          onChange={(e)=> setNewAgricultor({...newAgricultor, tituloEleitor: e.target.value})}
          />
          <input
          placeholder="Insira seu sexo"
          value={newAgricultor.sexo}
          onChange={(e)=> setNewAgricultor({...newAgricultor, sexo: e.target.value})}
          />

        </form>
      </div>
      <div>
        <button onClick={()=> mutate()}>
          <h1>Cadastrar</h1>
        </button>
      </div>
    </div>
  );
}


export default AgricultorForm;