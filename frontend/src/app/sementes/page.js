
import ListSementes from "@/components/ListSementes";

export default function sementesPage() {
  return (
    <div>
      <ListSementes
        diretorioAnterior= "Home /" 
        diretorioAtual="Gestão de Sementes" 
        hrefAnterior="/" 
        table1="Imagem"
        table2="Cultura" 
        table3="Cultivar" 
        table4="Quantidade"
        table5="Safra"
        table6="Ação"
        />

    </div>
  )
}