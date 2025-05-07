import ListSementesBanco from "@/components/ListSementesBanco";
export default function sementesBancoPage() {

  return (
    <div>
      <ListSementesBanco
        diretorioAnterior={`Home / Bancos Sementes / `}
        diretorioAtual="Sementes"
        hrefAnterior={`/bancoSementes`}
        table1="Imagem"
        table2="Cultura" 
        table3="Espécie" 
        table4="Ação" 
        />

    </div>
  )
}