"use client"
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import ListUsuarios from "@/components/ListUsuarios";
import { useParams } from "next/navigation";
import ListAgricultoresBanco from "@/components/ListAgricultoresBanco";
export default function AssociadosPage({ banco }) {

  const params = useParams();

  return (
    <div>
      <Header hrefAnterior={`/bancoSementes/info/${params.id}`} />
      <ListAgricultoresBanco
        diretorioAnterior={`Home / Bancos Sementes / Banco Semente /`}
        diretorioAtual="Agricultores"
        hrefAnterior={`/bancoSementes/info/${params.id}/`}
        table1="nome"
        table2="Função"
        table3="Ação" />

      <Footer />

    </div>
  )
}