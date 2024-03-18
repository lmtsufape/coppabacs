import React from "react";
import AgricultorForm from "@/components/AgricultorForm";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import styles from "@/app/agricultores/novoAgricultor/index.module.scss"

export default function NewRegisterFarmer() {
    return (
        <div className={styles.pageContainer}>
            <Header hrefAnterior="/agricultores" />
            <div className={styles.pageContainer__content}>
                <AgricultorForm diretorioAnterior="Home / Agricultores /" diretorioAtual="Novo Agricultor" hrefAnterior="/agricultores" />
            </div>
            <Footer />

        </div>
    );
}