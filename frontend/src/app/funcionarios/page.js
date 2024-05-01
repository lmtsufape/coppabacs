
import ListFuncionarios from "@/components/ListFuncionarios";
export default function AssociadosPage() {

  return (
    <div>
      <ListFuncionarios
        diretorioAnterior="Home /"
        diretorioAtual="Funcionarios"
        hrefAnterior="/"
        table1="nome"
        table2="Contato"
        table3="Função"
        table4="Ação" />

    </div>
  )
}