"use client"
import { useParams } from "next/navigation";
import ListAgricultoresBanco from "@/components/ListAgricultores";
export default function AssociadosPage({ banco }) {

  const params = useParams();

  return (
    <div>
      <ListAgricultoresBanco
        diretorioAnterior={`Home / Bancos Sementes / Banco Semente /`}
        diretorioAtual="Agricultores"
        hrefAnterior={`/bancoSementes/info/${params.id}/`}
        table1="nome"
        table2="Função"
        table3="Ação" />

    </div>
  )
}