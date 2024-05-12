import React from "react";
import SementeForm from "@/components/SementeForm/index";

export default function novaSementePage() {
    return (
        <div>
            <SementeForm 
            diretorioAnterior="Home / Gestão de Sementes /" 
            diretorioAtual="Nova Semente" 
            hrefAnterior="/sementes"
            />
        </div>
    );
}