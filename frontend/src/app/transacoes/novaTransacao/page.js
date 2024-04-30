import React from "react";
import styles from "@/app/agricultores/novoAgricultor/index.module.scss"
import TransacaoForm from "@/components/TransacaoForm";

export default function NewTrasacao() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.pageContainer__content}>
                <TransacaoForm
                    diretorioAnterior="Inicio / Transacoes /"
                    diretorioAtual="Nova Transacao"
                    hrefAnterior="/transacoes"
                />
            </div>

        </div>
    );
}