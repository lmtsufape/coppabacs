
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import ListTransacoes from "@/components/ListTransacoes";
import ListAgricultores from "@/components/ListAgricultores";
export default function AssociadosPage() {

  return (
    <div>
      <ListAgricultores
        diretorioAnterior="Home /"
        diretorioAtual="Agricultores"
        hrefAnterior="/inicio"
        table1="Nome"
        table2="Nome Popular"
        table3="Contato"
        table4="Ações" />

      <Footer />

    </div>
  )
}