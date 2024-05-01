import React from "react";
import SementeForm from "@/components/SementeForm/index";
import Footer from "@/components/Footer";


export default function NovaSementeFormPage() {
    return (
        <div>
            <SementeForm 
            diretorioAnterior="Home / Sementes /" 
            diretorioAtual="Nova Semente" 
            hrefAnterior="/sementes"/>
            {
            //<Footer />
            }
        </div>
    );
}