
import ListAgricultores from "@/components/ListAgricultores";
export default function AssociadosPage() {

  return (
    <div>
      <ListAgricultores
        diretorioAnterior="Home /"
        diretorioAtual="Agricultores"
        hrefAnterior="/"
        table1="Nome"
        table2="Nome Popular"
        table3="Contato"
        table4="Ações" />

    </div>
  )
}