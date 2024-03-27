import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import ListSementes from "@/components/ListSementes"

export default function SolicitacoesPage() {

  return (
    <>
      <Header />
        <ListSementes
          class="content"
          diretorioAnterior="Home / Sementes /"
          diretorioAtual="Solicitações"
          hrefAnterior="/sementes"
          table1="Nome"
          table2="Apelido"
          table3="Contato"
          table4="Ação"
        />

        <Footer class="footer" />

    </>
  )
}