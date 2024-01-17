"use client"
import React, { useState } from "react";
import Input from "@/components/FormPattern/Forms/Input/input";
import Textarea from "@/components/FormPattern/Forms/Textarea/textarea";
import GreenButton from "@/components/FormPattern/Buttons/GreenButton/greenButton";
import WhiteButton from "@/components/FormPattern/Buttons/WhiteButton/whiteButton"
import styles from "@/components/NewBankForm/Index.module.scss"
import Checkbox from "@/components/FormPattern/Forms/Checkbox/checkbox";
import Label from "@/components/FormPattern/Forms/Label/label";

export default function BankObjects() {
    async function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <div className={styles.boxForm}>
            <form onSubmit={handleSubmit}>
                <div className={styles.twoSidedForm}>
                    <div className={styles.twoSidedForm__largerFormSize}>
                        <Input
                            type="text"
                            text="Nome do Banco de Sementes"
                            name="nomeBanco"
                            placeholder="Insira o nome do banco"
                        //value={}
                        //onChange={}
                        />
                    </div>
                    <div className={styles.twoSidedForm__largerFormSize}>
                        <Input
                            type="text"
                            text="Nome do Banco de Sementes"
                            name="nomeBanco"
                            placeholder="Insira o nome do banco"
                        //value={}
                        //onChange={}
                        />

                    </div>
                </div>
                <div className={styles.twoSidedForm}>
                    <div className={styles.twoSidedForm__largerFormSize}>
                        <Input
                            type="text"
                            text="Nome do Banco de Sementes"
                            name="nomeBanco"
                            placeholder="Insira o nome do banco"
                        //value={}
                        //onChange={}
                        />
                    </div>
                    <div className={styles.twoSidedForm__largerFormSize}>
                        <Input
                            type="text"
                            text="Nome do Banco de Sementes"
                            name="nomeBanco"
                            placeholder="Insira o nome do banco"
                        //value={}
                        //onChange={}
                        />

                    </div>
                </div>
                <div className={styles.twoSidedForm}>
                    <div className={styles.twoSidedForm__largerFormSize}>
                        <Input
                            type="text"
                            text="Nome do Banco de Sementes"
                            name="nomeBanco"
                            placeholder="Insira o nome do banco"
                        //value={}
                        //onChange={}
                        />
                    </div>
                    <div className={styles.twoSidedForm__largerFormSize}>
                        <Input
                            type="text"
                            text="Nome do Banco de Sementes"
                            name="nomeBanco"
                            placeholder="Insira o nome do banco"
                        //value={}
                        //onChange={}
                        />

                    </div>
                </div>
                <div>
                    <div>
                        <div className={styles.largerFormSize}>
                            <Input
                                type="text"
                                text="Nome do Produtor"
                                name="nome"
                                placeholder="Insira seu nome"
                            //value={farmerData.nome}
                            //onChange={handleFarmerOnChange} 
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.boxForm__buttonForm}>
                    <WhiteButton
                        text="Voltar" />
                    <GreenButton
                        text="Continuar" />
                </div>
            </form>
        </div>
    )
}