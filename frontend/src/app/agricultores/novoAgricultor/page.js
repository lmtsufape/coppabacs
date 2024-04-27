import React from "react";
import AgricultorForm from "@/components/AgricultorForm";
import Footer from "@/components/Footer";
import styles from "@/app/agricultores/novoAgricultor/index.module.scss"

export default function NewRegisterFarmer() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.pageContainer__content}>
                <AgricultorForm diretorioAnterior="Home / Agricultores /" diretorioAtual="Novo Agricultor" hrefAnterior="/agricultores" />
            </div>
        </div>
    );
}