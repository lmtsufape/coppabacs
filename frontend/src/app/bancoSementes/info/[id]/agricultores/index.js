// Página: pages/bancoSementes/info/[id]/agricultores/index.js
"use client";
import ListAgricultoresBanco from "@/components/ListAgricultoresBanco";


function AssociadosPage({ banco }) {
    return (
        <div>
            <ListAgricultoresBanco
                diretorioAnterior={`Home / Bancos Sementes / Banco Semente /`}
                diretorioAtual="Agricultores"
                hrefAnterior={`/bancoSementes/info/${banco.id}/`}
                table1="nome"
                table2="Função"
                table3="Ação" />
        </div>
    );
}

export default AssociadosPage;
