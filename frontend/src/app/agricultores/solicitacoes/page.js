import ListSolicitacoes from "@/components/ListSolicitacoes";

export default function SolicitacoesPage() {

  return (
    <>
        <ListSolicitacoes
          className="content"
          diretorioAnterior="Home / Agricultores /"
          diretorioAtual="Solicitações"
          hrefAnterior="/agricultores"
          table1="Nome"
          table2="Nome Popular"
          table3="Contato"
          table4="Ação"
        />

    </>
  )
}