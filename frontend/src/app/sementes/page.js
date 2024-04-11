import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import ListSementes from "@/components/ListSementes";

export default function SementesPage() {
  return (
    <div>
      <Header hrefAnterior="/inicio"/>
      <ListSementes
        diretorioAnterior= "Home /" 
        diretorioAtual="Sementes" 
        hrefAnterior="/inicio" 
        table1="Imagem"
        table2="Cultura" 

        table3="Nome da Cultivar" 
        table4="Ação"/>
      <Footer />

    </div>
  )
}