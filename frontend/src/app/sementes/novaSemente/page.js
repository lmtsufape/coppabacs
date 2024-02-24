import React from "react";
import SementeForm from "@/components/SementeForm/index";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";


export default function SeedFormPage() {
    return (
        <div>
            <Header />
            <SementeForm diretorioAnterior="Home / Agricultores /" diretorioAtual="Nova Semente" hrefAnterior="/sementes"/>
            <Footer />
        </div>
    );
}