"use client"
import Header from "@/components/Home/Header";
import Footer from "@/components/Footer";

import { useParams } from "next/navigation";
import ListAgricultoresBanco from "@/components/ListAgricultoresBanco";
export default function AssociadosPage() {

  const params = useParams();
  return (
    <div>
      <Header hrefAnterior={`/bancoSementes/info/${params.id}/`} />
      <ListAgricultoresBanco
        diretorioAnterior={`Home / Bancos Sementes / Banco Semente /`}
        diretorioAtual="Agricultores"
        hrefAnterior={`/bancoSementes/info/${params.id}/`}
        table1="Nome"
        table2="Função"
        table3="Ação" />

      <Footer />

    </div>
  )
}