import React from "react";
import styles from "@/app/agricultores/novoAgricultor/index.module.scss"
import FuncionarioForm from "@/components/FuncionarioForm";

export default function novoFuncionarioPage() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.pageContainer__content}>
                <FuncionarioForm
                    diretorioAnterior="Home / Colaboradores /"
                    diretorioAtual="Novo(a) Colaborador(a)"
                    hrefAnterior="/colaboradores" />
            </div>
        </div>
    );
}