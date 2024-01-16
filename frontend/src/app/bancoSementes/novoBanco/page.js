import React from "react";
import NewBankForm from "@/components/NewBankForm/IndexOne";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import styles from "@/app/bancoSementes/novoBanco/index.module.scss"

export default function NewBank() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <h1 className={styles.title}>
                    Adicionar um novo Banco
                </h1>
            </div>
            <div>
                <NewBankForm />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}