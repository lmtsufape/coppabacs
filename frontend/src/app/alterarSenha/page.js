import React from "react";
import styles from "@/app/agricultores/novoAgricultor/index.module.scss"
import AlterarSenhaForm from "@/components/AlterarSenhaForm";

export default function alterarSenhaPage() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.pageContainer__content}>
                <AlterarSenhaForm 
                diretorioAnterior="Perfil / " 
                diretorioAtual="Alterar Senha" 
                hrefAnterior="/login" />
            </div>
        </div>
    );
}