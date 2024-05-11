import ListBancoSementes from "@/components/ListBancoSementes";

export default function bancoSementesPage() {
  return (
    <div>

      <ListBancoSementes
        diretorioAnterior="Home /"
        diretorioAtual="Bancos de Sementes"
        hrefAnterior="/"
        table1="Nome"
        table2="Responsável"
        table3="Ações"
      />

    </div>
  )
}