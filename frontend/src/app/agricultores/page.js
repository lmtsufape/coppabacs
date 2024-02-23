
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import ListUsuarios from "@/components/ListUsuarios";
export default function AssociadosPage(){

  return(
    <div>
      <Header />
      <ListUsuarios diretorioAnterior= "Home /" diretorioAtual="Agricultores" hrefAnterior="/inicio" table1="nome" table2="Função" table3="Ação"/>

      <Footer />

    </div>
  )
}