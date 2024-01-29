import React from "react";
import AgricultorForm from "@/components/AgricultorForm";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import styles from "@/app/agricultores/novoAgricultor/index.module.scss"

export default function NewRegisterFarmer() {
    return (
        <div>
            <Header />
            <h1 className={styles.title}>
                Atividade Rural
            </h1>
            <AgricultorForm />
            <Footer />
        </div>
    );
}