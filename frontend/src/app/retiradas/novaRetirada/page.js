import React from "react";
import styles from "@/app/agricultores/novoAgricultor/index.module.scss"
import TransacaoForm from "@/components/TransacaoForm";

export default function NewTrasacao() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.pageContainer__content}>
                <TransacaoForm
                    diretorioAnterior="Home / Retiradas /"
                    diretorioAtual="Nova Retirada"
                    hrefAnterior="/retiradas"
                />
            </div>

        </div>
    );
}