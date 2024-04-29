import React from "react";
import Footer from "@/components/Footer";
import styles from "@/app/agricultores/novoAgricultor/index.module.scss"
import RecuperarSenhaForm from "@/components/RecuperarSenhaForm";

export default function RecuperarSenhaPage() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.pageContainer__content}>
                <RecuperarSenhaForm 
                diretorioAnterior="Login / " 
                diretorioAtual="Recuperar Senha" 
                hrefAnterior="/login" />
            </div>
        </div>
    );
}