import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import ListAgricultor from "@/components/ListAgricultor";

export default function SolicitacoesPage() {

  return (
    <>
      <Header />
        <ListAgricultor
          class="content"
          diretorioAnterior="Home / Agricultores /"
          diretorioAtual="Solicitações"
          hrefAnterior="/agricultores"
          table1="Nome"
          table2="Apelido"
          table3="Contato"
          table4="Ação"
        />

        <Footer class="footer" />

    </>
  )
}