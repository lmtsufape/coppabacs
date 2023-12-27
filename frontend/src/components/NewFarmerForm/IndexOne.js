"use client"
import React, { useState } from "react";
import Input from "@/components/FormPattern/Forms/Input/input";
import GreenButton from "@/components/FormPattern/Buttons/GreenButton";
import styles from "@/components/NewFarmerForm/Index.module.scss";


export default function NewFarmerForm(){
    const [bankData, setBankData] = useState({
        banco:"",
        municipioBanco:"",
    })
    const [farmerData, setFarmerData] = useState({
        nome: "",
        dataNascimento: "",
        cpf: "",
        rg: "",
        ufRg: "",
        tituloEleitor: "",
        nis: "",
        escolaridade: "",
        endereco: "",
        municipio: "",
        uf: "",
        comunidade: "",
        dap: "",
        classPronaf: "",
    });

    function handleBankOnChange(event) {
        const { name, value } = event.target;
        setBankData({ ...bankData, [name]:value});
    }
    function handleFarmerOnChange(event) {
        const { name, value } = event.target;
        setFarmerData({ ...farmerData, [name]:value});
    }

    async function handleSubmit(event){
        event.preventDefault();
    }

    return(
        <div className={styles.boxForm}>
            <form onSubmit={handleSubmit}>
                <div className={styles.twoSidedForm}>
                    <div className={styles.twoSidedForm__largerFormSize}>
                    <Input
                        type="text"
                        text="Banco Comunitário de Sementes"
                        name="banco"
                        placeholder="Insira o banco comunitário"
                        value={bankData.banco}
                        onChange={handleBankOnChange}/>
                    </div>
                    <div className={styles.twoSidedForm__smallerFormSize}>
                    <Input
                        type="text"
                        text="Município"
                        name="municipioBanco"
                        placeholder="Insira o município do banco"
                        value={bankData.municipioBanco}
                        onChange={handleBankOnChange}/>
                        
                    </div>
                </div>
                <div className={styles.biggerFormSize}>                   
                        <Input
                        type="text"
                        text="Nome do Produtor"
                        name="nome"
                        placeholder="Insira seu nome"
                        value={farmerData.nome}
                        onChange={handleFarmerOnChange}/>
                </div>
                <div className={styles.threeSidedForm}>
                    <div className={styles.threeSidedForm__smallerFormSize}>
                        <Input
                            type="text"
                            text="Data de Nascimento"
                            name="dataNascimento"
                            placeholder="Insira sua data de nascimento"
                            value={farmerData.dataNascimento}
                            onChange={handleFarmerOnChange}/>
                    </div>
                    <div className={styles.threeSidedForm__smallerFormSize}>
                    <Input
                            type="text"
                            text="CPF"
                            name="cpf"
                            placeholder="Insira seu CPF"
                            value={farmerData.cpf}
                            onChange={handleFarmerOnChange}/>
                    </div>
                    <div className={styles.threeSidedForm__smallerFormSize}>
                    <Input
                            type="text"
                            text="RG"
                            name="rg"
                            placeholder="Insira seu RG"
                            value={farmerData.rg}
                            onChange={handleFarmerOnChange}/>
                    </div>
                </div>
                <div className={styles.threeSidedForm}>
                    <div className={styles.threeSidedForm__smallerFormSize}>
                        <Input
                            type="text"
                            text="UF"
                            name="ufRG"
                            placeholder="Insira o estado do seu RG"
                            value={farmerData.ufRg}
                            onChange={handleFarmerOnChange}/>
                    </div>
                    <div className={styles.threeSidedForm__smallerFormSize}>
                    <Input
                            type="text"
                            text="Título de Eleitor"
                            name="tituloEleitor"
                            placeholder="Insira o número do seu título"
                            value={farmerData.tituloEleitor}
                            onChange={handleFarmerOnChange}/>
                    </div>
                    <div className={styles.threeSidedForm__smallerFormSize}>
                        <Input
                            type="text"
                            text="NIS"
                            name="nis"
                            placeholder="Insira seu NIS"
                            value={farmerData.nis}
                            onChange={handleFarmerOnChange}/>
                    </div>
                </div>
                <div className={styles.largerFormSize}>
                    <Input
                            type="text"
                            text="Escolaridade"
                            name="escolaridade"
                            placeholder="Insira sua escolaridade"
                            value={farmerData.escolaridade}
                            onChange={handleFarmerOnChange}/>
                </div>
                <div className={styles.biggerFormSize}>
                    <Input
                            type="text"
                            text="Endereço"
                            name="endereco"
                            placeholder="Insira seu Endereço"
                            value={farmerData.endereco}
                            onChange={handleFarmerOnChange}/>
                </div>
                <div className={styles.threeSidedForm}>
                    <div className={styles.threeSidedForm__smallerFormSize}>
                    <Input
                            type="text"
                            text="Município"
                            name="municipio"
                            placeholder="Insira o seu município"
                            value={farmerData.municipio}
                            onChange={handleFarmerOnChange}/>
                    </div>
                    <div className={styles.threeSidedForm__smallerFormSize}>
                    <Input
                            type="text"
                            text="UF"
                            name="uf"
                            placeholder="Insira o Estado"
                            value={farmerData.uf}
                            onChange={handleFarmerOnChange}/>
                    </div>
                    <div className={styles.threeSidedForm__smallerFormSize}>
                    <Input
                            type="text"
                            text="Comunidade"
                            name="comunidade"
                            placeholder="Insira sua comunidade"
                            value={farmerData.comunidade}
                            onChange={handleFarmerOnChange}/>
                    </div>
                </div>
                <div className={styles.twoSidedForm}>
                    <div className={styles.twoSidedForm__smallerFormSize}>
                    <Input
                            type="text"
                            text="Número do DAP"
                            name="dap"
                            placeholder="Insira o seu número DAP"
                            value={farmerData.dap}
                            onChange={handleFarmerOnChange}/>
                    </div>
                    <div className={styles.twoSidedForm__smallerFormSize}>
                    <Input
                            type="text"
                            text="Classificação no PRONAF"
                            name="pronaf"
                            placeholder="Insira sua classificação"
                            value={farmerData.classPronaf}
                            onChange={handleFarmerOnChange}/>
                    </div>
                </div>
                <div className={styles.boxForm__buttonForm}>
                    <GreenButton
                        text="Continuar"/>
                </div>
            </form>
        </div>
    );
}