
import ListAgricultores from "@/components/ListAgricultores";
export default function agricultoresPage() {

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