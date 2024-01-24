"use client"
import React from "react";
import NewFarmerRuralActivity from "@/components/NewFarmerForm/IndexThree";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header"
import styles from "@/app/agricultores/novoAgricultor/index.module.scss"


export default function NewRegisterFarmerSocialData() {
    return (
        <div>
            <div>
            <Header />
            </div>
            <div>
                <h1 className={styles.title}>
                    Atividade Rural
                </h1>
            </div>
            <div>
                <NewFarmerRuralActivity />
            </div>
            <div>
                <Footer />
            </div>
            
        </div>
    );
}