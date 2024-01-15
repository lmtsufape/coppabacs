"use client"
import React, { useState } from "react";
import Input from "@/components/FormPattern/Forms/Input/input";
import Select from "@/components/FormPattern/Forms/Select/select";
import GreenButton from "@/components/FormPattern/Buttons/GreenButton";
import styles from "@/components/NewBankForm/index.module.scss"
import Checkbox from "@/components/FormPattern/Forms/Checkbox/checkbox";
import Label from "@/components/FormPattern/Forms/Label/label";

export default function NewBank() {

    async function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className={styles.boxForm}>
            <form onSubmit={handleSubmit}>
                <div className={styles.biggerFormSize}>
                    <Input
                        type="text"
                        text="Nome do Banco de Sementes"
                        name="nomeBanco"
                        placeholder="Insira o nome do banco"
                    //value={}
                    //onChange={}
                    />
                </div>
                <div className={styles.twoSidedForm}>
                    <div className={styles.twoSidedForm__largerFormSize}>
                        <Input
                            type="text"
                            text="Responsável"
                            name="responsavel"
                            placeholder="Insira o nome do responsável"
                        //value={}
                        //onChange={}
                        />
                    </div>
                    <div className={styles.twoSidedForm__smallerFormSize}>
                        <Input
                            type="text"
                            text="Contato"
                            name="contato"
                            placeholder="Insira o contato"
                        //value={}
                        //onChange={}
                        />
                    </div>
                </div>
                <div className={styles.biggerFormSize}>
                    <Input
                        type="text"
                        text="Endereço"
                        name="endereco"
                        placeholder="Insira o endereço do banco"
                    //value={}
                    //onChange={}
                    />
                </div>
                <div className={styles.threeSidedForm}>
                    <div className={styles.threeSidedForm__smallerFormSize}>
                        <Input
                            type="text"
                            text="Comunidade"
                            name="comunidade"
                            placeholder="Insira a comunidade do banco"
                        //value={}
                        //onChange={}
                        />
                    </div>
                    <div className={styles.threeSidedForm__smallerFormSize}>
                        <Input
                            type="text"
                            text="Município"
                            name="municipio"
                            placeholder="Insira o município do banco"
                        //value={}
                        //onChange={}
                        />
                    </div>
                    <div className={styles.threeSidedForm__smallerFormSize}>
                        <Input
                            type="text"
                            text="Ano de Fundação"
                            name="anoFundacao"
                            placeholder="Insira o ano de fundação do banco"
                        //value={}
                        //onChange={}
                        />
                    </div>
                </div>
                <div>
                    <textarea
                        //value={}
                        //onChange={}
                        //rows={}
                        />
                </div>
                <div className={styles.boxForm__buttonForm}>
                    <GreenButton
                        text="Continuar" />
                </div>


            </form>

        </div>
    )
}