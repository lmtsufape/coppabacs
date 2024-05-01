import React from "react";
import styles from "@/app/agricultores/novoAgricultor/index.module.scss"
import UsuarioForm from "@/components/UsuarioForm";

export default function NewRegisterFarmer() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.pageContainer__content}>
                <UsuarioForm diretorioAnterior="Login / " diretorioAtual="Novo Usuario" hrefAnterior="/" />
            </div>

        </div>
    );
}