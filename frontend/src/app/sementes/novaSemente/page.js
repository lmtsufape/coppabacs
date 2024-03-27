import React from "react";
import SementeForm from "@/components/SementeForm/index";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";


export default function NovaSementeFormPage() {
    return (
        <div>
            <Header hrefAnterior="/sementes"/>
            <SementeForm diretorioAnterior="Home / Sementes /" diretorioAtual="Nova Semente" hrefAnterior="/sementes"/>
            <Footer />
        </div>
    );
}