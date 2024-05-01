import React from "react";
import styles from "@/app/agricultores/novoAgricultor/index.module.scss"
import CoordenadorForm from "@/components/CoordenadorForm";

export default function NewRegisterFarmer() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.pageContainer__content}>
                <CoordenadorForm
                    diretorioAnterior="Home / Coordenadores /"
                    diretorioAtual="Novo Coordenador"
                    hrefAnterior="/coordenadores" />
            </div>

        </div>
    );
}