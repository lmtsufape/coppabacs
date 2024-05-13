import React from "react";
import styles from "@/app/agricultores/novoAgricultor/index.module.scss"
import TransacaoForm from "@/components/TransacaoForm";

export default function novaDoacaoPage() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.pageContainer__content}>
                <TransacaoForm
                    diretorioAnterior="Home / Doações /"
                    diretorioAtual="Nova Doação"
                    hrefAnterior="/doacoes"
                />
            </div>

        </div>
    );
}