"use client"
import React from "react";
import NewFarmerFormSocialData from "@/components/NewFarmerForm/IndexTwo";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header"
import styles from "@/app/associados/novoAssociado/index.module.scss"


export default function NewRegisterFarmerSocialData() {
    return (
        <div>
            <div>
            <Header />
            </div>
            <div>
                <h1 className={styles.title}>
                    Dados Sociais
                </h1>
            </div>

            <div>
                <NewFarmerFormSocialData />
            </div>
            <div>
            <Footer />
            </div>
        </div>
    );
}