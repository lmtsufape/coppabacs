import React from "react";
import styles from "@/app/agricultores/novoAgricultor/index.module.scss"
import BancoForm from "@/components/BancoForm";

export default function novoBancoPage() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.pageContainer__content}>
                <BancoForm 
                diretorioAnterior="Home / Bancos de Sementes /" 
                diretorioAtual="Novo Banco de Semente" 
                hrefAnterior="/bancoSementes" />
            </div>

        </div>
    );
}