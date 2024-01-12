import React from "react";
import NewFarmerForm from "@/components/NewBankForm/indexOne";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import styles from "@/app/novoBanco/index.module.scss"

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
                <NewFarmerForm />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}