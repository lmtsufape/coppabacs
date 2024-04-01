
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import ListAgricultores from "@/components/ListAgricultores";
export default function AssociadosPage() {

  return (
    <div>
      <Header hrefAnterior="/inicio" />
      <ListAgricultores
        diretorioAnterior="Home /"
        diretorioAtual="Agricultores"
        hrefAnterior="/inicio"
        table1="nome"
        table2="Contato"
        table3="Função"
        table4="Ação" />

      <Footer />

    </div>
  )
}