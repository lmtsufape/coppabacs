import React from "react";
import NewBankObjects from "@/components/NewBankForm/IndexTwo";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import styles from "@/app/bancoSementes/novoBanco/index.module.scss"

export default function BankObjects() {
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
                <NewBankObjects />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}