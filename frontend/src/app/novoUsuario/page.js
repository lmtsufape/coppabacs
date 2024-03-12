import React from "react";
import AgricultorForm from "@/components/AgricultorForm";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import styles from "@/app/agricultores/novoAgricultor/index.module.scss"
import UsuarioForm from "@/components/UsuarioForm";

export default function NewRegisterFarmer() {
    return (
        <div className={styles.pageContainer}>
            <Header hrefAnterior="/" />
            <div className={styles.pageContainer__content}>
                <UsuarioForm diretorioAnterior="Login / " diretorioAtual="Novo Usuario" hrefAnterior="/" />
            </div>
            <Footer />

        </div>
    );
}