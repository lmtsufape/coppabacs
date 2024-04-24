import React from "react";
import Footer from "@/components/Footer";
import styles from "@/app/agricultores/novoAgricultor/index.module.scss"
import BancoForm from "@/components/BancoForm";

export default function NewRegisterFarmer() {
    return (
        <div className={styles.pageContainer}>
            {
                //<Header hrefAnterior="/bancoSementes" />

            }
            <div className={styles.pageContainer__content}>
                <BancoForm 
                diretorioAnterior="Home / Bancos Sementes /" 
                diretorioAtual="Novo Banco de Semente" 
                hrefAnterior="/bancoSementes" />
            </div>
            <Footer />

        </div>
    );
}