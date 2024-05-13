import React from "react";
import styles from "@/app/agricultores/novoAgricultor/index.module.scss"
import FuncionarioForm from "@/components/FuncionarioForm";

export default function novoFuncionarioPage() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.pageContainer__content}>
                <FuncionarioForm
                    diretorioAnterior="Home / Funcionários /"
                    diretorioAtual="Novo(a) Funcionário(a)"
                    hrefAnterior="/funcionarios" />
            </div>
        </div>
    );
}