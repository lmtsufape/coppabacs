
import ListSementes from "@/components/ListSementes";

export default function SementesPage() {
  return (
    <div>
      <ListSementes
        diretorioAnterior= "Home /" 
        diretorioAtual="Sementes" 
        hrefAnterior="/" 
        table1="Imagem"
        table2="Cultura" 
        table3="Nome da Cultivar" 
        table4="Ação"/>

    </div>
  )
}