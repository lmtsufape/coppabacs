import React from "react";
import AgricultorForm from "@/components/AgricultorForm";
import Footer from "@/components/Footer";
import Header from "@/components/Home/Header";
import styles from "@/app/agricultores/novoAgricultor/index.module.scss"
import CoordenadorForm from "@/components/CoordenadorForm";

export default function NewRegisterFarmer() {
    return (
        <div className={styles.pageContainer}>
            <Header hrefAnterior="/coordenadores" />
            <div className={styles.pageContainer__content}>
                <CoordenadorForm
                    diretorioAnterior="Home / Coordenadores /"
                    diretorioAtual="Novo Coordenador"
                    hrefAnterior="/coordenadores" />
            </div>
            <Footer />

        </div>
    );
}