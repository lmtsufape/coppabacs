import React from "react";
import AgricultorForm from "@/components/AgricultorForm";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import styles from "@/app/agricultores/novoAgricultor/index.module.scss"
import TransacaoForm from "@/components/TransacaoForm";

export default function NewTrasacao() {
    return (
        <div className={styles.pageContainer}>
            <Header hrefAnterior="/transacoes" />
            <div className={styles.pageContainer__content}>
                <TransacaoForm
                    diretorioAnterior="Inicio / Transacoes /"
                    diretorioAtual="Nova Transacao"
                    hrefAnterior="/transacoes"
                />
            </div>
            <Footer />

        </div>
    );
}