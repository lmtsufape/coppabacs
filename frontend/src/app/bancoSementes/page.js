import Footer from "@/components/Footer";
import ListBancoSementes from "@/components/ListBancoSementes";

export default function bancoSementesPage() {
  return (
    <div>
      <Header
        hrefAnterior="/inicio"
      />

      <ListBancoSementes
        diretorioAnterior="Home /"
        diretorioAtual="Bancos de Sementes"
        hrefAnterior="/inicio"
        table1="Nome"
        table2="Responsável"
        table3="Ação"
      />


      <Footer />

    </div>
  )
}