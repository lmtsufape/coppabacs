
import ListSementes from "@/components/ListSementes"

export default function SolicitacoesPage() {

  return (
    <>
        <ListSementes
          class="content"
          diretorioAnterior="Home / Sementes /"
          diretorioAtual="Solicitações"
          hrefAnterior="/sementes"
          table1="Nome"
          table2="Apelido"
          table3="Contato"
          table4="Ação"
        />

    </>
  )
}