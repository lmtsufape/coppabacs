
import Footer from "@/components/Footer";
import ListAgricultores from "@/components/ListAgricultores";
export default function AssociadosPage() {

  return (
    <div>
      <Header hrefAnterior="/" />
      <ListAgricultores
        diretorioAnterior="Home /"
        diretorioAtual="Agricultores"
        hrefAnterior="/"
        table1="nome"
        table2="Contato"
        table3="Função"
        table4="Ação" />

      <Footer />

    </div>
  )
}