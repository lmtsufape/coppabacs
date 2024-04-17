
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import ListTransacoes from "@/components/ListTransacoes";
export default function AssociadosPage() {

  return (
    <div>
      <Header hrefAnterior="/inicio" />
      <ListTransacoes
        diretorioAnterior="Inicio /"
        diretorioAtual="Transacoes"
        hrefAnterior="/inicio"
        table1="Data"
        table2="Agricultor"
        table3="Semente"
        table4="Variedade"
        table5="Ações"

      />

      <Footer />

    </div>
  )
}