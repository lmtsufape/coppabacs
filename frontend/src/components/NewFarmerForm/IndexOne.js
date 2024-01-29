"use client"
import React, { useEffect, useState } from "react";
import Input from "@/components/FormPattern/Forms/Input/input";
import GreenButton from "@/components/FormPattern/Buttons/GreenButton/greenButton";
import WhiteButton from "@/components/FormPattern/Buttons/WhiteButton/whiteButton"
import styles from "@/components/NewFarmerForm/Index.module.scss";
import { postAgricultor } from "@/api/usuarios/agricultor/postAgricultor";
import { useMutation } from "react-query";


export default function NewFarmerForm() {

    const [ agricultor, setAgricultor] = useState({
        nome: "",
        email: "",
        senha: "",
        endereco: {
            nome: "",
            referencia: "",
            cidade: "",
            estado: "",
            municipio: "",
        },
        rg: "",
        cpf: "",
        dataNascimento: "",
        contato: "",
        nomePai: "",
        nomeMae: "",
        nis: "",
        tituloEleitor: "",
        sexo: "",
    });


    function handleAgricultor(event) {
        const { name, value } = event.target;
        setAgricultor({ ...agricultor, [name]: value });
    }

    async function handleSubmit(event) {
        event.preventDefault();
    }


    const { state, mutate } = useMutation(
        async () => {
            return postAgricultor(agricultor);
        }, {
            onSucess: (res) => {
                console.log(res);
                setAgricultor(res.data);
            },
            onError: (error) => {
                console.log(error)
            }
        }
    );

    return (
        <div className={styles.boxForm}>
            <form onSubmit={handleSubmit}>
                   
                <div className={styles.twoSidedForm} >
                
                    <div className={styles.twoSidedForm__smallerFormSize}>
                        <Input
                            type="text"
                            text="Email"
                            name="email"
                            placeholder="Insira seu email"
                            value={agricultor.email}
                            onChange={handleAgricultor} />
                    </div>
                    <div className={styles.twoSidedForm__smallerFormSize}>
                        <Input
                            type="text"
                            text="Senha"
                            name="senha"
                            placeholder="Insira seu nome"
                            value={agricultor.senha}
                            onChange={handleAgricultor} />
                    </div>
                
                </div>
                <div className={styles.twoSidedForm} >
                    <div className={styles.twoSidedForm__smallerFormSize} /*Nome, Email, Senha */>
                        <Input
                            type="text"
                            text="Nome do Produtor"
                            name="nome"
                            placeholder="Insira seu nome"
                            value={agricultor.nome}
                            onChange={handleAgricultor} />
                    </div>
                    <div className={styles.twoSidedForm__smallerFormSize} /*Nome, Email, Senha */>
                        <Input
                            type="text"
                            text="Contato"
                            name="contato"
                            placeholder="Insira seu Contato"
                            value={agricultor.contato}
                            onChange={handleAgricultor} />
                    </div>
                </div>
                <div className={styles.threeSidedForm} /*Data Nascimento, Cpf, RG, RGuf, TItulo, NIS */>
                    <div className={styles.threeSidedForm__smallerFormSize}>
                        <Input
                            type="text"
                            text="NomeMae"
                            name="nomeMae"
                            placeholder="nome da mae"
                            value={agricultor.nomeMae}
                            onChange={handleAgricultor} />
                    </div>
                    <div className={styles.threeSidedForm__smallerFormSize}>
                        <Input
                            type="text"
                            text="nomePai"
                            name="nomePai"
                            placeholder="nome do pai"
                            value={agricultor.nomePai}
                            onChange={handleAgricultor} />
                    </div>
                    <div className={styles.threeSidedForm__smallerFormSize}>
                        <Input
                            type="text"
                            text="sexo"
                            name="sexo"
                            placeholder="Insira seu sexo"
                            value={agricultor.sexo}
                            onChange={handleAgricultor} />
                    </div>
                </div>
                <div className={styles.threeSidedForm} /*Data Nascimento, Cpf, RG, RGuf, TItulo, NIS */>
                    <div className={styles.threeSidedForm__smallerFormSize}>
                        <Input
                            type="text"
                            text="Data de Nascimento"
                            name="dataNascimento"
                            placeholder="Insira sua data de nascimento"
                            value={agricultor.dataNascimento}
                            onChange={handleAgricultor} />
                    </div>
                    <div className={styles.threeSidedForm__smallerFormSize}>
                        <Input
                            type="text"
                            text="CPF"
                            name="cpf"
                            placeholder="Insira seu CPF"
                            value={agricultor.cpf}
                            onChange={handleAgricultor} />
                    </div>
                    <div className={styles.threeSidedForm__smallerFormSize}>
                        <Input
                            type="text"
                            text="RG"
                            name="rg"
                            placeholder="Insira seu RG"
                            value={agricultor.rg}
                            onChange={handleAgricultor} />
                    </div>
                </div>
                <div className={styles.threeSidedForm}>
                    <div className={styles.threeSidedForm__smallerFormSize}>
                        <Input
                            type="text"
                            text="Título de Eleitor"
                            name="tituloEleitor"
                            placeholder="Insira o número do seu título"
                            só       value={agricultor.tituloEleitor}
                            onChange={handleAgricultor} />
                    </div>
                    <div className={styles.threeSidedForm__smallerFormSize}>
                        <Input
                            type="text"
                            text="Nis"
                            name="nis"
                            placeholder="Insira seu NIS"
                            value={agricultor.nis}
                            onChange={handleAgricultor} />
                    </div>
                </div>
                
                <div className={styles.threeSidedForm}>
                    <div className={styles.threeSidedForm__smallerFormSize}>
                        <Input
                            type="text"
                            text="Endereco"
                            name="endereco"
                            placeholder="Insira o seu Endereco"
                            value={agricultor.endereco.nome }
                            onChange={handleAgricultor} />
                    </div>
                    <div className={styles.threeSidedForm__smallerFormSize}>
                        <Input
                            type="text"
                            text="Cidade"
                            name="cidade"
                            placeholder="Insira cidade"
                            value={agricultor.endereco.cidade}
                            onChange={handleAgricultor} />
                    </div>
                    <div className={styles.threeSidedForm__smallerFormSize}>
                        <Input
                            type="text"
                            text="UF"
                            name="uf"
                            placeholder="Insira o UF"
                            value={agricultor.endereco.estado}
                            onChange={handleAgricultor} />
                    </div>
                </div>
                <div className={styles.threeSidedForm}>
                    
                    <div className={styles.threeSidedForm__smallerFormSize}>
                        <Input
                            type="text"
                            text="Comunidade"
                            name="comunidade"
                            placeholder="Insira sua comunidade"
                            value={agricultor.endereco.municipio}
                            onChange={handleAgricultor} />
                    </div>
                    <div className={styles.threeSidedForm__smallerFormSize}>
                        <Input
                            type="text"
                            text="Referencia"
                            name="referencia"
                            placeholder="Insira o Referencia"
                            value={agricultor.endereco.referencia}
                            onChange={handleAgricultor} />
                    </div>
                </div>
                
                <div className={styles.boxForm__buttonForm}>
                    <WhiteButton
                        text="Voltar" />

                    <GreenButton
                        text="enviar" onClick={() => mutate()} />
                </div>
            </form>
        </div>
    );
}