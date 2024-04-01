import React from "react";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import styles from "@/app/agricultores/novoAgricultor/index.module.scss"
import FuncionarioForm from "@/components/FuncionarioForm";

export default function NewRegisterFarmer() {
    return (
        <div className={styles.pageContainer}>
            <Header hrefAnterior="/agricultores" />
            <div className={styles.pageContainer__content}>
                <FuncionarioForm
                    diretorioAnterior="Home / Funcionarios /"
                    diretorioAtual="Novo Funcionario"
                    hrefAnterior="/funcionarios" />
            </div>
            <Footer />

        </div>
    );
}