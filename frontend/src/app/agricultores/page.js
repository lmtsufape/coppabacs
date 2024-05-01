
import ListAgricultores from "@/components/ListAgricultores";
export default function AssociadosPage() {

  return (
    <div>
      <ListAgricultores
        diretorioAnterior="Home /"
        diretorioAtual="Agricultores"
        hrefAnterior="/"
        table1="nome"
        table2="Contato"
        table3="Função"
        table4="Ação" />

    </div>
  )
}