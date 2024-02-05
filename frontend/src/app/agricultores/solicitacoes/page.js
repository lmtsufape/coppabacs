import Header from "@/components/Header";
import Footer from "@/components/Home/Footer";
import ListAgricultor from "@/components/ListAgricultor";

export default function SolicitacoesPage() {

  return (
    <div>
      <Header />
      <ListAgricultor 
        diretorioAnterior="Home / Agricultores /"
        diretorioAtual="Solicitações"
        hrefAnterior="/agricultores"
        table1="Nome"
        table2="Apelido"
        table3="Contato"
        table4="Ação"
      />
      <Footer />

    </div>
  )
}