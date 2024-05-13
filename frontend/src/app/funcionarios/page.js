
import ListFuncionarios from "@/components/ListFuncionarios";
export default function funcionariosPage() {

  return (
    <div>
      <ListFuncionarios
        diretorioAnterior="Home /"
        diretorioAtual="Funcionários"
        hrefAnterior="/"
        table1="Nome"
        table2="Contato"
        table3="Função"
        table4="Ação" />
    </div>
  )
}